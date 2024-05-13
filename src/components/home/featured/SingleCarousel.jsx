import { Carousel } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

export function SingleCarousel({ images, id }) {
  return (

    <Carousel
      className='rounded-xl'
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((image, i) => (
        <Link key={id} to={`/immobili/${id}`}>
          <img
            key={i}
            src={image}
            alt={`image ${i + 1}`}
            className='h-full w-full object-cover'
          />
        </Link>
      ))}
    </Carousel>
  )
}
