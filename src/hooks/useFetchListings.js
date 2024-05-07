import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchListings = (page, listingsPerPage) => {
    const [listings, setListings] = useState([]);
    const [totalListings, setTotalListings] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/listings?page=${page}&limit=${listingsPerPage}`);
                setListings(response.data.listings);
                setTotalListings(response.data.totalListings);
                setError(null);
            } catch (error) {
                console.error('Error fetching listings:', error);
                setError(error);
            }
        };
        fetchListings();
    }, [page, listingsPerPage]);

    return { listings, totalListings, error };
};

export default useFetchListings;
