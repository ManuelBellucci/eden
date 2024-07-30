import React, { Suspense, lazy } from 'react'

const Carousel = lazy(() => import('@material-tailwind/react').then(module => ({ default: module.Carousel })))

const NavigationDots = ({ activeIndex, setActiveIndex, totalSlides, visibleDots = 5 }) => {
  const createDots = () => {
    const dots = []
    const sideDots = Math.floor(visibleDots / 2)
    const from = Math.max(activeIndex - sideDots, 0)
    const to = Math.min(from + visibleDots, totalSlides)

    if (from > 1) {
      dots.push(
        <span key='0' className='block h-2 w-4 cursor-pointer rounded-2xl bg-primary-50/50' onClick={() => setActiveIndex(0)} />,
        <span key='ellipsis-pre' className='text-primary-50'>...</span>
      )
    }

    for (let i = from; i < to; i++) {
      const isActive = activeIndex === i
      dots.push(
        <span
          key={i}
          className={`block h-2 w-${isActive ? '8' : '4'} cursor-pointer rounded-2xl transition-all bg-primary-50${isActive ? '' : '/50'}`}
          onClick={() => setActiveIndex(i)}
        />
      )
    }

    if (to < totalSlides) {
      dots.push(
        <span key='ellipsis-post' className='text-primary-50'>...</span>,
        <span key={totalSlides - 1} className='block h-2 w-4 cursor-pointer rounded-2xl bg-primary-50/50' onClick={() => setActiveIndex(totalSlides - 1)} />
      )
    }

    return dots
  }

  return (
    <div className='absolute bottom-4 left-2/4 z-50 flex items-center -translate-x-2/4 gap-2'>
      {createDots()}
    </div>
  )
}

export function PlanCarousel ({ images }) {
  return (
    <Suspense fallback={<div>Loading Carousel...</div>}>
      <Carousel
        className='rounded-lg relative h-full'
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <NavigationDots totalSlides={length} activeIndex={activeIndex} setActiveIndex={setActiveIndex} visibleDots={5} />
        )}
        prevArrow={({ handlePrev }) => (
          <button
            aria-label='Previous slide'
            onClick={handlePrev}
            className='absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-primary-500 rounded-full text-primary-50'
          >
            &lt;
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button
            aria-label='Next slide'
            onClick={handleNext}
            className='absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-primary-500 text-primary-50 rounded-full'
          >
            &gt;
          </button>
        )}
      >
        {images.map((image, index) => (
          <div key={index} className='h-full w-full flex justify-center items-center'>
            <img
              loading='lazy'
              src={image.url}
              alt={`Plan ${index + 1}`}
              className='h-full w-full object-contain rounded-lg'
            />
          </div>
        ))}
      </Carousel>
    </Suspense>
  )
}
