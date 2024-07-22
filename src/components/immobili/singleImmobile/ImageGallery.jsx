import { useEffect, useState } from 'react'
import { SingleCarousel } from '../../home/featured/SingleCarousel'
import rotateGif from '../../../assets/rotate.gif'

const ImageGallery = ({ listing }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showRotateMessage, setShowRotateMessage] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    // Entra in modalità full-screen su dispositivi mobili
    if (window.innerWidth <= 768) {
      document.documentElement.requestFullscreen()
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Esce dalla modalità full-screen
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    const navElement = document.getElementById('nav')
    if (navElement) {
      if (isModalOpen) {
        navElement.classList.add('hidden')
      } else {
        navElement.classList.remove('hidden')
      }
    }
  }, [isModalOpen])

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.innerWidth <= 768) {
        if (window.matchMedia('(orientation: portrait)').matches) {
          setShowRotateMessage(true)
        } else {
          setShowRotateMessage(false)
        }
      } else {
        setShowRotateMessage(false)
      }
    }

    handleOrientationChange() // Initial check
    window.addEventListener('resize', handleOrientationChange)
    window.addEventListener('orientationchange', handleOrientationChange)

    return () => {
      window.removeEventListener('resize', handleOrientationChange)
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [])

  return (
    <>
      <div className='grid gap-4 col-span-2 bg-primary-900 shadow-lg p-2 md:p-8 rounded-lg'>
        <div className='relative max-w-2xl mx-auto'>
          <div className='bg-primary-50 h-full p-1 shadow-md rounded-lg'>
            <img
              loading='lazy'
              className='h-full max-w-2xl mx-auto w-full rounded-lg'
              src={listing.images[0].url}
              alt=''
            />
          </div>
          {listing.images.length > 4 &&
            <span
              className='absolute text-primary-50 font-bold hover:text-primary-950 bottom-2 right-2 p-2 m-2 lg:p-4 lg:m-4 text-xs border border-primary-500 hover:bg-primary-500 active:bg-primary-600 cursor-pointer rounded-lg transition-all ease-in'
              onClick={openModal}
            >
              Guarda {listing.images.length} foto
            </span>}
          <div className='absolute top-0 left-0'>
            <p className='text-center text-xl md:text-2xl lg:text-3xl mt-4 max-w-xl mx-auto text-gray-100 font-bold bg-primary-500 p-2 md:p-3 lg:p-4 rounded-lg ms-4'>
              {listing.pubPrice.toLocaleString()},00€ {listing.type === 'affitto' && '/ mese'}
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 max-w-2xl mx-auto'>
          {listing.images.slice(1, 4).map((image, index) => (
            <div key={index} className='bg-primary-50 p-1 shadow-md rounded-lg'>
              <img
                loading='lazy'
                className='h-full object-cover max-w-full w-full rounded-lg'
                src={image.url}
                alt=''
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center'>
          <div className='relative bg-white p-4 rounded-none lg:rounded-lg w-full h-full overflow-y-auto lg:w-11/12 lg:max-w-[11/12] lg:h-5/6'>
            <button
              className='absolute top-0 right-0 lg:right-1 text-3xl font-extrabold text-black'
              onClick={closeModal}
            >
              &times;
            </button>
            <SingleCarousel images={listing.images} id={listing._id} />
          </div>
          {showRotateMessage && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'>
              <div className='bg-white p-4 rounded-lg text-center flex flex-col justify-center items-center'>
                <p className='text-lg font-bold'>Per una migliore visualizzazione, ruota il tuo dispositivo.</p>
                <img src={rotateGif} alt='Rotate phone' className='w-16 h-16' />

              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default ImageGallery
