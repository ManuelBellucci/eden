import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'

const Carousel = lazy(() =>
  import('@material-tailwind/react').then(m => ({ default: m.Carousel }))
)

const FALLBACK_IMG = '/image-error.png'
const ERROR_IMG = '/image-error.png'

const NavigationDots = ({ activeIndex, setActiveIndex, totalSlides, visibleDots = 5 }) => {
  if (!totalSlides || totalSlides < 2) return null
  const dots = []
  const side = Math.floor(visibleDots / 2)
  const from = Math.max(activeIndex - side, 0)
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
        className={`block h-2 ${isActive ? 'w-8' : 'w-4'} cursor-pointer rounded-2xl transition-all bg-primary-50${isActive ? '' : '/50'}`}
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
  return (
    <div className='absolute bottom-4 left-2/4 z-50 flex items-center -translate-x-2/4 gap-2'>
      {dots}
    </div>
  )
}

/**
 * @param {{ images: Array<string|{url:string,alt?:string}>, id: string }} props
 */
export function SingleCarousel ({ images, id }) {
  // normaliza a [{url, alt}]
  const normalized = Array.isArray(images)
    ? images
      .map((img, i) => (typeof img === 'string' ? { url: img, alt: `image ${i + 1}` } : img))
      .filter(x => x && x.url)
    : []

  // si no hay imágenes, mete fallback
  const slides = normalized.length ? normalized : [{ url: FALLBACK_IMG, alt: 'Anteprima non disponibile' }]

  return (
    <Suspense fallback={<div>Caricando...</div>}>
      <Carousel
        className='rounded-lg'
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <NavigationDots totalSlides={length} activeIndex={activeIndex} setActiveIndex={setActiveIndex} visibleDots={5} />
        )}
      >
        {slides.map((image, index) => (
          <Link key={`${id}-${index}`} to={`/immobili/${id}`}>
            <div className='h-full overflow-hidden rounded-lg'>
              <img
                loading='lazy'
                src={image.url}
                alt={image.alt ?? `image ${index + 1}`}
                onError={(e) => {
                  const el = e.currentTarget
                  if (el.dataset.fallbackApplied === '1') return
                  el.src = ERROR_IMG
                  el.dataset.fallbackApplied = '1' // evita bucle si la de error falla
                }}
                className='h-full w-full object-cover'
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </Suspense>
  )
}
