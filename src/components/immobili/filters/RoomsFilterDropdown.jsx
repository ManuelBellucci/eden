import { memo, useCallback, useState } from 'react'

/**
 * Componente per il dropdown di selezione del numero di locali.
 * @param {Object} props - Proprietà del componente.
 * @param {boolean} props.isOpen - Indica se il dropdown è aperto.
 * @param {function} props.toggle - Funzione per alternare lo stato di apertura del dropdown.
 * @param {Object} props.selectedRooms - Oggetto contenente i locali selezionati.
 * @param {function} props.setSelectedRooms - Funzione per aggiornare i locali selezionati.
 * @returns {JSX.Element} Il componente dropdown per la selezione dei locali.
 */
const RoomsFilterDropdown = ({ isOpen, toggle, selectedRooms, setSelectedRooms }) => {
  // Stato per tenere traccia del campo attualmente in focus
  const [focusedField, setFocusedField] = useState('')

  // Opzioni di selezione per il numero di locali
  const roomsOptions = ['Indifferente', '1', '2', '3', '4', '5']

  /**
   * Seleziona un numero di locali specifico.
   * @param {string} rooms - Il numero di locali da selezionare.
   */
  const selectRooms = useCallback((rooms) => {
    // Se l'utente seleziona 'Indifferente', svuota la selezione
    if (rooms === 'Indifferente') {
      setSelectedRooms({ from: '', to: '' })
      setFocusedField('')
      return
    }

    // Sanitizza il numero di locali (rimuove i punti)
    const sanitizedRooms = rooms.replace('.', '')

    // Se il campo "da" è vuoto o è attualmente in focus, imposta il numero di locali "da"
    if (!selectedRooms.from || focusedField === 'fromRooms') {
      setSelectedRooms({ ...selectedRooms, from: sanitizedRooms })
      setFocusedField('')
      // Altrimenti, se il campo "fino a" è vuoto o è in focus, imposta il numero di locali "fino a"
    } else if (!selectedRooms.to || focusedField === 'toRooms') {
      setSelectedRooms({ ...selectedRooms, to: sanitizedRooms })
      setFocusedField('')
    }

    // Applica il filtro se entrambi i campi sono compilati
    if (selectedRooms.from && selectedRooms.to) {
      applyRoomsFilter()
    }
  }, [setSelectedRooms, focusedField, selectedRooms])

  /**
   * Formatta l'etichetta del numero di locali.
   * @param {string} num - Il numero di locali da formattare.
   * @returns {string} La forma corretta dell'etichetta (singolare o plurale).
   */
  const formatRoomLabel = (num) => (num === '1' ? 'locale' : 'locali')

  /**
   * Restituisce l'etichetta per il numero di locali selezionati.
   * @returns {string} L'etichetta del numero di locali selezionati o 'Locali' se nessun locale è selezionato.
   */
  const getRoomsLabel = () => {
    if (!selectedRooms.from && !selectedRooms.to) return 'Locali'
    if (selectedRooms.from && selectedRooms.to) {
      const fromLabel = `${selectedRooms.from}`
      const toLabel = `${selectedRooms.to}`
      return `Da ${fromLabel} a ${toLabel} ${formatRoomLabel(toLabel)}`
    } else if (selectedRooms.from) {
      const fromLabel = `${selectedRooms.from}`
      return `Da ${fromLabel} ${formatRoomLabel(fromLabel)}`
    } else {
      const toLabel = `${selectedRooms.to}`
      return `Fino a ${toLabel} ${formatRoomLabel(toLabel)}`
    }
  }

  // Applica il filtro dei locali e chiude il dropdown.
  const applyRoomsFilter = () => {
    toggle()
  }

  /**
   * Verifica se un numero di locali è selezionato.
   * @param {string} rooms - Il numero di locali da verificare.
   * @returns {boolean} True se il numero di locali è selezionato, altrimenti False.
   */
  const isSelected = (rooms) => {
    return selectedRooms.from === rooms || selectedRooms.to === rooms || (!selectedRooms.from && !selectedRooms.to && rooms === 'Indifferente')
  }

  /**
  * Verifica se un numero di locali è disabilitato per la selezione.
  * @param {string} rooms - Il numero di locali da verificare.
  * @returns {boolean} True se il numero di locali è disabilitato, altrimenti False.
  */
  const isDisabled = (rooms) => {
    const sanitizedRooms = rooms === 'Indifferente' ? '' : rooms
    return selectedRooms.from && sanitizedRooms && parseInt(sanitizedRooms) < parseInt(selectedRooms.from)
  }

  return (
    <div className='relative'>
      <button
        aria-label='Open rooms dropdown' // Descrizione accessibile per il pulsante
        aria-haspopup='true' // Indica che il pulsante apre un elenco
        aria-expanded={isOpen} // Indica se il dropdown è aperto
        onClick={toggle} // Funzione per aprire/chiudere il dropdown
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getRoomsLabel()}
        <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} className='transition-all ease-in' />
        </svg>
      </button>

      {isOpen && (
        <div className='mt-2 w-full bg-primary-50 border rounded-lg shadow-lg z-10 p-4'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='fromRooms' className='mb-2 text-sm font-medium text-primary-950'>
              Da
            </label>
            <input
              type='number'
              id='fromRooms'
              aria-label='Minimo Locali' // Descrizione accessibile per il campo di input
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Minimo Locali' // Testo segnaposto per il campo di input
              value={selectedRooms.from || ''} // Valore del campo "da"
              onChange={(e) => setSelectedRooms({ ...selectedRooms, from: e.target.value })} // Aggiorna il numero di locali "da" al cambiamento
              onFocus={() => setFocusedField('fromRooms')} // Imposta il campo attualmente in focus
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='toRooms' className='mb-2 text-sm font-medium text-primary-950'>
              Fino a
            </label>
            <input
              type='number'
              id='toRooms'
              aria-label='Massimo Locali' // Descrizione accessibile per il campo di input
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Massimo Locali' // Testo segnaposto per il campo di input
              value={selectedRooms.to || ''} // Valore del campo "fino a"
              onChange={(e) => setSelectedRooms({ ...selectedRooms, to: e.target.value })} // Aggiorna il numero di locali "fino a" al cambiamento
              onFocus={() => setFocusedField('toRooms')} // Imposta il campo attualmente in focus
            />
          </div>
          <div className='flex flex-col mb-4 max-h-40 overflow-y-scroll'>
            <ul className='space-y-1'>
              {roomsOptions.map((rooms, index) => (
                <li
                  key={index} // Chiave univoca per l'elemento della lista
                  role='option' // Ruolo accessibile per l'elemento della lista
                  aria-selected={isSelected(rooms)} // Indica se il numero di locali è selezionato
                  aria-disabled={isDisabled(rooms)} // Indica se il numero di locali è disabilitato
                  className={`cursor-pointer mr-2 py-1 px-2 rounded-lg text-lg transition-all ${isSelected(rooms) ? 'bg-primary-500 text-primary-50' : isDisabled(rooms) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary-100/75 text-primary-950 hover:bg-primary-200'}`}
                  onClick={() => !isDisabled(rooms) && selectRooms(rooms)} // Seleziona il numero di locali al click
                >
                  {rooms}
                </li>
              ))}
            </ul>
          </div>
          <button
            aria-label='Apply rooms filter' // Descrizione accessibile per il pulsante
            className='w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600' // Classi CSS per il pulsante
            onClick={applyRoomsFilter} // Applica il filtro al click
          >
            Applica
          </button>
        </div>
      )}
    </div>
  )
}

export default memo(RoomsFilterDropdown)
