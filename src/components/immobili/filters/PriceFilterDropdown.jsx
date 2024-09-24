import { memo, useCallback, useState } from 'react'

/**
 * Componente per il dropdown di selezione del prezzo.
 * @param {Object} props - Proprietà del componente.
 * @param {boolean} props.isOpen - Indica se il dropdown è aperto.
 * @param {function} props.toggle - Funzione per alternare lo stato di apertura del dropdown.
 * @param {Object} props.selectedPrice - Prezzi attualmente selezionati.
 * @param {function} props.setSelectedPrice - Funzione per aggiornare i prezzi selezionati.
 * @returns {JSX.Element} Il componente dropdown per la selezione del prezzo.
 */
const PriceFilterDropdown = ({ isOpen, toggle, selectedPrice, setSelectedPrice }) => {
  // Stato per tenere traccia del campo attualmente in focus
  const [focusedField, setFocusedField] = useState('')

  // Opzioni di selezione per i prezzi
  const priceOptions = [
    'Indifferente', '50.000 €', '60.000 €', '70.000 €', '80.000 €',
    '90.000 €', '100.000 €', '120.000 €', '140.000 €', '160.000 €',
    '180.000 €', '200.000 €', '220.000 €', '240.000 €', '260.000 €',
    '280.000 €', '300.000 €', '320.000 €', '340.000 €', '360.000 €',
    '380.000 €', '400.000 €', '450.000 €', '500.000 €'
  ]

  /**
   * Seleziona un prezzo specifico.
   * @param {string} price - Il prezzo da selezionare.
   */
  const selectPrice = useCallback((price) => {
    // Se l'utente seleziona 'Indifferente', svuota la selezione
    if (price === 'Indifferente') {
      setSelectedPrice({ from: '', to: '' })
      setFocusedField('')
      return
    }

    // Sanitizza il prezzo rimuovendo il simbolo '€' e i punti
    const sanitizedPrice = price.replace(' €', '').replace('.', '')
    // Se il campo "da" è vuoto o è attualmente in focus, imposta il prezzo "da"
    if (!selectedPrice.from || focusedField === 'from') {
      setSelectedPrice({ ...selectedPrice, from: sanitizedPrice })
      setFocusedField('')
      // Altrimenti, se il campo "fino a" è vuoto o è in focus, imposta il prezzo "fino a"
    } else if (!selectedPrice.to || focusedField === 'to') {
      setSelectedPrice({ ...selectedPrice, to: sanitizedPrice })
      setFocusedField('')
    }

    // Applica il filtro se entrambi i campi sono compilati
    if (selectedPrice.from && selectedPrice.to) {
      applyPriceFilter()
    }
  }, [setSelectedPrice, focusedField, selectedPrice])

  /**
   * Restituisce l'etichetta per il prezzo selezionato.
   * @returns {string} L'etichetta del prezzo selezionato o 'Prezzo' se nessun prezzo è selezionato.
   */
  const getPriceLabel = () => {
    if (!selectedPrice.from && !selectedPrice.to) return 'Prezzo'
    const fromLabel = selectedPrice.from ? `${Number(selectedPrice.from).toLocaleString()}€` : undefined
    const toLabel = selectedPrice.to ? `${Number(selectedPrice.to).toLocaleString()}€` : undefined
    return fromLabel && toLabel ? `Da ${fromLabel} a ${toLabel}` : fromLabel ? `Da ${fromLabel}` : `Fino a ${toLabel}`
  }

  // Applica il filtro del prezzo e chiude il dropdown
  const applyPriceFilter = () => {
    toggle()
  }

  /**
   * Verifica se un prezzo è selezionato.
   * @param {string} price - Il prezzo da verificare.
   * @returns {boolean} True se il prezzo è selezionato, altrimenti False.
   */
  const isSelected = (price) => {
    const sanitizedPrice = price === 'Indifferente' ? '' : price.replace(' €', '').replace('.', '')
    return selectedPrice.from === sanitizedPrice || selectedPrice.to === sanitizedPrice || (!selectedPrice.from && !selectedPrice.to && price === 'Indifferente')
  }

  /**
   * Verifica se un prezzo è disabilitato per la selezione.
   * @param {string} price - Il prezzo da verificare.
   * @returns {boolean} True se il prezzo è disabilitato, altrimenti False.
   */
  const isDisabled = (price) => {
    const sanitizedPrice = price === 'Indifferente' ? '' : price.replace(' €', '').replace('.', '')
    return selectedPrice.from && sanitizedPrice && parseInt(sanitizedPrice) < parseInt(selectedPrice.from)
  }

  return (
    <div className='relative'>
      <button
        aria-label='Open price dropdown' // Descrizione accessibile per il pulsante
        aria-haspopup='true' // Indica che il pulsante apre un elenco
        aria-expanded={isOpen} // Indica se il dropdown è aperto
        onClick={toggle} // Funzione per aprire/chiudere il dropdown
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getPriceLabel()}
        <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} className='transition-all ease-in' />
        </svg>
      </button>

      {isOpen && (
        <div className='mt-2 w-full bg-primary-50 border rounded-lg shadow-lg z-10 p-4'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='fromPrice' className='mb-2 text-sm font-medium text-primary-950'>
              Da
            </label>
            <input
              type='number'
              id='fromPrice'
              aria-labelledby='fromPriceLabel' // Associazione per l'accessibilità
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Minimo (€)' // Testo segnaposto per il campo di input
              value={selectedPrice.from || ''} // Valore del campo "da"
              onChange={(e) => setSelectedPrice({ ...selectedPrice, from: e.target.value })} // Aggiorna il prezzo "da" al cambiamento
              onFocus={() => setFocusedField('from')} // Imposta il campo attualmente in focus
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='toPrice' className='mb-2 text-sm font-medium text-primary-950'>
              Fino a
            </label>
            <input
              type='number'
              id='toPrice'
              aria-labelledby='toPriceLabel' // Associazione per l'accessibilità
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Massimo (€)' // Testo segnaposto per il campo di input
              value={selectedPrice.to || ''} // Valore del campo "fino a"
              onChange={(e) => setSelectedPrice({ ...selectedPrice, to: e.target.value })} // Aggiorna il prezzo "fino a" al cambiamento
              onFocus={() => setFocusedField('to')} // Imposta il campo attualmente in focus
            />
          </div>
          <div className='flex flex-col mb-4 max-h-40 overflow-y-scroll'>
            <ul className='space-y-1'>
              {priceOptions.map((price, index) => (
                <li
                  key={index} // Chiave univoca per l'elemento della lista
                  role='option' // Ruolo accessibile per l'elemento della lista
                  aria-selected={isSelected(price)} // Indica se il prezzo è selezionato
                  aria-disabled={isDisabled(price)} // Indica se il prezzo è disabilitato
                  className={`cursor-pointer mr-2 py-1 px-2 rounded-lg text-lg transition-all ${isSelected(price) ? 'bg-primary-500 text-primary-50' : isDisabled(price) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary-100/75 text-primary-950 hover:bg-primary-200'}`} // Classi CSS condizionali
                  onClick={() => !isDisabled(price) && selectPrice(price)}
                >
                  {price}
                </li>
              ))}
            </ul>
          </div>
          <button
            aria-label='Apply price filter' // Descrizione accessibile per il pulsante
            type='button' // Tipo di pulsante
            className='w-full px-4 py-2 text-primary-50 bg-primary-500 rounded-lg hover:bg-primary-600' // Classi CSS del pulsante
            onClick={applyPriceFilter} // Funzione per applicare il filtro
          >
            Applica
          </button>
        </div>
      )}
    </div>
  )
}

export default memo(PriceFilterDropdown)
