import React, { useState, Suspense, lazy } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import useListing from '../../hooks/useListing'
import useMobileDetect from '../../hooks/useMobileDetect'
import { generateNextNDays, times } from '../../helpers/dateHelpers'

// Caricamento dinamico dei componenti per ottimizzare il caricamento della pagina
const VisitModal = lazy(() => import('../../components/immobili/singleImmobile/VisitModal'))
const ImageGallery = lazy(() => import('../../components/immobili/singleImmobile/ImageGallery'))
const AgencyInfo = lazy(() => import('../../components/immobili/singleImmobile/AgencyInfo'))
const ListingDetails = lazy(() => import('../../components/immobili/singleImmobile/ListingDetails'))
const AgencyInfoMobile = lazy(() => import('../../components/immobili/singleImmobile/AgencyInfoMobile'))
const Plan = lazy(() => import('../../components/immobili/singleImmobile/Plan'))
const VirtualTour = lazy(() => import('../../components/immobili/singleImmobile/VirtualTour'))

// Definizione del componente SingleImmobile
const SingleImmobile = ({ setIsNavbarVisible }) => {
  const { id } = useParams() // Ottieni l'ID dell'immobile dalla URL
  const { listing, loading, error } = useListing(id) // Hook per ottenere i dettagli dell'immobile
  const isMobile = useMobileDetect() // Rileva se il dispositivo è mobile

  // Stato per gestire i dettagli dell'utente e il tipo di visita
  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [visitType, setVisitType] = useState('visita fisica')
  const [selectedDates, setSelectedDates] = useState([])
  const [selectedTimes, setSelectedTimes] = useState([])

  // Stato per la visibilità dei modali
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isTourModalVisible, setIsTourModalVisible] = useState(false)
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0)

  // Gestione del caricamento e degli errori
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading listing: {error.message}</div>
  if (!listing || !listing.active) return <Navigate to='/404' replace /> // Reindirizza se l'immobile non esiste o non è attivo

  // Verifica se il modulo è compilato
  const isFormFilled = userName.trim() !== '' && userSurname.trim() !== '' && userPhone.trim() !== '' && userEmail.trim() !== ''
  const dates = generateNextNDays(15) // Genera le prossime 15 date disponibili

  // Gestore per il cambiamento delle date selezionate
  const handleDateChange = (date) => {
    setSelectedDates((prevSelectedDates) =>
      prevSelectedDates.includes(date)
        ? prevSelectedDates.filter((d) => d !== date)
        : [...prevSelectedDates, date]
    )
  }

  // Gestore per il cambiamento degli orari selezionati
  const handleTimeChange = (time) => {
    setSelectedTimes((prevSelectedTimes) =>
      prevSelectedTimes.includes(time)
        ? prevSelectedTimes.filter((t) => t !== time)
        : [...prevSelectedTimes, time]
    )
  }

  // Gestore per la visibilità del modal di visita
  const handleModalVisibility = (isVisible) => {
    setIsModalVisible(isVisible)
    setIsNavbarVisible(!isVisible) // Nascondi o mostra la navbar
  }

  // Gestore per la visibilità del modal del tour virtuale
  const handleTourModalVisibility = (isVisible) => {
    setIsTourModalVisible(isVisible)
    setIsNavbarVisible(!isVisible) // Nascondi o mostra la navbar
  }

  return (
    <>
      {/* Griglia principale per i contenuti dell'immobile */}
      <div className='2xl:grid 2xl:grid-cols-4 px-4 xl:px-40 pt-10 gap-4'>
        <Suspense fallback={<div>Loading...</div>}>
          <ImageGallery listing={listing} /> {/* Galleria immagini dell'immobile */}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <AgencyInfo
            isMobile={isMobile} // Rilevamento del dispositivo mobile
            isFormFilled={isFormFilled} // Stato del modulo
            listing={listing} // Dettagli dell'immobile
            setIsModalVisible={() => handleModalVisibility(true)} // Mostra il modal di visita
            setUserEmail={setUserEmail} // Gestore per l'email
            setUserName={setUserName} // Gestore per il nome
            setUserPhone={setUserPhone} // Gestore per il telefono
            setUserSurname={setUserSurname} // Gestore per il cognome
            userEmail={userEmail} // Email utente
            userName={userName} // Nome utente
            userPhone={userPhone} // Telefono utente
            userSurname={userSurname} // Cognome utente
          />
        </Suspense>
      </div>

      {/* Dettagli dell'immobile */}
      <div className='my-4 bg-primary-900 shadow-md p-6 mx-4 xl:mx-40 rounded-lg'>
        <h2 className='text-primary-50 text-center font-bold text-3xl md:text-4xl lg:text-5xl'>{listing.title} </h2>
        <p className='text-primary-50/75 text-center text-lg lg:text-xl font-bold '>{listing.address}, {listing.municipality}</p>
        <p className='font-sans text-primary-50 text-center text-base break-words lg:text-lg mt-2 p-8'>{listing.description}</p>
        <hr className='my-6' />
        <Suspense fallback={<div>Loading...</div>}>
          <ListingDetails listing={listing} /> {/* Dettagli aggiuntivi sull'immobile */}
        </Suspense>
      </div>

      {/* Piano e video dell'immobile */}
      <div className={`my-4 rounded-lg ${listing.video ? 'grid grid-cols-1 md:grid-cols-2' : 'flex justify-center'} gap-0 md:gap-4 mx-4 xl:mx-40 bg-primary-900 shadow-md`}>
        <div className={`${listing.plan.length >= 1 ? '' : 'w-full flex justify-center'}`}>
          {listing.plan.length >= 1 && (
            <Suspense fallback={<div>Loading...</div>}>
              <Plan listing={listing} /> {/* Piano dell'immobile */}
            </Suspense>
          )}
        </div>
        {listing.video && (
          <div className='pt-0 pb-6 md:pt-6 px-6 md:pl-0 rounded-lg'>
            <div className='flex justify-center h-full rounded-lg shadow-md bg-primary-50 p-4'>
              <video
                className='rounded-lg w-full shadow-md'
                controls
                muted
                autoPlay
                loop
              >
                <source src={listing.video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>

      {/* Tour virtuale se disponibile */}
      {listing.virtualTour.length > 0 && (
        <div className='my-4 bg-primary-900 shadow-md px-2 py-2 mx-4 xl:mx-40 rounded-lg'>
          <button
            aria-label='Open virtual tour'
            className='text-3xl font-extrabold leading-none shadow-md bg-primary-50 p-4 w-full mx-auto rounded-lg text-primary-950 md:text-4xl lg:text-5xl uppercase'
            onClick={() => handleTourModalVisibility(true)} // Mostra il modal del tour virtuale
          >
            Clicca qui per vedere il Virtual Tour
          </button>
        </div>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <AgencyInfoMobile
          isMobile={isMobile} // Rilevamento del dispositivo mobile
          isFormFilled={isFormFilled} // Stato del modulo
          listing={listing} // Dettagli dell'immobile
          setIsModalVisible={() => handleModalVisibility(true)} // Mostra il modal di visita
          setUserEmail={setUserEmail} // Gestore per l'email
          setUserName={setUserName} // Gestore per il nome
          setUserPhone={setUserPhone} // Gestore per il telefono
          setUserSurname={setUserSurname} // Gestore per il cognome
          userEmail={userEmail} // Email utente
          userName={userName} // Nome utente
          userPhone={userPhone} // Telefono utente
          userSurname={userSurname} // Cognome utente
        />
      </Suspense>

      {/* Modale per la visita */}
      <Suspense fallback={<div>Loading...</div>}>
        <VisitModal
          isVisible={isModalVisible} // Visibilità del modale di visita
          onClose={() => handleModalVisibility(false)} // Chiudi il modale
          userName={userName} // Nome utente
          setUserName={setUserName} // Gestore per il nome
          userSurname={userSurname} // Cognome utente
          setUserSurname={setUserSurname} // Gestore per il cognome
          userPhone={userPhone} // Telefono utente
          setUserPhone={setUserPhone} // Gestore per il telefono
          userEmail={userEmail} // Email utente
          setUserEmail={setUserEmail} // Gestore per l'email
          visitType={visitType} // Tipo di visita
          setVisitType={setVisitType} // Gestore per il tipo di visita
          dates={dates} // Date disponibili
          selectedDates={selectedDates} // Date selezionate
          handleDateChange={handleDateChange} // Gestore per il cambiamento delle date
          times={times} // Orari disponibili
          selectedTimes={selectedTimes} // Orari selezionati
          handleTimeChange={handleTimeChange} // Gestore per il cambiamento degli orari
          isFormFilled={isFormFilled} // Stato del modulo
        />
      </Suspense>

      {/* Modale per il tour virtuale */}
      <Suspense fallback={<div>Loading Virtual Tour...</div>}>
        <VirtualTour
          isVisible={isTourModalVisible} // Visibilità del modale del tour virtuale
          onClose={() => handleTourModalVisibility(false)} // Chiudi il modale
          images={listing.virtualTour} // Immagini del tour virtuale
          currentSceneIndex={currentSceneIndex} // Indice dell'immagine attuale
          setCurrentSceneIndex={setCurrentSceneIndex} // Gestore per cambiare immagine
        />
      </Suspense>
    </>
  )
}

export default SingleImmobile
