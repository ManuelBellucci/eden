import { PlanCarousel } from './PlanCarousel'

// Plan - Componente che renderizza la planimetria dell'immobile
const Plan = ({ listing }) => {
  // Verifica se l'annuncio ha più di una planimetria
  const hasMultiplePlans = listing.plan && listing.plan.length > 1

  const handleImageClick = (e) => {
    // Crea un nuovo elemento immagine per il fullscreen
    const fullScreenImage = document.createElement('img')
    fullScreenImage.src = e.target.src // Usa l'immagine cliccata
    fullScreenImage.className = 'fixed top-0 left-0 h-screen w-screen object-contain bg-black z-50 cursor-pointer' // Classi Tailwind per fullscreen con sfondo nero

    // Aggiungi il nuovo elemento al body
    document.body.appendChild(fullScreenImage)

    // Aggiungi un listener per la chiusura
    const closeImage = () => {
      // Rimuovi l'immagine dal body
      document.body.removeChild(fullScreenImage)
      // Rimuovi l'eventuale listener
      document.removeEventListener('keydown', handleEscape)
    }

    // Gestisci l'uscita al click sull'immagine
    fullScreenImage.onclick = closeImage

    // Chiudi l'immagine anche premendo il tasto "Esc"
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeImage()
      }
    }

    document.addEventListener('keydown', handleEscape)
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
              loading='lazy'
              className='rounded-lg h-full w-full object-cover cursor-pointer' // Aggiungi il cursore pointer
              src={listing.plan[0]?.url}
              alt='Plan'
              onClick={handleImageClick} // Aggiungi il gestore di eventi
            />
            )}
      </div>
    </div>
  )
}

export default Plan
