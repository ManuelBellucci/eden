import { useEffect, useState } from 'react';
import axios from 'axios';

// Helper function to convert an object to a query string
const objectToQueryString = (params) => {
    return Object.entries(params)
        .filter(([_, value]) => value !== null && value !== '' && value !== false)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
};

const useFetchListings = (page, listingsPerPage, filters = {}) => {
    const [listings, setListings] = useState([]);
    const [totalListings, setTotalListings] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const queryParams = {
                    page,
                    limit: listingsPerPage,
                    ...filters,
                };
                const queryString = objectToQueryString(queryParams);
                const response = await axios.get(`http://localhost:5000/listings?${queryString}`);
                setListings(response.data.listings);
                setTotalListings(response.data.totalListings);
                setError(null);
            } catch (error) {
                console.error('Error fetching listings:', error);
                setError(error);
            }
        };

        fetchListings();
    }, [page, listingsPerPage, filters]);

    return { listings, totalListings, error };
};

export default useFetchListings;
