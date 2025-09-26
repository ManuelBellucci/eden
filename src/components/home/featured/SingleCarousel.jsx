import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { withFallback, safeOnErrorSwap, FALLBACK_IMG } from '../../../helpers/media'

// Lazy Load del Carousel
const Carousel = lazy(() => import('@material-tailwind/react').then(module => ({ default: module.Carousel })))

/**
 * Componente NavigationDots
 * @props {number} activeIndex - Indice dell'immagine attiva
 * @props {function} setActiveIndex - Funzione per impostare l'indice attivo
 * @props {number} totalSlides - Numero totale di immagini nel carosello
 * @props {number} visibleDots - Numero di punti di navigazione visibili
 * @returns {JSX.Element} - Elemento React per la visualizzazione dei punti di navigazione
*/

const NavigationDots = ({ activeIndex, setActiveIndex, totalSlides, visibleDots = 5 }) => {
  const createDots = () => {
    const dots = []
    const sideDots = Math.floor(visibleDots / 2)
    const from = Math.max(activeIndex - sideDots, 0)
    const to = Math.min(from + visibleDots, totalSlides)

    // Aggiungi ellissi se ci sono immagini non visibili a sinistra
    if (from > 1) {
      dots.push(
        <span key='0' className='block h-2 w-4 cursor-pointer rounded-2xl bg-primary-50/50' onClick={() => setActiveIndex(0)} />,
        <span key='ellipsis-pre' className='text-primary-50'>...</span>
      )
    }

    // Aggiungi i punti di navigazione
    for (let i = from; i < to; i++) {
      const isActive = activeIndex === i // COntrolla se il punto è attivo
      dots.push(
        <span
          key={i}
          className={`block h-2 w-${isActive ? '8' : '4'} cursor-pointer rounded-2xl transition-all bg-primary-50${isActive ? '' : '/50'}`}
          onClick={() => setActiveIndex(i)} // Imposta l'indice attivo
        />
      )
    }

    // Aggiungi ellissi se ci sono immagini non visibili a destra
    if (to < totalSlides) {
      dots.push(
        <span key='ellipsis-post' className='text-primary-50'>...</span>,
        <span key={totalSlides - 1} className='block h-2 w-4 cursor-pointer rounded-2xl bg-primary-50/50' onClick={() => setActiveIndex(totalSlides - 1)} />
      )
    }

    return dots // Restituisci i punti di navigazione
  }

  return (
    <div className='absolute bottom-4 left-2/4 z-50 flex items-center -translate-x-2/4 gap-2'>
      {createDots()}
    </div>
  )
}

/**
 * Componente SingleCarousel
 * @props {Array} images - Array di immagini da visualizzare
 * @props {string} id - ID del carosello
 * @returns {JSX.Element} - Elemento React per la visualizzazione di un carosello
 */
export function SingleCarousel ({ images, id }) {
  const slides = withFallback(Array.isArray(images) ? images : [], FALLBACK_IMG)

  return (
    // Messaggio di caricamento
    <Suspense fallback={<div>Caricando...</div>}>
      <Carousel
        className='rounded-lg'
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <NavigationDots totalSlides={length} activeIndex={activeIndex} setActiveIndex={setActiveIndex} visibleDots={5} />
        )} // Imposta i punti di navigazione
      >
        {slides.map((image, index) => (
          <Link key={`${id}-${index}`} to={`/immobili/${id}`}>
            <div className='h-full overflow-hidden rounded-lg'>
              <img
                loading='lazy'
                src={image.url}
                alt={`image ${index + 1}`}
                onError={safeOnErrorSwap}
                className='h-full w-full object-cover'
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </Suspense>
  )
}
