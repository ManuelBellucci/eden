import { useState } from 'react';
import useFetchListings from '../../hooks/useFetchListings';
import Pagination from '../../components/commons/Pagination';
import ListingItem from '../../components/commons/ListingItem';

const Immobili = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const listingsPerPage = 9;

    const { listings: immobili, totalListings, loading, error } = useFetchListings(currentPage, listingsPerPage);
    const totalPages = Math.ceil(totalListings / listingsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    if (loading) {
        return <div className="h-screen flex justify-center items-center">Loading...</div>
    }

    if (error) {
        return <div className="h-screen flex justify-center items-center">Error: {error.message}</div>
    }

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <h1 className="text-6xl">I nostri immobili</h1>
            </div>
            <div className='m-14'>
                <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3'>
                    {error ? (
                        <p className="text-center text-red-500">Errore nel caricamento degli immobili</p>
                    ) : immobili.length > 0 ? (
                        immobili.map((listing) => <ListingItem tag key={listing._id} listing={listing} />)
                    ) : (
                        <p className="text-center">Nessun immobile disponibile</p>
                    )}
                </div>

                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
};

export default Immobili;
