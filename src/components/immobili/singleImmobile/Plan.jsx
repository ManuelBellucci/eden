import { PlanCarousel } from './PlanCarousel'
import { useRef } from 'react'

const Plan = ({ listing }) => {
  // Verifica se l'annuncio ha più di una planimetria
  const hasMultiplePlans = listing.plan && listing.plan.length > 1
  const imgRef = useRef(null) // Riferimento all'elemento immagine

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
        {/* Carosello delle planimetrie se ce ne sono più di una, altrimenti mostra la singola planimetria */}
        {hasMultiplePlans
          ? (
            <PlanCarousel images={listing.plan} />
            )
          : (
            <img
              ref={imgRef} // Associa il riferimento all'elemento immagine
              loading='lazy'
              className='rounded-lg h-full w-full object-cover cursor-pointer' // Aggiungi il cursore cliccabile
              src={listing.plan[0]?.url}
              alt='Plan'
              onClick={handleImageClick} // Aggiungi il gestore del click
            />
            )}
      </div>
    </div>
  )
}

export default Plan
