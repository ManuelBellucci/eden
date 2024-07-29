const PropertyIcon = ({ src, label, value }) => {
  return (
    <span className='px-1 flex flex-col items-center gap-2 text-xs text-nowrap'>
      <img loading='lazy' src={src} className='object-contain h-8' alt={`${label} icon`} />
      <span className='text-primary-50 text-base'>
        {value}
      </span>
    </span>
  )
}

const PropertyIcons = ({ listing }) => {
  return (
    <div className='flex'>
      <PropertyIcon src='/double-bed.svg' label='Beds' value={listing.singleBedrooms + listing.doubleBedrooms} />
      <PropertyIcon src='/toilet.svg' label='Bathrooms' value={listing.bathrooms} />
      <PropertyIcon src='/ruler.svg' label='Size' value={`${listing.commercialSqm}mq`} />
      <PropertyIcon src='/floor.svg' label='Floor' value={`${listing.floor === 0 ? 'T' : listing.floor}`} />
      <PropertyIcon src='/elevator.svg' label='Elevator' value={listing.elevator ? 'Si' : 'No'} />
    </div>
  )
}

export default PropertyIcons
