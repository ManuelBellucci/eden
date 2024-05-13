import { useState, useEffect } from 'react'
import axios from 'axios'
import { objectToQueryString } from '../helpers/queryHelpers'

const useFetchListings = (page, listingsPerPage, filters = {}) => {
    const [listings, setListings] = useState([])
    const [totalListings, setTotalListings] = useState(0)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [cache, setCache] = useState({})

    useEffect(() => {
        const fetchListings = async () => {
            const queryParams = {
                page,
                limit: listingsPerPage,
                ...filters,
            }
            const queryString = objectToQueryString(queryParams)
            const cacheKey = JSON.stringify(queryParams)

            // Controlla se i dati sono già presenti nella cache
            if (cache[cacheKey]) {
                setListings(cache[cacheKey].listings)
                setTotalListings(cache[cacheKey].totalListings)
                return
            }

            setLoading(true)

            try {
                const response = await axios.get(`http://localhost:5000/listings?${queryString}`)
                setListings(response.data.listings)
                setTotalListings(response.data.totalListings)
                setError(null)

                // Aggiorna la cache locale con i nuovi dati
                setCache((prevCache) => ({
                    ...prevCache,
                    [cacheKey]: {
                        listings: response.data.listings,
                        totalListings: response.data.totalListings
                    }
                }))
            } catch (error) {
                console.error('Error fetching listings:', error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchListings()
    }, [page, listingsPerPage, filters, cache])

    return { listings, totalListings, error, loading }
}

export default useFetchListings 
