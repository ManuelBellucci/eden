import { useState, useContext, useMemo, useCallback } from 'react'
import useFetchListings from './useFetchListings'
import { FiltersContext } from '../contexts/FiltersContext'

// Hook per gestire le proprietà delle liste
const useListings = (listingsPerPage = 9) => {
  const [currentPage, setCurrentPage] = useState(1) // Stato per la pagina corrente

  // Estrae i valori dal contesto dei filtri
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

  // Composizione dei filtri in un oggetto
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

  // Utilizza l'hook useFetchListings per recuperare le proprietà
  const { listings: immobili, totalListings, loading, error } = useFetchListings(currentPage, listingsPerPage, filters)

  const totalPages = Math.ceil(totalListings / listingsPerPage) // Calcola il numero totale di pagine

  // Gestisce il cambiamento di pagina
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
