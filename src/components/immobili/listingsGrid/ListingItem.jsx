import { SingleCarousel } from '../../home/featured/SingleCarousel'
import Tag from '../../commons/Tag'
const ListingItem = ({ listing, tag }) => {
    return (
        <div className='flex flex-col relative'>
            {tag && <Tag
                text={listing.tag}
                color='bg-primary-500/75'
                position='topLeft'
                size='lg'
            />}
            <SingleCarousel images={listing.images} />
            <hgroup className='mt-4'>
                <h3 className='text-xl font-bold'>{listing.title}</h3>
                <div className='flex justify-between items-center'>
                    <p className='text-xs md:text-sm'>{listing.address}, {listing.municipality}</p>
                    <div className='italic text-xs'>Rif. {listing._id}</div>
                </div>
                <div className='border-t mt-2 pt-2 text-lg flex justify-between'>
                    <div className='flex'>
                        <span className='border-r text-sm px-2 flex items-center gap-2'><img src='./double-bed.png' className='h-6 w-6' alt='bed icon' /> {listing.singleBedrooms + listing.doubleBedrooms} </span>
                        <span className='border-r text-sm px-2 flex items-center gap-2'><img src='./toilet.png' className='h-6 w-6' alt='toilet icon' /> {listing.bathrooms} </span>
                        <span className='border-r text-sm px-2 flex items-center gap-2'><img src='./ruler.png' className='h-6 w-6' alt='size icon' /> {listing.commercialSqm} mq</span>
                    </div>
                    <span className='text-xl font-extrabold text-primary-400'>{listing.pubPrice.toLocaleString()}€</span>
                </div>
            </hgroup>
        </div>
    )
}
export default ListingItem