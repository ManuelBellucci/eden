import { memo, useCallback } from 'react'

/**
 * Componente per il dropdown di selezione della tipologia
 * @param {Object} props - Le proprietà del componente.
 * @param {boolean} props.isOpen - Indica se il dropdown è aperto.
 * @param {function} props.toggle - Funzione per alternare lo stato di apertura del dropdown.
 * @param {string} props.selectedTipology - Tipologia attualmente selezionata.
 * @param {function} props.setSelectedTipology - Funzione per aggiornare la tipologia selezionata.
 * @returns {JSX.Element} Il componente dropdown per la selezione della tipologia.
 */
const TipologyFilterDropdown = ({ isOpen, toggle, selectedTipology, setSelectedTipology }) => {
  // Array di opzioni disponibili per la selezione della tipologia
  const tipologyOptions = [
    'Indifferente', 'Appartamenti', 'Attici', 'Ville e villini',
    'Nuova costruzione', 'Garage e posti auto', 'Uffici e negozi', 'Magazzini'
  ]

  /**
   * Seleziona una tipologia specifica e chiude il dropdown.
   * @param {string} tipology - La tipologia selezionata.
   */
  const selectTipology = useCallback((tipology) => {
    // Se l'utente seleziona 'Indifferente', resetta la tipologia selezionata
    if (tipology === 'Indifferente') {
      setSelectedTipology('') // Resetta il valore a stringa vuota
    } else {
      setSelectedTipology(tipology) // Imposta la tipologia selezionata
    }
    toggle() // Chiude il dropdown
  }, [setSelectedTipology, toggle])

  /**
   * Restituisce l'etichetta per la tipologia selezionata.
   * @returns {string} L'etichetta della tipologia selezionata o 'Tipologia' se nessuna è selezionata.
   */
  const getTipologyLabel = () => {
    return selectedTipology || 'Tipologia'
  }

  /**
   * Verifica se una tipologia è selezionata.
   * @param {string} tipology - La tipologia da verificare.
   * @returns {boolean} True se la tipologia è selezionata, False altrimenti.
   */
  const isSelected = (tipology) => {
    return selectedTipology === tipology || (!selectedTipology && tipology === 'Indifferente')
  }

  return (
    <div className='relative'>
      {/* Bottone per aprire/chiudere il dropdown */}
      <button
        aria-label='Open tipology dropdown' // Descrizione accessibile per il pulsante
        aria-haspopup='true' // Indica che il pulsante apre un elenco
        aria-expanded={isOpen} // Indica se il dropdown è aperto
        onClick={toggle} // Funzione per aprire/chiudere il dropdown
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getTipologyLabel()} {/* Mostra l'etichetta della tipologia selezionata */}
        <svg
          className='ml-2 w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          {/* Freccia per indicare lo stato del dropdown (aperto/chiuso) */}
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
            className='transition-all ease-in'
          />
        </svg>
      </button>

      {/* Mostra il dropdown solo se è aperto */}
      {isOpen && (
        <div className='mt-2 w-full bg-primary-50 border rounded-lg shadow-lg z-10 p-4'>
          <ul className='space-y-1'>
            {/* Mappa le opzioni di tipologia, ciascuna opzione rappresentata come una lista */}
            {tipologyOptions.map((tipology, index) => (
              <li
                role='option' // Ruolo accessibile per l'elemento della lista
                aria-selected={isSelected(tipology)} // Indica se la tipologia è selezionata
                key={index} // Identificatore univoco per ciascun elemento
                className={`cursor-pointer py-1 px-2 rounded-lg text-lg transition-all ${isSelected(tipology) ? 'bg-primary-500 text-primary-50' : 'bg-primary-100/75 text-primary-950 hover:bg-primary-200'}`}
                onClick={() => selectTipology(tipology)} // Funzione per selezionare una tipologia
              >
                {tipology} {/* Visualizza il nome della tipologia */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default memo(TipologyFilterDropdown)
