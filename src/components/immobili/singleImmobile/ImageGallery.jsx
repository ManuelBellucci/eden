// Importa gli hook `useEffect` e `useState` di React
import { useEffect, useState } from 'react'
// Importa il componente carosello per visualizzare immagini
import { SingleCarousel } from '../../home/featured/SingleCarousel'
// Importa la GIF da mostrare come messaggio per ruotare il dispositivo
import rotateGif from '../../../assets/rotate.gif'

// Componente `ImageGallery` che mostra una galleria di immagini e una modale per visualizzarle in modalità full-screen
const ImageGallery = ({ listing }) => {
  // Stato per gestire se la modale è aperta o chiusa
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Stato per mostrare un messaggio quando il dispositivo è in modalità verticale su schermi piccoli
  const [showRotateMessage, setShowRotateMessage] = useState(false)

  // Funzione che apre la modale e abilita il full-screen su dispositivi mobili
  const openModal = () => {
    setIsModalOpen(true)
    // Se la larghezza dello schermo è pari o inferiore a 768px, entra in modalità full-screen
    if (window.innerWidth <= 768) {
      document.documentElement.requestFullscreen()
    }
  }

  // Funzione che chiude la modale e disabilita il full-screen
  const closeModal = () => {
    setIsModalOpen(false)
    // Se il documento è in modalità full-screen, esce dalla modalità
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }

  // Effetto per nascondere la barra di navigazione quando la modale è aperta
  useEffect(() => {
    const navElement = document.getElementById('nav')
    if (navElement) {
      if (isModalOpen) {
        // Nasconde la barra di navigazione quando la modale è aperta
        navElement.classList.add('hidden')
      } else {
        // Mostra la barra di navigazione quando la modale è chiusa
        navElement.classList.remove('hidden')
      }
    }
  }, [isModalOpen])

  // Effetto per gestire il messaggio di rotazione dello schermo quando si cambia orientamento
  useEffect(() => {
    const handleOrientationChange = () => {
      // Solo per schermi piccoli (mobile)
      if (window.innerWidth <= 768) {
        // Mostra il messaggio se il dispositivo è in modalità verticale (portrait)
        if (window.matchMedia('(orientation: portrait)').matches) {
          setShowRotateMessage(true)
        } else {
          setShowRotateMessage(false)
        }
      } else {
        setShowRotateMessage(false)
      }
    }

    // Controlla l'orientamento iniziale
    handleOrientationChange()
    // Aggiunge listener per gestire il resize e il cambio di orientamento
    window.addEventListener('resize', handleOrientationChange)
    window.addEventListener('orientationchange', handleOrientationChange)

    // Cleanup dei listener quando il componente viene smontato
    return () => {
      window.removeEventListener('resize', handleOrientationChange)
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [])

  return (
    <>
      <div className='grid gap-4 col-span-2 bg-primary-900 shadow-lg p-2 md:p-8 rounded-lg'>
        {/* Immagine principale dell'annuncio */}
        <div className='relative max-w-2xl mx-auto'>
          <div className='bg-primary-50 h-full p-1 shadow-md rounded-lg'>
            <img
              loading='lazy'
              className='h-full max-w-2xl mx-auto w-full rounded-lg'
              src={listing.images[0].url}
              alt=''
            />
          </div>
          {/* Bottone per aprire la modale se ci sono più di 4 immagini */}
          {listing.images.length > 4 &&
            <span
              className='absolute text-primary-50 font-bold hover:text-primary-950 bottom-2 right-2 p-2 m-2 lg:p-4 lg:m-4 text-xs border border-primary-500 hover:bg-primary-500 active:bg-primary-600 cursor-pointer rounded-lg transition-all ease-in'
              onClick={openModal}
            >
              Guarda {listing.images.length} foto
            </span>}
          {/* Prezzo dell'immobile */}
          <div className='absolute top-0 left-0'>
            <p className='text-center text-xl md:text-2xl lg:text-3xl mt-4 max-w-xl mx-auto text-gray-100 font-bold bg-primary-500 p-2 md:p-3 lg:p-4 rounded-lg ms-4'>
              {listing.pubPrice.toLocaleString()},00€ {listing.type === 'affitto' && '/ mese'}
            </p>
          </div>
        </div>

        {/* Miniature delle immagini successive */}
        <div className='grid grid-cols-3 gap-4 max-w-2xl mx-auto'>
          {listing.images.slice(1, 4).map((image, index) => (
            <div key={index} className='bg-primary-50 p-1 shadow-md rounded-lg'>
              <img
                loading='lazy'
                className='h-full object-cover max-w-full w-full rounded-lg'
                src={image.url}
                alt=''
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modale per la visualizzazione delle immagini in full-screen */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center'>
          <div className='relative bg-white p-4 rounded-none lg:rounded-lg w-full h-full overflow-y-auto lg:w-11/12 lg:max-w-[11/12] lg:h-5/6'>
            {/* Bottone per chiudere la modale */}
            <button
              aria-label='Close modal'
              className='absolute top-0 right-0 lg:right-1 text-3xl font-extrabold text-black'
              onClick={closeModal}
            >
              &times;
            </button>
            {/* Carosello delle immagini */}
            <SingleCarousel images={listing.images} id={listing._id} />
          </div>
          {/* Messaggio per ruotare lo schermo su dispositivi mobili */}
          {showRotateMessage && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'>
              <div className='bg-white p-4 rounded-lg text-center flex flex-col justify-center items-center'>
                <p className='text-lg font-bold'>Per una migliore visualizzazione, ruota il tuo dispositivo.</p>
                <img src={rotateGif} alt='Rotate phone' className='w-16 h-16' />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default ImageGallery
