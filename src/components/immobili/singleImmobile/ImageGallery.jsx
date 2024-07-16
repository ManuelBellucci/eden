import { useState } from 'react'

const ImageGallery = ({ listing }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className='grid gap-4 col-span-2 bg-primary-100/75 shadow-lg px-4 py-8 rounded-lg'>
        <div className='relative max-w-2xl mx-auto'>
          <div className='bg-primary-50 h-full p-2 shadow-md rounded-lg'>
            <img
              loading='lazy'
              className='h-full max-w-2xl mx-auto w-full rounded-lg'
              src={listing.images[0].url} // Access the URL property
              alt=''
            />
          </div>
          <span
            className='absolute text-primary-100 font-bold hover:text-primary-950 bottom-2 right-2 p-2 m-2 lg:p-4 lg:m-4 text-xs border border-primary-300 hover:bg-primary-300 active:bg-primary-200 cursor-pointer rounded-lg transition-all ease-in'
            onClick={openModal}
          >
            Guarda {listing.images.length} foto
          </span>
          <div className='absolute top-0 left-0'>
            <p className='text-center text-xl md:text-2xl lg:text-3xl mt-4 max-w-xl mx-auto text-gray-100 font-bold bg-primary-950/20 p-2 md:p-3 lg:p-4 rounded-lg ms-4'>
              {listing.pubPrice.toLocaleString()},00€ {listing.type === 'affitto' && '/ mese'}
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 max-w-2xl mx-auto'>
          {listing.images.slice(1, 4).map((image, index) => (
            <div key={index} className='bg-primary-50 p-2 shadow-md rounded-lg'>
              <img
                loading='lazy'
                className='h-full object-cover max-w-full w-full rounded-lg'
                src={image.url} // Access the URL property
                alt=''
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-red-500 z-50 flex items-center justify-center'>
          <div className='relative w-full h-full'>
            <button
              className='absolute top-4 right-4 text-2xl font-bold'
              onClick={closeModal}
            >
              &times;
            </button>
            <div className='p-4'>
              {/* Add your image gallery component here, for now it's just a placeholder */}
              <p className='text-center text-2xl'>Image Gallery Modal</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery
