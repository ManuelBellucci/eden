import axios from 'axios'
import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL

const useListing = (id) => {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`${API_URL}/listings/${id}`)
        setListing(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchListing()
  }, [id])

  return { listing, loading, error }
}

export default useListing
