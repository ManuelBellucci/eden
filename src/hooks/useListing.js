import axios from 'axios'
import { useEffect, useState } from 'react'

const useListing = (id) => {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`https://eden-backend.vercel.app/listings/${id}`)
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
