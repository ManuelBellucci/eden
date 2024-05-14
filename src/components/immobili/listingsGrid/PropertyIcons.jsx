const PropertyIcon = ({ src, label, value }) => (
  <span className='text-xs px-1 flex flex-col items-center gap-2'>
    <img src={src} className='h-6 object-contain' alt={label + ' icon'} />
    {value}
  </span>
)

const PropertyIcons = ({ listing }) => (
  <div className='flex'>
    <PropertyIcon src='./double-bed.png' label='Beds' value={listing.singleBedrooms + listing.doubleBedrooms} />
    <PropertyIcon src='./toilet.png' label='Bathrooms' value={listing.bathrooms} />
    <PropertyIcon src='./ruler.png' label='Size' value={`${listing.commercialSqm} mq`} />
    <PropertyIcon src='./floor.png' label='Floor' value={`${listing.floor === 0 ? 'T' : listing.floor} di ${listing.buildingFloors}`} />
    <PropertyIcon src='./elevator.png' label='Elevator' value={listing.elevator ? 'Si' : 'No'} />
  </div>
)

export default PropertyIcons
