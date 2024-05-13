import { SingleCarousel } from '../../home/featured/SingleCarousel'
import Tag from '../../commons/Tag'
import { Link } from 'react-router-dom'
const ListingItem = ({ listing, tag }) => {
    return (
        <div className='flex flex-col relative'>
            {tag && <Tag
                text={listing.tag}
                color='bg-primary-500/75'
                position='topLeft'
                size='lg'
            />}
            <SingleCarousel images={listing.images} id={listing._id} />
        
            <Link to={`/immobili/${listing._id}`} >
                <hgroup className='mt-4'>
                    <h3 className='text-lg 2xl:text-xl font-bold'>{listing.title}</h3>
                    <div className='flex justify-between items-center'>
                        <p className='text-xs'>{listing.address}, {listing.municipality}</p>
                        <div className='italic text-xs'>Rif. {listing._id}</div>
                    </div>
                    <div className='border-t mt-2 pt-2 text-lg flex justify-between'>
                        <div className='flex'>
                            <span className='text-xs text-nowrap px-1 flex flex-col items-center gap-2'><img src='./double-bed.png' className='h-6 object-contain' alt='bed icon' /> {listing.singleBedrooms + listing.doubleBedrooms} </span>
                            <span className='text-xs text-nowrap px-1 flex flex-col items-center gap-2'><img src='./toilet.png' className='h-6 object-contain' alt='toilet icon' /> {listing.bathrooms} </span>
                            <span className='text-xs text-nowrap px-1 flex flex-col items-center gap-2'><img src='./ruler.png' className='h-6 object-contain' alt='size icon' /> {listing.commercialSqm} mq</span>
                            <span className='text-xs text-nowrap px-1 flex flex-col items-center gap-2'><img src='./floor.png' className='h-6 object-contain' alt='floor icon' /> {listing.floor === 0 ? 'T' : listing.floor} di {listing.buildingFloors}</span>
                            <span className='text-xs text-nowrap px-1 flex flex-col items-center gap-2'><img src='./elevator.png' className='h-6 object-contain' alt='elevator icon' /> {listing.elevator === true ? 'Si' : 'No'}</span>
                        </div>
                        <span className='text-lg xl:text-xl self-center font-extrabold text-primary-400'>{listing.pubPrice.toLocaleString()}€</span>
                    </div>
                </hgroup>
            </Link>
        </div>
    )
}
export default ListingItem