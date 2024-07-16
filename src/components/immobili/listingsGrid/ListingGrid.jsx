// src/components/immobili/listingsGrid/ListingGrid.jsx
import { useState, useContext } from 'react'
import useFetchListings from '../../../hooks/useFetchListings'
import CardSkeleton from '../../skeletons/CardSkeleton'
import ListingItem from './ListingItem'
import Pagination from '../../commons/Pagination'
import { FiltersContext } from '../../../contexts/FiltersContext'

const ListingGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const listingsPerPage = 9
  const { contract, tipology, price, size, rooms, bathrooms, floor, extras } = useContext(FiltersContext)

  const filters = {
    contract,
    tipology,
    priceFrom: price.from,
    priceTo: price.to,
    sizeFrom: size.from,
    sizeTo: size.to,
    roomsFrom: rooms.from,
    roomsTo: rooms.to,
    bathrooms,
    floor,
    ...extras
  }

  const { listings: immobili, totalListings, loading, error } = useFetchListings(currentPage, listingsPerPage, filters)
  const totalPages = Math.ceil(totalListings / listingsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  const skeletonPlaceholders = [...Array(listingsPerPage).keys()]

  return (
    <div>
      <div className='grid grid-cols-1 gap-x-8 gap-y-16 xl:grid-cols-3'>
        {loading
          ? skeletonPlaceholders.map((index) => <CardSkeleton key={index} />)
          : error
            ? <p className='text-center text-3xl text-red-500 col-span-3'>Errore nel caricamento degli immobili. Riprova più tardi o segnala l'errore all'Ufficio.</p>
            : immobili.length > 0
              ? immobili.map((listing) =>
                <ListingItem key={listing._id} listing={listing} />
              )
              : <p className='text-center text-3xl text-primary-50 col-span-3'>Nessun immobile trovato, prova con un altra ricerca o iscriviti alla Nostra Newsletter per rimanere aggiornato.</p>}
      </div>
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </div>
  )
}

export default ListingGrid
