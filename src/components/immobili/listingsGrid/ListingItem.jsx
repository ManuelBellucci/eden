import { SingleCarousel } from '../../home/featured/SingleCarousel'
import Tag from '../../commons/Tag'
import { Link } from 'react-router-dom'
import PropertyIcons from './PropertyIcons'

const ListingItem = ({ listing }) => {
  return (
    <div className='flex flex-col relative'>
      {listing.tag && <Tag text={listing.tag} color='bg-primary-500/50' position='topLeft' size='lg' />}
      <SingleCarousel images={listing.images} id={listing._id} />

      <Link to={`/immobili/${listing._id}`}>
        <hgroup className='mt-4'>
          <h3 className='text-xl lg:text-2xl font-bold text-primary-50'>{listing.title}</h3>
          <div className='flex justify-between items-center'>
            <p className='text-lg text-primary-50'>{listing.address}, {listing.municipality}</p>
            <div className='italic text-base text-primary-50'>Rif. {listing._id}</div>
          </div>
          <div className='border-t mt-2 pt-2 text-lg flex justify-between'>
            <PropertyIcons listing={listing} />
            <span className='text-lg xl:text-xl self-center font-extrabold text-primary-50'>{listing.pubPrice.toLocaleString()}€</span>
          </div>
        </hgroup>
      </Link>
    </div>
  )
}
export default ListingItem
