import { Pannellum } from 'pannellum-react'
import 'pannellum-react/es/pannellum/css/pannellum.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import CallToAction from '../../commons/CallToAction'

/**
 * componente per la visualizzazione di un tour virtuale
 * @param {boolean} isVisible - Indica se il tour virtuale è visibile.
 * @param {function} onClose - Funzione per chiudere il tour virtuale.
 * @param {Array<Object>} images - Array di immagini per il tour virtuale.
 * @param {number} currentSceneIndex - Indice della scena attuale.
 * @param {function} setCurrentSceneIndex - Funzione per impostare l'indice della scena attuale.
 * @returns {JSX.Element} Il componente per il tour virtuale.
 */
const VirtualTour = ({ isVisible, onClose, images, currentSceneIndex, setCurrentSceneIndex }) => {
  // Se il tour virtuale non è visibile, restituisci null
  if (!isVisible) return null

  // Funzione per passare alla scena successiva
  const handleNext = () => {
    setTimeout(() => {
      setCurrentSceneIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 500)
  }

  // Funzione per passare alla scena precedente
  const handlePrev = () => {
    setTimeout(() => {
      setCurrentSceneIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }, 500)
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-primary-950 bg-opacity-75'>
      <div className='bg-primary-50 rounded-lg overflow-hidden shadow-xl transform transition-all w-full h-full flex flex-col'>
        <div className='px-4 py-3 bg-primary-100/75 flex justify-between items-center'>
          <button
            aria-label='Close virtual tour'
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600'
          >
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <div className='flex-1 relative'>
          <TransitionGroup className='h-full'>
            <CSSTransition key={currentSceneIndex} timeout={500} classNames='fade' className='h-full'>
              <div className='h-full'>
                <Pannellum
                  width='100%' // Larghezza del tour virtuale
                  height='100%' // Altezza del tour virtuale
                  image={images[currentSceneIndex].url} // URL dell'immagine
                  pitch={0} // Inclinazione dell'immagine
                  yaw={180} // Angolo di rotazione dell'immagine
                  hfov={100} // Campo visivo orizzontale
                  minHfov={90} // Campo visivo orizzontale minimo
                  maxHfov={110} // Campo visivo orizzontale massimo
                  autoLoad // Carica automaticamente l'immagine
                  showZoomCtrl={false} // Nasconde il controllo dello zoom
                />
              </div>
            </CSSTransition>
          </TransitionGroup>

          {/* Pulsanti per passare alla scena precedente e successiva */}
          <CallToAction
            className='!bg-primary-500 hover:!bg-primary-600 active:!bg-primary-700 !text-primary-50 absolute top-1/2 left-4 transform -translate-y-1/2'
            text='<'
            onClick={handlePrev}
            size='xl'
          >
            Previous
          </CallToAction>
          <CallToAction
            className='!bg-primary-500 hover:!bg-primary-600 active:!bg-primary-700 !text-primary-50 absolute top-1/2 right-4 transform -translate-y-1/2'
            text='>'
            onClick={handleNext}
            size='xl'
          >
            Next
          </CallToAction>
        </div>
      </div>
    </div>
  )
}

export default VirtualTour
