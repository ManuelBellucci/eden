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
  const safeImages = Array.isArray(images) ? images : []
  const current = safeImages[currentSceneIndex] || null

  // Funzione per passare alla scena successiva
  const handleNext = () => {
    setTimeout(() => {
      setCurrentSceneIndex((prevIndex) => safeImages.length ? (prevIndex + 1) % safeImages.length : 0)
    }, 500)
  }

  // Funzione per passare alla scena precedente
  const handlePrev = () => {
    setTimeout(() => {
      setCurrentSceneIndex((prevIndex) => safeImages.length ? (prevIndex - 1 + safeImages.length) % safeImages.length : 0)
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
                {current
                  ? (
                    <Pannellum image={current.url} width='100%' height='100%' pitch={0} yaw={180} hfov={100} minHfov={90} maxHfov={110} autoLoad showZoomCtrl={false} />
                    )
                  : (
                    <div className='w-full h-full flex items-center justify-center text-gray-500'>Nessuna scena</div>
                    )}
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
