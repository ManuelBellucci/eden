import { SingleCarousel } from '../../home/featured/SingleCarousel'
// Importa il componente per visualizzare un tag sull'annuncio (es. "In evidenza")
import Tag from '../../commons/Tag'
// Importa `Link` per navigare verso la pagina del dettaglio dell'immobile
import { Link } from 'react-router-dom'
// Importa il componente per visualizzare le icone delle caratteristiche dell'immobile
import PropertyIcons from './PropertyIcons'

const ListingItem = ({ listing }) => {
  return (
    <div className='flex flex-col relative'>
      {/* Se l'annuncio ha un tag, lo visualizza */}
      {listing.tag && <Tag text={listing.tag} color='bg-primary-500' position='topLeft' size='lg' />}
      {/* Mostra il carosello di immagini */}
      <SingleCarousel images={listing.images} id={listing._id} />

      {/* Link che porta al dettaglio dell'annuncio */}
      <Link to={`/immobili/${listing._id}`}>
        <hgroup className='mt-4'>
          <h3 className='text-xl lg:text-2xl text-primary-50 line-clamp-1'> {/* Limit title to 2 lines */}
            {listing.title}
          </h3>
          {/* Mostra l'indirizzo e il riferimento dell'annuncio */}
          <div className='flex justify-between items-center'>
            <p className='text-lg text-primary-50'>{listing.address}, {listing.municipality}</p>
            <div className='italic text-base text-primary-50'>Rif. {listing._id}</div>
          </div>
          {/* Mostra le icone delle caratteristiche e il prezzo */}
          <div className='border-t mt-2 pt-2 text-lg flex justify-between'>
            <PropertyIcons listing={listing} />
            <span className='text-lg xl:text-xl self-center text-primary-50'>
              {listing.pubPrice.toLocaleString()}€
            </span>
          </div>
        </hgroup>
      </Link>
    </div>
  )
}
export default ListingItem
