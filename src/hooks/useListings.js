import { useState, useContext, useMemo, useCallback } from 'react'
import useFetchListings from './useFetchListings'
import { FiltersContext } from '../contexts/FiltersContext'

const useListings = (listingsPerPage = 9) => {
  const [currentPage, setCurrentPage] = useState(1)

  const {
    contract,
    tipology,
    price,
    size,
    rooms,
    bathrooms,
    floor,
    extras
  } = useContext(FiltersContext)

  const filters = useMemo(() => ({
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
  }), [contract, tipology, price, size, rooms, bathrooms, floor, extras])

  const { listings: immobili, totalListings, loading, error } = useFetchListings(currentPage, listingsPerPage, filters)

  const totalPages = Math.ceil(totalListings / listingsPerPage)

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page)
  }, [])

  return {
    immobili,
    totalListings,
    loading,
    error,
    currentPage,
    totalPages,
    handlePageChange
  }
}

export default useListings
