import { PlanCarousel } from './PlanCarousel'
import { useRef } from 'react'

// Componente Plan
const Plan = ({ listing }) => {
  const hasMultiplePlans = listing.plan && listing.plan.length > 1
  const imgRef = useRef(null)

  // Funzione per entrare in modalità fullscreen
  const handleImageClick = () => {
    if (imgRef.current) {
      // Verifica se il browser supporta la funzionalità
      if (imgRef.current.requestFullscreen) {
        imgRef.current.requestFullscreen()
      } else if (imgRef.current.mozRequestFullScreen) { // Firefox
        imgRef.current.mozRequestFullScreen()
      } else if (imgRef.current.webkitRequestFullscreen) { // Chrome, Safari, Opera
        imgRef.current.webkitRequestFullscreen()
      } else if (imgRef.current.msRequestFullscreen) { // IE/Edge
        imgRef.current.msRequestFullscreen()
      }
    }
  }

  return (
    <div className='py-6 px-6 md:pr-0 rounded-lg'>
      <div className='flex justify-center h-full rounded-lg shadow-md bg-primary-50 p-4'>
        {hasMultiplePlans
          ? (
            <PlanCarousel images={listing.plan} />
            )
          : (
            <img
              ref={imgRef}
              loading='lazy'
              className='rounded-lg h-full w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-105' // Aggiungi effetto hover
              src={listing.plan[0]?.url}
              alt='Plan'
              onClick={handleImageClick}
            />
            )}
      </div>
    </div>
  )
}

// Aggiungi un listener per lo stile di fullscreen
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    // Quando l'immagine è in fullscreen, applica uno stile specifico
    document.body.classList.add('overflow-hidden') // Nasconde lo scroll
  } else {
    // Quando esce dalla modalità fullscreen, ripristina lo stile
    document.body.classList.remove('overflow-hidden')
  }
})

export default Plan
