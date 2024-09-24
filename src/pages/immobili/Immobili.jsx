import { Suspense, lazy } from 'react'

const Filters = lazy(() => import('../../components/immobili/filters/Filters'))
const ListingGrid = lazy(() => import('../../components/immobili/listingsGrid/ListingGrid'))

// Pagina principale per la visualizzazione degli immobili
const Immobili = () => {
  return (
    <div className='mx-14 mb-14'>
      <Suspense fallback={<div>Caricando...</div>}>
        <Filters />
      </Suspense>
      <Suspense fallback={<div>Caricando...</div>}>
        <ListingGrid />
      </Suspense>
    </div>
  )
}

export default Immobili
