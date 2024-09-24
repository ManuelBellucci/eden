import { useRef, useState } from 'react'
import axios from 'axios'
import { InfoAlert } from '../../commons/Alerts'
import validateEmail from '../../../helpers/validateEmail'
import { sendEmail } from '../../../helpers/sendEmail'
import { useParams } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

/**
 * Componente per la modale di richiesta di visita
 * @param {boolean} isVisible - Indica se la modale è visibile
 * @param {function} onClose - Funzione per chiudere la modale
 * @param {string} userName - Nome dell'utente
 * @param {function} setUserName - Funzione per impostare il nome dell'utente
 * @param {string} userSurname - Cognome dell'utente
 * @param {function} setUserSurname - Funzione per impostare il cognome dell'utente
 * @param {string} userPhone - Numero di telefono dell'utente
 * @param {function} setUserPhone - Funzione per impostare il numero di telefono dell'utente
 * @param {string} userEmail - Indirizzo email dell'utente
 * @param {function} setUserEmail - Funzione per impostare l'indirizzo email dell'utente
 * @param {string} visitType - Tipo di visita selezionata
 * @param {function} setVisitType - Funzione per impostare il tipo di visita
 * @param {Array} dates - Array di oggetti contenenti le date disponibili per la visita
 * @param {Array} selectedDates - Array di date selezionate dall'utente
 * @param {function} handleDateChange - Funzione per gestire la selezione delle date
 * @param {Array} times - Array di oggetti contenenti le fasce orarie disponibili per la visita
 * @param {Array} selectedTimes - Array di fasce orarie selezionate dall'utente
 * @param {function} handleTimeChange - Funzione per gestire la selezione delle fasce orarie
 * @param {boolean} isFormFilled - Indica se tutti i campi del form sono stati compilati correttamente
 * @returns {JSX.Element} Il componente per la modale di richiesta di visita
 */
const VisitModal = ({
  isVisible,
  onClose,
  userName,
  setUserName,
  userSurname,
  setUserSurname,
  userPhone,
  setUserPhone,
  userEmail,
  setUserEmail,
  visitType,
  setVisitType,
  dates,
  selectedDates,
  handleDateChange,
  times,
  selectedTimes,
  handleTimeChange,
  isFormFilled
}) => {
  // Stato per tenere traccia dell'indice di inizio delle date visibili
  const [startIndex, setStartIndex] = useState(0)
  // Stato per mostrare un messaggio all'utente
  const [message, setMessage] = useState('')
  // Numero di date visibili contemporaneamente
  const visibleDatesCount = 4
  // Riferimento al container delle date
  const datesContainerRef = useRef(null)

  // Parametro dell'URL per l'ID dell'immobile
  const { id } = useParams()

  if (!isVisible) return null

  // Funzione per scorrere le date a destra
  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, dates.length - visibleDatesCount))
  }

  // Funzione per scorrere le date a sinistra
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  // Funzione per inviare la richiesta di visita
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateEmail(userEmail)) {
      setMessage('Inserisci un indirizzo email valido.')
      return
    }

    // Parametri del template per l'email
    const templateParams = {
      nome: userName,
      cognome: userSurname,
      telefono: userPhone,
      email: userEmail,
      visita: visitType,
      disponibilita: selectedDates.join(', '),
      fasceOrarie: selectedTimes.join(', '),
      id
    }

    // Invia l'email all'agenzia
    try {
      await sendEmail(templateParams)
      onClose()
    } catch (error) {
      console.error('Error sending email:', error)
    }

    try {
      // Payload da inviare al server
      const payload = {
        nome: userName,
        cognome: userSurname,
        telefono: userPhone,
        email: userEmail,
        visita: visitType,
        disponibilita: selectedDates,
        fasceOrarie: selectedTimes,
        id
      }
      // Invia la richiesta di visita al server
      await axios.post(`${API_URL}/richieste-visite`, payload)
      // Mostra un messaggio di successo all'utente
      setMessage('Richiesta inviata con successo!')
    } catch (error) {
      console.error('Errore durante l\'invio della richiesta: ', error)
      setMessage('Errore durante l\'invio della richiesta. Riprova più tardi.')
    }
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center px-4 bg-primary-950 bg-opacity-50'>
      <div className='bg-primary-50 rounded-lg w-full max-w-xl max-h-[calc(100%-40px)] overflow-y-auto invisible-scrollbar relative'>
        <div className='px-4 py-3 rounded-t-lg bg-primary-100/75 flex justify-between items-center'>
          <button
            aria-label='Close modal'
            onClick={onClose}
            className='w-full text-gray-400 hover:text-gray-600'
          >
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <form className='px-10 pb-10' onSubmit={handleSubmit}>
          <InfoAlert bold='Questa non è una prenotazione:' text="le tue disponibilità saranno inviate all'Agenzia che si occuperà di ricontattarti." extraClassNames='mb-8 mt-4' />

          <div className='flex gap-2' id='autocomplete-input-mobile'>
            <div className='relative w-full'>
              <input
                className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                type='text'
                name='name'
                id='modal-name'
                placeholder=' '
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
              >Nome
              </label>
            </div>
            <div className='relative w-full'>
              <input
                className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                type='text'
                name='surname'
                id='modal-surname'
                placeholder=' '
                value={userSurname}
                onChange={(e) => setUserSurname(e.target.value)}
              />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
              >Cognome
              </label>
            </div>
          </div>

          <div className='flex gap-2 mt-2' id='autocomplete-input-mobile'>
            <div className='relative w-full'>
              <input
                className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                type='tel'
                name='phone'
                id='modal-phone'
                placeholder=' '
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
              />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
              >Telefono
              </label>
            </div>
            <div className='relative w-full'>
              <input
                className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                type='email'
                name='email'
                id='modal-email'
                autoComplete='email'
                placeholder=' '
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
              >Email
              </label>
            </div>
          </div>

          <div className='mt-4'>
            <h4 className='font-bold text-center mt-6 mb-2'>Scegli come visitare l'immobile</h4>
            <div className='flex'>
              <button
                aria-label='Visita fisica'
                type='button'
                className={`py-2 px-4 w-full border text-base  text-primary-950 rounded-lg rounded-r-none transition-all ease-in border-r-0 ${visitType === 'visita fisica' ? 'bg-primary-500 text-primary-50' : 'bg-primary-50 hover:bg-primary-100 '}`}
                onClick={() => setVisitType('visita fisica')}
              >
                Visita fisica
              </button>
              <button
                aria-label='Visita virtuale'
                type='button'
                className={`py-2 px-4 w-full border text-base  text-primary-950 rounded-lg rounded-l-none transition-all ease-in border-l-0 ${visitType === 'visita virtuale' ? 'bg-primary-500 text-primary-50' : 'bg-primary-50 hover:bg-primary-100 '}`}
                onClick={() => setVisitType('visita virtuale')}
              >
                Visita virtuale
              </button>
            </div>
          </div>

          <div className='mt-4'>
            <h4 className='font-bold text-center mt-6 mb-2'>Seleziona le tue disponibilità</h4>
            <div className='flex items-center gap-2 relative'>
              <span onClick={handlePrev} className={`px-3 py-2 absolute -left-9 z-50 ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                &lArr;
              </span>
              <div ref={datesContainerRef} className='relative w-full overflow-x-auto'>
                <div
                  className='flex transition-transform duration-500 ease-in-out'
                  style={{ transform: `translateX(-${startIndex * (100 / visibleDatesCount)}%)` }}
                >
                  {dates.map((date) => (
                    <button
                      aria-label='Seleziona data'
                      key={date.value}
                      type='button'
                      className={`py-6 px-4 border text-base transition-all ease-in text-primary-950 rounded-lg ${selectedDates.includes(date.value) ? 'bg-primary-500 text-primary-50' : 'bg-primary-50 hover:bg-primary-100'}`}
                      onClick={() => handleDateChange(date.value)}
                      style={{ minWidth: '30%', marginRight: '4px' }}
                    >
                      <div className='flex flex-col'>
                        <span className='text-sm'>{date.label.split(' ')[0]}</span>
                        <span className='text-xl font-bold'>{date.label.split(' ')[1]}</span>
                        <span className='text-sm'>{date.label.split(' ')[2]}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <span onClick={handleNext} className={`px-3 py-2 absolute -right-9 z-50 ${startIndex >= dates.length - visibleDatesCount ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                &rArr;
              </span>
            </div>
          </div>
          <div className='mt-4'>
            <h4 className='font-bold text-center mt-6 mb-2'>Seleziona le fasce orarie</h4>
            <div className='flex gap-2 overflow-x-auto'>
              {times.map((time) => (
                <button
                  aria-label='Seleziona fascia oraria'
                  key={time.value}
                  type='button'
                  className={`py-2 px-4 border text-sm text-nowrap w-full transition-all ease-in text-primary-950 rounded-lg ${selectedTimes.includes(time.value) ? 'bg-primary-500 text-primary-50 transition-all ease-in' : 'bg-primary-50 hover:bg-primary-100 '}`}
                  onClick={() => handleTimeChange(time.value)}
                >
                  {time.label}
                </button>
              ))}
            </div>
          </div>

          <div className='mt-4'>
            <button
              aria-label='Invia richiesta'
              type='submit'
              className={`inline-flex w-full items-center justify-center px-4 py-2 text-base  text-primary-50 bg-primary-500 rounded-lg hover:bg-primary-500  focus:outline-none ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormFilled}
            >
              Invia richiesta
            </button>
            {message && <p className='mt-2 text-primary-950'>{message}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default VisitModal
