import { useState, useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { objectToQueryString } from '../helpers/queryHelpers'

const useFetchListings = (page, listingsPerPage, filters = {}) => {
  const [listings, setListings] = useState([])
  const [totalListings, setTotalListings] = useState(0)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [cache, setCache] = useState({})

  const queryParams = useMemo(() => ({ page, limit: listingsPerPage, ...filters }), [page, listingsPerPage, filters])
  const queryString = useMemo(() => objectToQueryString(queryParams), [queryParams])
  const cacheKey = useMemo(() => JSON.stringify(queryParams), [queryParams])
  const updateCache = useCallback((key, data) => {
    setCache((prevCache) => ({
      ...prevCache,
      [key]: data
    }))
  }, [])

  useEffect(() => {
    let isMounted = true

    const fetchListings = async () => {
      if (cache[cacheKey]) {
        setListings(cache[cacheKey].listings.filter(listing => listing.active))
        setTotalListings(cache[cacheKey].totalListings)
        return
      }

      setLoading(true)

      try {
        const response = await axios.get(`https://eden-backend-p2qt7sfpg-manuelbelluccis-projects.vercel.app/listings?${queryString}`)
        if (isMounted) {
          const activeListings = response.data.listings.filter(listing => listing.active)
          setListings(activeListings)
          setTotalListings(activeListings.length)
          setError(null)

          // Update cache
          updateCache(cacheKey, {
            listings: activeListings,
            totalListings: activeListings.length
          })
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching listings:', err)
          setError(err)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchListings()

    return () => {
      isMounted = false
    }
  }, [queryString, cacheKey, cache, updateCache])

  return { listings, totalListings, error, loading }
}

export default useFetchListings
