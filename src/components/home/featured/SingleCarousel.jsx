import { Carousel } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const NavigationDots = ({ activeIndex, setActiveIndex, totalSlides, visibleDots = 5 }) => {
  const createDots = () => {
    const dots = []
    const sideDots = Math.floor(visibleDots / 2)
    const from = Math.max(activeIndex - sideDots, 0)
    const to = Math.min(from + visibleDots, totalSlides)

    if (from > 1) {
      dots.push(
        <span key='0' className='block h-2 w-4 cursor-pointer rounded-2xl bg-white/50' onClick={() => setActiveIndex(0)} />,
        <span key='ellipsis-pre' className='text-white'>...</span>
      )
    }

    for (let i = from; i < to; i++) {
      const isActive = activeIndex === i
      dots.push(
        <span
          key={i}
          className={`block h-2 w-${isActive ? '8' : '4'} cursor-pointer rounded-2xl transition-all bg-white${isActive ? '' : '/50'}`}
          onClick={() => setActiveIndex(i)}
        />
      )
    }

    if (to < totalSlides) {
      dots.push(
        <span key='ellipsis-post' className='text-white'>...</span>,
        <span key={totalSlides - 1} className='block h-2 w-4 cursor-pointer rounded-2xl bg-white/50' onClick={() => setActiveIndex(totalSlides - 1)} />
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

export function SingleCarousel ({ images, id }) {
  return (
    <Carousel
      className='rounded-lg'
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <NavigationDots totalSlides={length} activeIndex={activeIndex} setActiveIndex={setActiveIndex} visibleDots={5} />
      )}
    >
      {images.map((image, index) => (
        <Link key={`${id}-${index}`} to={`/immobili/${id}`}>
          <img
            loading='lazy'
            src={image}
            alt={`image ${index + 1}`}
            className='h-full w-full object-cover'
          />
        </Link>
      ))}
    </Carousel>
  )
}
