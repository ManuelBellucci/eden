const ImageGallery = ({ listing }) => {
  return (
    <div className='grid gap-4 col-span-2'>
      <div className='relative max-w-2xl mx-auto'>
        <img className='h-auto max-w-2xl mx-auto w-full rounded-lg' src={listing.images[0]} alt='' />
        <span className='absolute text-primary-100 font-bold hover:text-black bottom-0 right-0 p-2 m-2 lg:p-4 lg:m-4 text-xs border border-primary-300 hover:bg-primary-300 active:bg-primary-200 cursor-pointer rounded-lg transition-all ease-in'>
          Guarda {listing.images.length} foto
        </span>
      </div>
      <div className='grid grid-cols-3 gap-4 max-w-2xl mx-auto'>
        {listing.images.slice(1, 4).map((image, index) => (
          <div key={index}>
            <img className='h-auto max-w-full w-full rounded-lg' src={image} alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
