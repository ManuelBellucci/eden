import { useEffect, useState } from 'react';
import axios from 'axios';
import { objectToQueryString } from '../helpers/queryHelpers';

const useFetchListings = (page, listingsPerPage, filters = {}) => {
    const [listings, setListings] = useState([]);
    const [totalListings, setTotalListings] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

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
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, [page, listingsPerPage, filters]);

    return { listings, totalListings, error, loading };
};

export default useFetchListings;
