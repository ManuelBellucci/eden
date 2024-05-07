import axios from 'axios'
import { useEffect, useState } from 'react'
import { SingleCarousel } from '../../components/home/featured/SingleCarousel'

const Immobili = () => {
    const [immobili, setImmobili] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalListings, setTotalListings] = useState(0)
    const listingsPerPage = 9
    // const [filters, setFilters] = useState({
    //     type: '',
    //     municipality: '',
    //     floor: '',
    //     minExpositions: '',
    //     hasCellar: '',
    //     minCommercialSqm: '',
    //     maxPubPrice: '',
    //     minBedrooms: '',
    //     minBathrooms: '',
    //     hasGarage: '',
    //     hasGarden: '',
    //     hasTerraceOrBalcony: '',
    //     heatingType: ''
    // })

    const fetchImmobili = async (page) => {
        try {
            const response = await axios.get(`http://localhost:5000/listings?page=${page}&limit=${listingsPerPage}`);
            setImmobili(response.data.listings); // Accessing `listings` array inside the response
            setTotalListings(response.data.totalListings);
        } catch (error) {
            console.error('Error fetching immobili:', error);
        }
    };

    useEffect(() => {
        fetchImmobili(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(totalListings / listingsPerPage);

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <h1 className="text-6xl">I nostri immobili</h1>
            </div>
            <div className='m-14'>
                <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3'>
                    {Array.isArray(immobili) && immobili.length > 0 ? (
                        immobili.map(listing => (
                            <div key={listing._id} className='flex flex-col relative'>
                                <SingleCarousel images={listing.images} />
                                <hgroup className='mt-4'>
                                    <h3 className='text-2xl font-bold'>{listing.title}</h3>
                                    <p>{listing.address}, {listing.municipality}</p>
                                    <div className='border-t mt-2 pt-2 text-lg flex justify-between'>
                                        <div className='flex'>
                                            <span className='border-r text-sm px-2 flex items-center gap-2'><img src='./double-bed.png' className='h-6 w-6' alt='bed icon' /> {listing.singleBedrooms + listing.doubleBedrooms} </span>
                                            <span className='border-r text-sm px-2 flex items-center gap-2'><img src='./toilet.png' className='h-6 w-6' alt='toilet icon' /> {listing.bathrooms} </span>
                                            <span className='border-r text-sm px-2 flex items-center gap-2'><img src='./ruler.png' className='h-6 w-6' alt='size icon' /> {listing.commercialSqm} mq</span>
                                        </div>
                                        <span className='text-xl font-extrabold text-primary-400'>{listing.pubPrice.toLocaleString()}€</span>
                                    </div>
                                </hgroup>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Nessun immobile disponibile</p>
                    )}
                </div>

                {/* Pagination Controls */}
                <div className="mt-8 flex justify-center items-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`px-3 py-1 mx-1 border rounded ${index + 1 === currentPage ? 'bg-primary-400 text-white' : 'bg-white text-primary-400'}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Immobili