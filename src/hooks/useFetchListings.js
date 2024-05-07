import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchListings = (page = 1, limit = 10, filters = {}) => {
    const [listings, setListings] = useState([]);
    const [totalListings, setTotalListings] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const queryParams = new URLSearchParams({ page, limit, ...filters }).toString();
                const response = await axios.get(`http://localhost:5000/listings?${queryParams}`);
                setListings(response.data.listings);
                setTotalListings(response.data.totalListings);
                setLoading(false);
                setError(null);
            } catch (error) {
                console.error('Error fetching listings:', error);
                setError(error);
                setLoading(false);
            }
        };
        fetchListings();
    }, [page, limit, filters]);

    return { listings, totalListings, loading, error };
};

export default useFetchListings;
