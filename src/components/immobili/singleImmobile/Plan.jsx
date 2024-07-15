import { PlanCarousel } from './PlanCarousel'

const Plan = ({ listing }) => {
  const hasMultiplePlans = listing.plan && listing.plan.length > 1

  return (
    <div className='py-6 px-6 md:pr-0 rounded-lg'>
      <div className='flex justify-center h-full rounded-lg shadow-md bg-primary-50 p-4'>
        {hasMultiplePlans
          ? (
            <PlanCarousel images={listing.plan} />
            )
          : (
            <img
              loading='lazy'
              className='rounded-lg h-full w-full object-cover'
              src={listing.plan[0]?.url}
              alt='Plan'
            />
            )}
      </div>
    </div>
  )
}

export default Plan
