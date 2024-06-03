const Plan = ({ listing }) => {
  return (
    <div className='py-6 px-6 md:pr-0 rounded-lg'>
      <div className='flex justify-center h-full rounded-lg shadow-md bg-white p-4'>
        <img loading='lazy' className='rounded-lg' src={listing.plan} alt='Plan' />
      </div>
    </div>
  )
}

export default Plan
