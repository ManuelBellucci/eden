const Plan = ({ listing }) => {
  return (
    <div className='my-4 bg-gray-100 px-4 py-6 mx-4 xl:mx-40 rounded-lg'>
      <img className='h-auto max-w-3xl mx-auto w-full rounded-lg' src={listing.plan} alt='' />
    </div>
  )
}

export default Plan
