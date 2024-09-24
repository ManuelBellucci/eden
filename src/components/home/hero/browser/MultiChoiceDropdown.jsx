import { useState, useRef, useEffect } from 'react'

/*
* Componente MultiChoiceDropdown - Consente la selezione multipla di opzioni da un elenco
* @props {Array} options - Opzioni disponibili per la selezione
* @props {string} label - Etichetta del dropdown
* @props {Array} selectedOptions - Opzioni attualmente selezionate
* @props {function} setSelectedOptions - Funzione per aggiornare le opzioni selezionate
* @props {boolean} isSingleSelection - Indica se è consentita solo una selezione
* @returns {JSX.Element} - Elemento React per la selezione multipla di opzioni
*/

const MultiChoiceDropdown = ({
  options,
  label,
  selectedOptions,
  setSelectedOptions,
  isSingleSelection = false
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // Stato per gestire l'apertura del dropdown
  const dropdownRef = useRef(null) // Riferimento per il dropdown

  // Gestione dei clic al di fuori del dropdown per chiuderlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside) // Aggiungi l'event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside) // Rimuovi l'event listener
    }
  }, [])

  // Gestisce il cambiamento di selezione
  const handleSelectionChange = (option) => {
    if (isSingleSelection) {
      setSelectedOptions([option]) // Solo una selezione consentita
    } else {
      setSelectedOptions((prev) => {
        if (prev.includes(option)) {
          return prev.filter((item) => item !== option) // Rimuovi se già selezionato
        } else {
          return [...prev, option] // Aggiungi se non selezionato
        }
      })
    }
  }

  // Alterna l'apertura del dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div ref={dropdownRef} className='relative w-full'>
      <button
        aria-label='Open dropdown'
        onClick={toggleDropdown}
        className='w-full flex items-center justify-between px-4 py-4 text-primary-950 bg-primary-50 border border-primary-300 rounded-lg text-nowrap'
      >
        {label}
        <span className='ml-2 text-xs'>{isDropdownOpen ? '▲' : '▼'}</span>
      </button>
      {isDropdownOpen && (
        <div className='absolute z-10 overflow-y-auto max-h-40 bg-primary-50 border mt-4 flex flex-col items-center border-gray-300 rounded-lg p-2'>
          {options.map((option) => (
            <button
              aria-label='Select option'
              key={option}
              onClick={() => handleSelectionChange(option)}
              className={`px-4 py-2 m-1 rounded-lg w-full ${selectedOptions.includes(option)
                ? 'bg-primary-500 text-primary-50'
                : 'bg-primary-50/75 text-primary-950'
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default MultiChoiceDropdown
