import { useState } from 'react'
import { PlanCarousel } from './PlanCarousel'

// Plan - Componente che renderizza la planimetria dell'immobile
const Plan = ({ listing }) => {
  // Stato per gestire se l'immagine è in modalità fullscreen
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Verifica se l'annuncio ha più di una planimetria
  const hasMultiplePlans = listing.plan && listing.plan.length > 1

  // Funzione per gestire il clic sull'immagine
  const handleImageClick = () => {
    setIsFullscreen(!isFullscreen) // Cambia lo stato della modalità fullscreen
  }

  return (
    <div className='py-6 px-6 md:pr-0 rounded-lg'>
      <div className={`flex justify-center h-full rounded-lg shadow-md bg-primary-50 p-4 ${isFullscreen ? 'fullscreen' : ''}`}>
        {/* Carosello delle planimetrie se ce ne sono più di una, altrimenti mostra la singola planimetria */}
        {hasMultiplePlans
          ? (
            <PlanCarousel images={listing.plan} />
            )
          : (
            <img
              loading='lazy'
              className={`rounded-lg h-full w-full object-cover cursor-pointer ${isFullscreen ? 'fullscreen' : ''}`}
              src={listing.plan[0]?.url}
              alt='Plan'
              onClick={handleImageClick} // Gestisci il clic sull'immagine
            />
            )}
      </div>
    </div>
  )
}

export default Plan
