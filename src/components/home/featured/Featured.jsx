import useFetchListings from '../../../hooks/useFetchListings'
import ListingItem from '../../immobili/listingsGrid/ListingItem'
import CardSkeleton from '../../skeletons/CardSkeleton'

// Componente di caricamento
const Loading = () => (
  <div className='m-14 mt-24'>
    <h2 className='text-center text-balance mb-4 text-3xl   leading-none text-primary-50 lg:text-4xl'>
      Le proposte del mese: <span className='text-primary-500'>in vendita</span>
    </h2>

    {/* Griglia per le card di caricamento. Mostra uno skeleton per ogni card. */}
    <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3'>
      {[1, 2, 3, 4, 5, 6].map(index => (
        <CardSkeleton key={index} />
      ))}
    </div>
  </div>
)

// Componente Featured - Recupera e visualizza le proprietà in evidenza.
const Featured = () => {
  // Usa il hook per recuperare gli immobili in evidenza
  const { listings: featured, loading, error } = useFetchListings(1, 6, { featured: true })

  if (loading) return <Loading /> // Mostra il componente di caricamento se in corso
  if (error || !Array.isArray(featured)) return <></> // Non mostra nulla in caso di errore

  return (
    <div className='m-14 mt-24'>
      <h2 className='text-center text-balance mb-4 text-3xl   leading-none text-primary-50 lg:text-4xl'>
        Le proposte del mese: <span className='text-primary-500'>in vendita</span>
      </h2>

      {/* Griglia per gli immobili in evidenza */}
      <div className='grid grid-cols-1 gap-x-8 gap-y-16 xl:grid-cols-3'>
        {featured.map(listing => (
          <ListingItem key={listing._id} listing={listing} />
        ))}
      </div>
    </div>
  )
}

export default Featured
