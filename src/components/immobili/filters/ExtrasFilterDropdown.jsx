import { useCallback, memo } from 'react'

/**
 * Componente dropdown per selezionare le caratteristiche aggiuntive.
 * @param {Object} props - Proprietà del componente.
 * @param {boolean} props.isOpen - Indica se il dropdown è aperto.
 * @param {function} props.toggle - Funzione per attivare/disattivare la visibilità del dropdown.
 * @param {Object} props.selectedExtras - Oggetto contenente le caratteristiche aggiuntive selezionate.
 * @param {function} props.setSelectedExtras - Funzione per impostare le caratteristiche aggiuntive selezionate.
 * @returns {JSX.Element} Componente renderizzato.
 */
const ExtrasFilterDropdown = ({ isOpen, toggle, selectedExtras, setSelectedExtras }) => {
  // Opzioni per le caratteristiche aggiuntive
  const extrasOptions = [
    { label: 'Terrazzo', value: 'terrace' },
    { label: 'Balcone', value: 'balcony' },
    { label: 'Ascensore', value: 'elevator' },
    { label: 'Arredato', value: 'furnished' },
    { label: 'Cantina', value: 'cellar' },
    { label: 'Aria condizionata', value: 'airConditioning' },
    { label: 'Affittato', value: 'rented' },
    { label: 'Ripostiglio', value: 'closet' }
  ]

  /**
   * Attiva/disattiva una caratteristica aggiuntiva selezionata.
   * @param {string} value - Valore della caratteristica aggiuntiva.
   */
  const toggleExtra = useCallback((value) => {
    setSelectedExtras((prev) => ({ ...prev, [value]: !prev[value] })) // Inverte lo stato della caratteristica
  }, [setSelectedExtras])

  /**
   * Ottiene l'etichetta da visualizzare sul pulsante in base alle caratteristiche selezionate.
   * @returns {string} Etichetta per il pulsante.
   */
  const getExtrasLabel = () => {
    const selected = extrasOptions.filter((opt) => selectedExtras[opt.value]).map((opt) => opt.label)
    if (selected.length === 0) {
      return 'Extra' // Etichetta predefinita
    }
    const firstExtra = selected[0] // Primo extra selezionato
    const extraCount = selected.length - 1 // Conteggio degli extra aggiuntivi
    return extraCount > 0 ? `${firstExtra} (+${extraCount})` : firstExtra // Mostra il conteggio se ci sono più extra
  }

  return (
    <div className='relative'>
      <button
        aria-label='Apri dropdown extra'
        aria-haspopup='true'
        aria-expanded={isOpen}
        onClick={toggle}
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getExtrasLabel()}
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
          <div className='flex flex-col max-h-40 overflow-y-scroll space-y-2'>
            {extrasOptions.map((extra) => (
              <button
                aria-label='Seleziona extra'
                key={extra.value}
                aria-checked={selectedExtras[extra.value]}
                role='checkbox'
                className={`py-1 px-2 mr-2 text-lg rounded-lg text-center cursor-pointer transition-all ${selectedExtras[extra.value]
                                    ? 'bg-primary-500 text-primary-50'
                                    : 'text-primary-950 bg-primary-100/75 hover:bg-primary-200'
                                    }`}
                onClick={() => toggleExtra(extra.value)}
              >
                {extra.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(ExtrasFilterDropdown)
