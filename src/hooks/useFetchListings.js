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
      let allListings = [] // Array per accumulare tutte le proprietà
      let currentPage = 1 // Inizia dalla prima pagina
      let totalPages = 1 // Numero totale di pagine, inizialmente 1 (sarà aggiornato)
      let fetchedTotalListings = 0 // Conta totale delle proprietà

      try {
        // Loop per continuare a fare richieste finché ci sono pagine da caricare
        while (currentPage <= totalPages) {
          const response = await axios.get(`${API_URL}/listings?${queryString}&page=${currentPage}`) // Richiesta API con pagina

          // Filtra solo le proprietà attive
          const activeListings = response.data.listings.filter(listing => listing.active)

          allListings = [...allListings, ...activeListings] // Accumula le proprietà
          fetchedTotalListings = response.data.total // Aggiorna il numero totale di proprietà dal server

          totalPages = Math.ceil(fetchedTotalListings / listingsPerPage) // Calcola il totale delle pagine
          currentPage += 1 // Passa alla pagina successiva

          // Verifica se il componente è ancora montato
          if (!isMounted) {
            break // Se il componente è stato smontato, interrompi il ciclo
          }
        }

        if (isMounted) {
          setListings(allListings) // Imposta tutte le proprietà caricate
          setTotalListings(fetchedTotalListings) // Imposta il numero totale delle proprietà
          setError(null)

          // Aggiorna la cache
          updateCache(cacheKey, {
            listings: allListings,
            totalListings: fetchedTotalListings
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
