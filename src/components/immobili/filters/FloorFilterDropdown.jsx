import { useCallback, memo } from 'react'

/**
 * Componente per il dropdown di selezione dei piani.
 *
 * @param {Object} props - Proprietà del componente.
 * @param {boolean} props.isOpen - Indica se il dropdown è aperto.
 * @param {function} props.toggle - Funzione per alternare lo stato di apertura del dropdown.
 * @param {Array<string>} props.selectedFloor - Piani attualmente selezionati.
 * @param {function} props.setSelectedFloor - Funzione per aggiornare i piani selezionati.
 * @returns {JSX.Element} Il componente dropdown per la selezione dei piani.
 */
const FloorFilterDropdown = ({ isOpen, toggle, selectedFloor, setSelectedFloor }) => {
  // Opzioni di selezione per i piani
  const floorOptions = ['Indifferente', 'Piano terra', 'Piani intermedi', 'Ultimo piano', 'Multilivello']

  /**
   * Seleziona un piano specifico.
   *
   * @param {string} floor - Il piano da selezionare.
   */
  const selectFloor = useCallback((floor) => {
    // Se l'utente seleziona 'Indifferente', svuota la selezione
    if (floor === 'Indifferente') {
      setSelectedFloor([])
    } else {
      // Altrimenti, imposta il piano selezionato
      setSelectedFloor([floor])
    }
    // Chiude il dropdown dopo la selezione
    toggle()
  }, [setSelectedFloor, toggle])

  /**
   * Restituisce l'etichetta del piano selezionato.
   *
   * @returns {string} L'etichetta del piano selezionato o 'Piano' se nessun piano è selezionato.
   */
  const getFloorLabel = () => {
    return selectedFloor.length > 0 ? selectedFloor.join(', ') : 'Piano'
  }

  /**
   * Verifica se un piano è selezionato.
   *
   * @param {string} floor - Il piano da verificare.
   * @returns {boolean} True se il piano è selezionato, altrimenti False.
   */
  const isSelected = (floor) => {
    return selectedFloor === floor || (!selectedFloor && floor === 'Indifferente')
  }

  return (
    <div className='relative'>
      <button
        aria-label='Open floor dropdown' // Descrizione accessibile per il pulsante
        aria-haspopup='listbox' // Indica che il pulsante apre un elenco
        aria-expanded={isOpen} // Indica se il dropdown è aperto
        onClick={toggle} // Funzione per aprire/chiudere il dropdown
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getFloorLabel()} {/* Mostra l'etichetta del piano selezionato */}
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
            d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} // Icona che cambia a seconda dello stato del dropdown
            className='transition-all ease-in'
          />
        </svg>
      </button>

      {isOpen && ( // Mostra il dropdown solo se è aperto
        <div className='mt-2 w-full bg-primary-50 border rounded-lg shadow-lg z-10 p-4'>
          <div className='flex flex-col max-h-40 overflow-hidden'>
            <ul className='space-y-1'>
              {floorOptions.map((floor, index) => ( // Mappa le opzioni di piano
                <li
                  key={index}
                  role='option' // Ruolo accessibile per l'elemento della lista
                  aria-selected={isSelected(floor)} // Indica se il piano è selezionato
                  onClick={() => selectFloor(floor)} // Seleziona il piano al click
                  className={`cursor-pointer py-1 px-2 rounded-lg text-lg transition-all ${isSelected(floor) ? 'bg-primary-500 text-primary-50' : 'bg-primary-100/75 text-primary-950 hover:bg-primary-200'}`}
                >
                  {floor} {/* Mostra il nome del piano */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

// Memoizza il componente per ottimizzare le performance
export default memo(FloorFilterDropdown)
