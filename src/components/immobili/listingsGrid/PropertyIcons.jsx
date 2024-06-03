const PropertyIcon = ({ src, label, value }) => {
  return (
    <span className='px-1 flex flex-col items-center gap-2 text-xs'>
      <img loading='lazy' src={src} className='object-contain h-6' alt={`${label} icon`} />
      <span>
        {value}
      </span>
    </span>
  )
}

const PropertyIcons = ({ listing }) => {
  return (
    <div className='flex'>
      <PropertyIcon src='/double-bed.webp' label='Beds' value={listing.singleBedrooms + listing.doubleBedrooms} />
      <PropertyIcon src='/toilet.webp' label='Bathrooms' value={listing.bathrooms} />
      <PropertyIcon src='/ruler.webp' label='Size' value={`${listing.commercialSqm} mq`} />
      <PropertyIcon src='/floor.webp' label='Floor' value={`${listing.floor === 0 ? 'T' : listing.floor} di ${listing.buildingFloors}`} />
      <PropertyIcon src='/elevator.webp' label='Elevator' value={listing.elevator ? 'Si' : 'No'} />
    </div>
  )
}

export default PropertyIcons
