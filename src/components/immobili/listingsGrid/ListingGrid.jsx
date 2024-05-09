import { useState } from 'react';
import useFetchListings from '../../../hooks/useFetchListings';
import CardSkeleton from '../../skeletons/CardSkeleton';
import ListingItem from './ListingItem';
import Pagination from '../../commons/Pagination'

const ListingGrid = ({ filters }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const listingsPerPage = 9;
    const { listings: immobili, totalListings, loading, error } = useFetchListings(currentPage, listingsPerPage, filters);
    const totalPages = Math.ceil(totalListings / listingsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const skeletons = Array.from({ length: listingsPerPage });

    return (
        <div>
            <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3'>
                {loading ? (
                    skeletons.map((_, index) => <CardSkeleton key={index} />)
                ) : error ? (
                    <p className="text-center text-red-500">Error loading listings</p>
                ) : immobili.length > 0 ? (
                    immobili.map((listing) => <ListingItem key={listing._id} listing={listing} />)
                ) : (
                    <>
                        <p></p>
                        <p className="text-center text-gray-500">Nessun immobile trovato, iscriviti alla Nostra Newsletter</p>
                    </>
                )}
            </div>
            {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            )}
        </div>
    );
};

export default ListingGrid;
