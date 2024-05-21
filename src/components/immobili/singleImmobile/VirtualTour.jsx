import React from 'react'
import { Pannellum } from 'pannellum-react'
import 'pannellum-react/es/pannellum/css/pannellum.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const VirtualTour = ({ isVisible, onClose, images, currentSceneIndex, setCurrentSceneIndex }) => {
  if (!isVisible) return null

  const handleNext = () => {
    setTimeout(() => {
      setCurrentSceneIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 500) // Duration of the fade effect
  }

  const handlePrev = () => {
    setTimeout(() => {
      setCurrentSceneIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }, 500) // Duration of the fade effect
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75'>
      <div className='bg-white rounded-lg overflow-hidden shadow-xl transform transition-all aspect-square w-full max-w-2xl'>
        <div className='px-4 py-3 bg-gray-100 flex justify-between items-center'>
          <button onClick={onClose} className='text-gray-400 hover:text-gray-600'>
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <div className='py-4'>
          <TransitionGroup>
            <CSSTransition key={currentSceneIndex} timeout={500} classNames='fade'>
              <div>
                <Pannellum
                  width='100%'
                  height='500px'
                  image={images[currentSceneIndex]}
                  pitch={10}
                  yaw={180}
                  hfov={110}
                  minHfov={90} // Minimum zoom level
                  maxHfov={120} // Maximum zoom level
                  autoLoad
                  showZoomCtrl={false}
                />
              </div>
            </CSSTransition>
          </TransitionGroup>
          <div className='flex justify-center mt-4'>
            <button onClick={handlePrev} className='bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-700 transition duration-200'>
              Previous
            </button>
            <button onClick={handleNext} className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200'>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualTour
