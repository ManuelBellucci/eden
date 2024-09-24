import { memo, useCallback, useState } from 'react'

/**
 * Componente per il dropdown di selezione della superficie.
 * @param {Object} props - Proprietà del componente.
 * @param {boolean} props.isOpen - Indica se il dropdown è aperto.
 * @param {function} props.toggle - Funzione per alternare lo stato di apertura del dropdown.
 * @param {Object} props.selectedSize - Oggetto contenente le dimensioni selezionate.
 * @param {function} props.setSelectedSize - Funzione per aggiornare le dimensioni selezionate.
 * @returns {JSX.Element} Il componente dropdown per la selezione della superficie.
 */
const SizeFilterDropdown = ({ isOpen, toggle, selectedSize, setSelectedSize }) => {
  // Opzioni di selezione per le dimensioni
  const sizeOptions = [
    'Indifferente', '20 m²', '40 m²', '60 m²', '80 m²',
    '100 m²', '120 m²', '140 m²', '160 m²', '180 m²',
    '200 m²', '250 m²', '300 m²', '350 m²', '400 m²',
    '500 m²', '600 m²', '700 m²', '800 m²', '900 m²', '1.000 m²'
  ]
  // Stato per tenere traccia del campo attualmente in focus
  const [focusedField, setFocusedField] = useState('')

  /**
  * Seleziona una dimensione specifica.
  * @param {string} size - La dimensione da selezionare.
  */
  const selectSize = useCallback((size) => {
    // Se l'utente seleziona 'Indifferente', svuota la selezione
    if (size === 'Indifferente') {
      setSelectedSize({ from: '', to: '' })
      setFocusedField('')
      return
    }

    // Sanitizza la dimensione (rimuove ' m²')
    const sanitizedSize = size.replace(' m²', '')
    // Se il campo "da" è vuoto o è attualmente in focus, imposta il numero di superficie "da"
    if (!selectedSize.from || focusedField === 'fromSize') {
      setSelectedSize({ ...selectedSize, from: sanitizedSize })
      setFocusedField('')
      // Altrimenti, se il campo "fino a" è vuoto o è in focus, imposta il numero di superficie "fino a"
    } else if (!selectedSize.to || focusedField === 'toSize') {
      setSelectedSize({ ...selectedSize, to: sanitizedSize })
      setFocusedField('')
    }

    // Se entrambi i campi sono compilati, chiude il dropdown
    if (selectedSize.from && selectedSize.to) {
      applySizeFilter()
    }
  }, [setSelectedSize, focusedField, selectedSize])

  /**
   * Restituisce l'etichetta per le dimensioni selezionate.
   * @returns {string} L'etichetta della superficie selezionata o 'Superficie' se nessuna superficie è selezionata.
   */
  const getSizeLabel = () => {
    if (!selectedSize.from && !selectedSize.to) return 'Superficie'
    if (selectedSize.from && selectedSize.to) {
      const fromLabel = `${selectedSize.from} m²`
      const toLabel = `${selectedSize.to} m²`
      return `Da ${fromLabel} a ${toLabel}`
    } else if (selectedSize.from) {
      const fromLabel = `${selectedSize.from} m²`
      return `Da ${fromLabel}`
    } else {
      const toLabel = `${selectedSize.to} m²`
      return `Fino a ${toLabel}`
    }
  }

  // Applica il filtro delle dimensioni e chiude il dropdown.
  const applySizeFilter = () => {
    toggle()
  }

  /**
   * Verifica se una dimensione è selezionata.
   * @param {string} size - La dimensione da verificare.
   * @returns {boolean} True se la dimensione è selezionata, altrimenti False.
   */
  const isSelected = (size) => {
    const sanitizedSize = size === 'Indifferente' ? '' : size.replace(' m²', '')
    return selectedSize.from === sanitizedSize || selectedSize.to === sanitizedSize || (!selectedSize.from && !selectedSize.to && size === 'Indifferente')
  }

  /**
   * Verifica se una dimensione è disabilitata per la selezione.
   * @param {string} size - La dimensione da verificare.
   * @returns {boolean} True se la dimensione è disabilitata, altrimenti False.
   */
  const isDisabled = (size) => {
    const sanitizedSize = size === 'Indifferente' ? '' : size.replace(' m²', '')
    return selectedSize.from && sanitizedSize && parseInt(sanitizedSize) < parseInt(selectedSize.from)
  }

  return (
    <div className='relative'>
      <button
        aria-label='Open size dropdown' // Descrizione accessibile per il pulsante
        aria-haspopup='true' // Indica che il pulsante apre un elenco
        aria-expanded={isOpen} // Indica se il dropdown è aperto
        onClick={toggle} // Funzione per aprire/chiudere il dropdown
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getSizeLabel()}
        <svg
          className='ml-2 w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
            className='transition-all ease-in'
          />
        </svg>
      </button>

      {isOpen && (
        <div className='mt-2 w-full bg-primary-50 border rounded-lg shadow-lg z-10 p-4'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='fromSize' className='mb-2 text-sm font-medium text-primary-950'>
              Da
            </label>
            <input
              type='number'
              id='fromSize'
              aria-label='Minimo Superficie' // Descrizione accessibile per il campo di input
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Minimo (m²)' // Testo segnaposto per il campo di input
              value={selectedSize.from || ''} // Valore del campo "da"
              onChange={(e) => setSelectedSize({ ...selectedSize, from: e.target.value })} // Aggiorna il numero di superficie "da" al cambiamento
              onFocus={() => setFocusedField('fromSize')} // Imposta il campo attualmente in focus
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='toSize' className='mb-2 text-sm font-medium text-primary-950'>
              Fino a
            </label>
            <input
              type='number'
              id='toSize'
              aria-label='Massimo Superficie' // Descrizione accessibile per il campo di input
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Massimo (m²)' // Testo segnaposto per il campo di input
              value={selectedSize.to || ''} // Valore del campo "fino a"
              onChange={(e) => setSelectedSize({ ...selectedSize, to: e.target.value })} // Aggiorna il numero di superficie "fino a" al cambiamento
              onFocus={() => setFocusedField('toSize')} // Imposta il campo attualmente in focus
            />
          </div>
          <div className='flex flex-col mb-4 max-h-40 overflow-y-scroll'>
            <ul className='space-y-1'>
              {sizeOptions.map((size, index) => (
                <li
                  key={index} // Chiave univoca per l'elemento della lista
                  role='option' // Ruolo accessibile per l'elemento della lista
                  aria-selected={isSelected(size)} // Indica se la dimensione è selezionata
                  aria-disabled={isDisabled(size)} // Indica se la dimensione è disabilitata
                  className={`cursor-pointer mr-2 py-1 px-2 rounded-lg text-lg transition-all ${isSelected(size) ? 'bg-primary-500 text-primary-50' : isDisabled(size) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary-100/75 text-primary-950 hover:bg-primary-200'}`} // Classi CSS condizionali
                  onClick={() => !isDisabled(size) && selectSize(size)} // Seleziona la dimensione al click
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <button
            aria-label='Apply size filter' // Descrizione accessibile per il pulsante
            type='button' // Tipo di pulsante
            className='w-full px-4 py-2 text-primary-50 bg-primary-500 rounded-lg hover:bg-primary-600' // Classi CSS del pulsante
            onClick={applySizeFilter} // Applica il filtro al click
          >
            Applica
          </button>
        </div>
      )}
    </div>
  )
}

export default memo(SizeFilterDropdown)
