import { memo, useCallback } from 'react'

/**
 * Componente dropdown per selezionare il tipo di contratto.
 * @param {Object} props - Proprietà del componente.
 * @param {boolean} props.isOpen - Indica se il dropdown è aperto.
 * @param {function} props.toggle - Funzione per attivare/disattivare la visibilità del dropdown.
 * @param {string} props.selectedContract - Contratto attualmente selezionato.
 * @param {function} props.setSelectedContract - Funzione per impostare il contratto selezionato.
 * @returns {JSX.Element} Componente renderizzato.
 */
const ContractFilterDropdown = ({ isOpen, toggle, selectedContract, setSelectedContract }) => {
  // Opzioni per i contratti
  const contractOptions = ['Indifferente', 'Vendita', 'Affitto']

  /**
   * Gestisce la selezione dell'opzione del contratto.
   * @param {string} contract - Opzione contratto selezionata.
   */
  const selectContract = useCallback((contract) => {
    if (contract === 'Indifferente') {
      setSelectedContract('') // Resetta la selezione per 'Indifferente'
    } else {
      setSelectedContract(contract) // Imposta il contratto selezionato
    }
    toggle() // Chiude il dropdown
  }, [setSelectedContract, toggle])

  /**
   * Ottiene l'etichetta da visualizzare sul pulsante in base all'opzione selezionata.
   * @returns {string} Etichetta per il pulsante.
   */
  const getContractLabel = () => {
    return selectedContract || 'Contratto' // Etichetta predefinita
  }

  /**
   * Controlla se l'opzione è attualmente selezionata.
   * @param {string} contract - Opzione contratto da controllare.
   * @returns {boolean} True se selezionata, altrimenti false.
   */
  const isSelected = (contract) => {
    return selectedContract === contract || (!selectedContract && contract === 'Indifferente')
  }

  return (
    <div className='relative'>
      <button
        aria-label='Apri dropdown contratto'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        onClick={toggle}
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getContractLabel()}
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
          <ul
            className='space-y-1'
            role='listbox'
          >
            {contractOptions.map((contract, index) => (
              <li
                role='option'
                aria-selected={isSelected(contract)}
                key={index}
                onClick={() => selectContract(contract)}
                className={`cursor-pointer py-1 px-2 rounded-lg text-lg transition-all ${isSelected(contract) ? 'bg-primary-500 text-primary-50' : 'bg-primary-100/75 text-primary-950 hover:bg-primary-200'}`}
              >
                {contract}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default memo(ContractFilterDropdown)
