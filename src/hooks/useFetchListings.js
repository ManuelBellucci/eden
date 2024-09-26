import { useState, useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { objectToQueryString } from '../helpers/queryHelpers'

// Costante per l'URL dell'API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Hook per recuperare le liste di proprietà
const useFetchListings = (listingsPerPage, filters = {}) => {
  const [listings, setListings] = useState([]) // Stato per le liste di proprietà
  const [totalListings, setTotalListings] = useState(0) // Stato per il numero totale di proprietà
  const [error, setError] = useState(null) // Stato per gli errori
  const [loading, setLoading] = useState(false) // Stato di caricamento
  const [cache, setCache] = useState({}) // Cache per i dati delle proprietà

  // Parametri della query basati sui filtri e la paginazione
  const queryParams = useMemo(() => ({ limit: listingsPerPage, ...filters }), [listingsPerPage, filters])
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

    const fetchAllPages = async () => {
      setLoading(true) // Imposta lo stato di caricamento
      let allListings = [] // Accumuliamo qui tutte le proprietà
      let currentPage = 1 // Partiamo dalla prima pagina
      let fetchedListings = [] // Risultati temporanei per ogni pagina

      try {
        do {
          // Fai una richiesta API per la pagina corrente
          const response = await axios.get(`${API_URL}/listings?${queryString}&page=${currentPage}`)

          // Filtra solo le proprietà attive
          fetchedListings = response.data.listings.filter(listing => listing.active)

          // Aggiungiamo le proprietà attive alla lista totale
          allListings = [...allListings, ...fetchedListings]

          currentPage += 1 // Passa alla prossima pagina
        } while (fetchedListings.length > 0 && isMounted) // Continua finché ci sono listings e il componente è montato

        if (isMounted) {
          setListings(allListings) // Imposta tutte le proprietà caricate
          setTotalListings(allListings.length) // Imposta il numero totale delle proprietà
          setError(null)

          // Aggiorna la cache
          updateCache(cacheKey, {
            listings: allListings,
            totalListings: allListings.length
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

    // Se abbiamo i dati in cache, usali
    if (cache[cacheKey]) {
      setListings(cache[cacheKey].listings)
      setTotalListings(cache[cacheKey].totalListings)
    } else {
      fetchAllPages() // Altrimenti, fai la richiesta API per recuperare tutte le pagine
    }

    return () => {
      isMounted = false // Cleanup per evitare update su componenti smontati
    }
  }, [queryString, cacheKey, cache, updateCache])

  return { listings, totalListings, error, loading } // Ritorna i dati delle proprietà e gli stati
}

export default useFetchListings
