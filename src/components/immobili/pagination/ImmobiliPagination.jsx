import { useState } from 'react';
import Pagination from '../../commons/Pagination';
import useFetchListings from '../../../hooks/useFetchListings';
const ImmobiliPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const listingsPerPage = 9;
    const { totalListings } = useFetchListings(currentPage, listingsPerPage);
    const totalPages = Math.ceil(totalListings / listingsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    );
};

export default ImmobiliPagination;
