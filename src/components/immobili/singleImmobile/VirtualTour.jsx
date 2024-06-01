import React from 'react'
import { Pannellum } from 'pannellum-react'
import 'pannellum-react/es/pannellum/css/pannellum.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import CallToAction from '../../commons/CallToAction'

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
      <div className='bg-white rounded-lg overflow-hidden h-full shadow-xl transform transition-all aspect-square w-full'>
        <div className='px-4 py-3 bg-gray-100 flex justify-between items-center'>
          <button onClick={onClose} className='text-gray-400 hover:text-gray-600'>
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <div className='pb-4 flex flex-col'>
          <TransitionGroup>
            <CSSTransition key={currentSceneIndex} timeout={500} classNames='fade'>
              <div>
                <Pannellum
                  width='100%'
                  height='100vh'
                  image={images[currentSceneIndex]}
                  pitch={0}
                  yaw={180}
                  hfov={100}
                  minHfov={90}
                  maxHfov={110}
                  autoLoad
                  showZoomCtrl={false}

                />
              </div>
            </CSSTransition>
          </TransitionGroup>

          <CallToAction className='absolute top-1/2 left-4' text='<' onClick={handlePrev} size='xl'>
            Previous
          </CallToAction>
          <CallToAction className='absolute top-1/2 right-4' text='>' onClick={handleNext} size='xl'>
            Next
          </CallToAction>

        </div>
      </div>
    </div>
  )
}

export default VirtualTour
