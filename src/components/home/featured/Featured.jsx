import useFetchListings from '../../../hooks/useFetchListings'
import ListingItem from '../../immobili/listingsGrid/ListingItem'
import CardSkeleton from '../../skeletons/CardSkeleton'

const Loading = () => (
  <div className='m-14 mt-24'>
    <h2 className='text-center mb-20 text-xl font-extrabold leading-none text-primary-50 md:text-2xl lg:text-4xl'>
      Le proposte del mese: <span className='text-primary-500'>in vendita</span>
    </h2>
    <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3'>
      {[1, 2, 3, 4, 5, 6].map(index => (
        <CardSkeleton key={index} />
      ))}
    </div>
  </div>
)

const Featured = () => {
  const { listings: featured, loading, error } = useFetchListings(1, 6, { featured: true })

  if (loading) return <Loading />
  if (error || !Array.isArray(featured)) return <></>

  return (
    <div className='m-14 mt-24'>
      <h2 className='text-center mb-20 text-xl font-extrabold leading-none text-primary-50 md:text-2xl lg:text-4xl'>
        Le proposte del mese: <span className='text-primary-500'>in vendita</span>
      </h2>
      <div className='grid grid-cols-1 gap-x-8 gap-y-16 xl:grid-cols-3'>
        {featured.map(listing => (
          <ListingItem key={listing._id} listing={listing} />
        ))}
      </div>
    </div>
  )
}

export default Featured
