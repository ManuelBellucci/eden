import { useState } from "react";
import useFetchListings from "../../../hooks/useFetchListings";
import CardSkeleton from "../../skeletons/CardSkeleton"
import ListingItem from "./ListingItem";

const ListingGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const listingsPerPage = 9;
    const { listings: immobili, loading, error } = useFetchListings(currentPage, listingsPerPage);
    const skeletons = Array.from({ length: listingsPerPage });

    return (
        <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3'>
            {loading ? (
                skeletons.map((_, index) => <CardSkeleton key={index} />)
            ) : error ? (
                <p className="text-center text-red-500">Errore nel caricamento degli immobili</p>
            ) : immobili.length > 0 ? (
                immobili.map((listing) => <ListingItem key={listing._id} listing={listing} />)
            ) : (
                <p className="text-center">Nessun immobile disponibile</p>
            )}
        </div>
    );
};

export default ListingGrid;
