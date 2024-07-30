import { Suspense, lazy } from 'react'

const Filters = lazy(() => import('../../components/immobili/filters/Filters'))
const ListingGrid = lazy(() => import('../../components/immobili/listingsGrid/ListingGrid'))

const Immobili = () => {
  return (
    <div className='mx-14 mb-14'>
      <Suspense fallback={<div>Loading Filters...</div>}>
        <Filters />
      </Suspense>
      <Suspense fallback={<div>Loading Listings...</div>}>
        <ListingGrid />
      </Suspense>
    </div>
  )
}

export default Immobili
