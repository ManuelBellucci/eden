import axios from 'axios'
import { useEffect, useState } from 'react'

// Costante per l'URL dell'API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Hook per recuperare una singola proprietà
const useListing = (id) => {
  const [listing, setListing] = useState(null) // Stato per la proprietà
  const [loading, setLoading] = useState(true) // Stato di caricamento
  const [error, setError] = useState(null) // Stato per gli errori

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`${API_URL}/listings/${id}`) // Richiesta API per la proprietà
        setListing(response.data) // Imposta la proprietà recuperata
      } catch (error) {
        setError(error) // Imposta l'errore in caso di fallimento
      } finally {
        setLoading(false) // Disattiva lo stato di caricamento
      }
    }

    fetchListing() // Inizializza il recupero della proprietà
  }, [id]) // Ricarica se l'ID cambia

  return { listing, loading, error } // Ritorna i dati della proprietà
}

export default useListing
