import { useState, useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { objectToQueryString } from '../helpers/queryHelpers'

// Costante per l'URL dell'API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Hook per recuperare le liste di proprietà
const useFetchListings = (page, listingsPerPage, filters = {}) => {
  const [listings, setListings] = useState([]) // Stato per le liste di proprietà
  const [totalListings, setTotalListings] = useState(0) // Stato per il numero totale di proprietà
  const [error, setError] = useState(null) // Stato per gli errori
  const [loading, setLoading] = useState(false) // Stato di caricamento
  const [cache, setCache] = useState({}) // Cache per i dati delle proprietà

  // Parametri della query basati sui filtri e la paginazione
  const queryParams = useMemo(() => ({ page, limit: listingsPerPage, ...filters }), [page, listingsPerPage, filters])
  // Conversione dei parametri della query in una stringa
  const queryString = useMemo(() => objectToQueryString(queryParams), [queryParams])
  // Chiave della cache basata sui parametri della query
  const cacheKey = useMemo(() => JSON.stringify(queryParams), [queryParams])

  // Funzione per aggiornare la cache
  const updateCache = useCallback((key, data) => {
    setCache((prevCache) => ({
      ...prevCache,
      [key]: data
    }))
  }, [])

  useEffect(() => {
    let isMounted = true // Flag per verificare se il componente è montato

    const fetchListings = async () => {
      // Controlla se i dati sono già presenti nella cache
      if (cache[cacheKey]) {
        setListings(cache[cacheKey].listings.filter(listing => listing.active)) // Filtra solo le proprietà attive
        setTotalListings(cache[cacheKey].totalListings)
        return
      }

      setLoading(true) // Imposta lo stato di caricamento

      try {
        const response = await axios.get(`${API_URL}/listings?${queryString}`) // Richiesta API
        if (isMounted) {
          const activeListings = response.data.listings.filter(listing => listing.active) // Filtra le proprietà attive
          setListings(activeListings)
          setTotalListings(response.data.total) // Aggiorna il numero totale di listings basato sulla risposta dell'API
          setError(null)

          // Aggiorna la cache
          updateCache(cacheKey, {
            listings: activeListings,
            totalListings: response.data.total
          })
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching listings:', err)
          setError(err) // Imposta l'errore in caso di fallimento
        }
      } finally {
        if (isMounted) {
          setLoading(false) // Disattiva lo stato di caricamento
        }
      }
    }

    fetchListings()

    return () => {
      isMounted = false // Cleanup per evitare update su componenti smontati
    }
  }, [queryString, cacheKey, cache, updateCache])

  return { listings, totalListings, error, loading } // Ritorna i dati delle proprietà e gli stati
}

export default useFetchListings
