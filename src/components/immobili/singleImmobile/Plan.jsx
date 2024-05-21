const Plan = ({ listing }) => {
  return (
    <div className='py-6 pl-6 rounded-lg'>
      <div className='flex justify-center h-full rounded-lg shadow-md bg-white p-4'>
        <img className='rounded-lg' src={listing.plan} alt='Plan' />
      </div>
    </div>
  )
}

export default Plan
