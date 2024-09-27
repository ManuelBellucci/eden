import { useState, useContext } from 'react'
// Hook personalizzato per recuperare le proprietà in base ai filtri
import useFetchListings from '../../../hooks/useFetchListings'
// Componente per mostrare uno scheletro di caricamento mentre gli immobili vengono caricati
import CardSkeleton from '../../skeletons/CardSkeleton'
// Componente per visualizzare un singolo annuncio immobiliare
import ListingItem from './ListingItem'
// Componente di paginazione per gestire la navigazione tra le pagine
import Pagination from '../../commons/Pagination'
// Contesto per accedere allo stato dei filtri
import { FiltersContext } from '../../../contexts/FiltersContext'

const ListingGrid = () => {
  // Stato per gestire la pagina corrente nella paginazione
  const [currentPage, setCurrentPage] = useState(1)
  // Numero di annunci da mostrare per pagina
  const listingsPerPage = 9
  // Destruttura i filtri dal FiltersContext
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

  // Hook per recuperare gli immobili in base alla pagina e ai filtri
  const { listings: immobili, totalPages, loading, error } = useFetchListings(currentPage, listingsPerPage, filters)

  // Funzione per cambiare pagina
  const handlePageChange = (page) => {
    console.log('Page changed to:', page)
    setCurrentPage(page)
  }

  // Crea dei segnaposto per lo scheletro durante il caricamento
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
