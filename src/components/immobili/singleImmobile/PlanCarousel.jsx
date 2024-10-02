import { Suspense, lazy } from 'react'

const Carousel = lazy(() => import('@material-tailwind/react').then(module => ({ default: module.Carousel })))

/**
 * NavigationDots - Componente per visualizzare i punti di navigazione del carosello
 * @param {Function} setActiveIndex - Funzione per impostare l'indice attivo
 * @param {number} activeIndex - Indice attivo
 * @param {number} totalSlides - Numero totale di slide
 * @param {number} visibleDots - Numero di punti visibili
 * @returns {JSX.Element} Punti di navigazione del carosello
 */
const NavigationDots = ({ activeIndex, setActiveIndex, totalSlides, visibleDots = 5 }) => {
  const createDots = () => {
    // Array per contenere i punti
    const dots = []
    // Calcola il numero di punti laterali
    const sideDots = Math.floor(visibleDots / 2)
    // Calcola l'indice iniziale e finale
    const from = Math.max(activeIndex - sideDots, 0)
    const to = Math.min(from + visibleDots, totalSlides)

    // Aggiungi i punti di navigazione. Se l'indice iniziale è maggiore di 1, aggiungi i punti di sospensione
    if (from > 1) {
      dots.push(
        <span key='0' className='block h-2 w-4 cursor-pointer rounded-2xl bg-primary-50/50' onClick={() => setActiveIndex(0)} />,
        <span key='ellipsis-pre' className='text-primary-50'>...</span>
      )
    }

    // Aggiungi i punti di navigazione
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

    // Aggiungi i punti di sospensione se l'indice finale è minore del numero totale di slide
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
 * PlanCarousel - Componente per visualizzare le immagini di un piano in un carosello
 * @param {Array<Object>} images - Array di immagini da visualizzare
 * @returns {JSX.Element} Carosello di immagini
 */
export function PlanCarousel ({ images }) {
  return (
    <Suspense fallback={<div>Caricando...</div>}>
      <Carousel
        className='rounded-lg relative h-[500px]'
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
          <div key={index} className='h-[500px] w-full flex justify-center items-center'>  {/* Fixed height for each slide */}
            <img
              loading='lazy'
              src={image.url}
              alt={`Plan ${index + 1}`}
              className='h-full w-auto object-contain rounded-lg'
            />
          </div>
        ))}
      </Carousel>
    </Suspense>
  )
}
