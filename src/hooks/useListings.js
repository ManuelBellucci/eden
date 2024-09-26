import { useContext, useMemo } from 'react'
import useFetchListings from './useFetchListings'
import { FiltersContext } from '../contexts/FiltersContext'

// Hook per gestire le proprietà delle liste
const useListings = (listingsPerPage = 9) => {
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
  const { listings: immobili, totalListings, loading, error } = useFetchListings(listingsPerPage, filters)

  return {
    immobili,
    totalListings,
    loading,
    error
  }
}

export default useListings
