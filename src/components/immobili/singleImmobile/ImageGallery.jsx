const ImageGallery = ({ listing }) => {
  return (
    <>
      <div className='grid gap-4 col-span-2 bg-gray-100 px-4 py-8 rounded-lg'>
        <div className='relative max-w-2xl mx-auto'>
          <div className='bg-white p-2 shadow-md rounded-lg'>
            <img className='h-auto max-w-2xl mx-auto w-full rounded-lg' src={listing.images[0]} alt='' />
          </div>
          <span className='absolute text-primary-100 font-bold hover:text-black bottom-0 right-0 p-2 m-2 lg:p-4 lg:m-4 text-xs border border-primary-300 hover:bg-primary-300 active:bg-primary-200 cursor-pointer rounded-lg transition-all ease-in'>
            Guarda {listing.images.length} foto
          </span>
          <div className='absolute top-0 left-0'>
            <p className='text-center text-xl md:text-2xl lg:text-3xl mt-4 max-w-xl mx-auto text-white font-bold bg-primary-500/40 p-2 md:p-3 lg:p-4 rounded-lg ms-4'>{listing.pubPrice.toLocaleString()},00€ {listing.type === 'affitto' && '/ mese'}</p>

          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 max-w-2xl mx-auto'>
          {listing.images.slice(1, 4).map((image, index) => (
            <div key={index} className='bg-white p-2 shadow-md rounded-lg'>
              <img className='h-auto max-w-full w-full rounded-lg' src={image} alt='' />
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default ImageGallery
