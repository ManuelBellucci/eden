import { useEffect, useState } from 'react'
import CallToAction from '../../../commons/CallToAction'
import MultiChoiceDropdown from './MultiChoiceDropdown'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Componente Browser: consente la ricerca di immobili in base a vari criteri.
const Browser = () => {
  // Stato per memorizzare le informazioni sui comuni
  const [municipalities, setMunicipalities] = useState([])
  // Stato per le municipalità selezionate
  const [selectedMunicipalities, setSelectedMunicipalities] = useState([])
  // Stato per la tipologia selezionata
  const [selectedTipology, setSelectedTipology] = useState([])
  // Stato per i filtri selezionati
  const [selectedFilters, setSelectedFilters] = useState([])
  // Stato per il tipo di contratto (vendita/affitto)
  const [contractType, setContractType] = useState('vendita')

  // Funzione per recuperare i comuni da un'API
  const fetchMunicipalities = async () => {
    try {
      const response = await axios.get(`${API_URL}/municipalities`)
      setMunicipalities(response.data) // Imposta i comuni nello stato
    } catch (error) {
      console.error(error) // Gestione degli errori
    }
  }

  // Effetto per caricare i comuni all'avvio del componente
  useEffect(() => {
    fetchMunicipalities()
  }, [])

  // Funzione per alternare il tipo di contratto selezionato
  const toggleContractType = (type) => {
    setContractType(type)
  }

  // Genera i parametri della query per la ricerca degli immobili
  const generateQueryParams = () => {
    const params = new URLSearchParams()

    // Tipo di contratto (vendita/affitto)
    if (contractType) {
      params.set('c', contractType)
    }

    // Tipologia (solo una dovrebbe essere selezionata)
    if (selectedTipology.length > 0) {
      params.set('t', selectedTipology[0].toLowerCase())
    }

    // Filtri (opzioni extra)
    if (selectedFilters.length > 0) {
      params.set('extras', selectedFilters.join(' ').toLowerCase())
    }

    return `/immobili?${params.toString()}` // Restituisce la stringa della query
  }

  return (
    <div className='w-full'>
      <div className='flex text-xl font-bold justify-center text-primary-50'>
        {/* Pulsante per Vendita */}
        <button
          aria-label='Vendita'
          onClick={() => toggleContractType('vendita')}
          className={`px-4 py-2 rounded-t-lg w-full rounded-b-none rounded-tr-none ${contractType === 'vendita'
            ? 'bg-primary-50 text-primary-500 transition-all ease-in'
            : 'bg-primary-500 text-primary-50 transition-all ease-in'
            }`}
        >
          Vendita
        </button>
        {/* Pulsante per Affitto */}
        <button
          aria-label='Affitto'
          onClick={() => toggleContractType('affitto')}
          className={`px-4 py-2 rounded-t-lg w-full rounded-b-none rounded-tl-none ${contractType === 'affitto'
            ? 'bg-primary-50 text-primary-500 transition-all ease-in'
            : 'bg-primary-500 text-primary-50 transition-all ease-in'
            }`}
        >
          Affitto
        </button>
      </div>
      <div className='h-full w-full flex flex-col md:flex-row gap-4 rounded-lg rounded-t-none md:rounded-t-none bg-primary-50 py-4 px-4'>
        {/* Dropdown per le municipalità */}
        <MultiChoiceDropdown
          label='Zona (disponibili)'
          className='w-full'
          options={municipalities}
          selectedOptions={selectedMunicipalities}
          setSelectedOptions={setSelectedMunicipalities}
        />
        {/* Dropdown per la tipologia */}
        <MultiChoiceDropdown
          label='Tipologia'
          className='w-full'
          options={['Appartamenti', 'Attici', 'Ville e villette', 'Uffici e negozi', 'Garage']}
          selectedOptions={selectedTipology}
          setSelectedOptions={setSelectedTipology}
          isSingleSelection
        />
        {/* Dropdown per i filtri */}
        <MultiChoiceDropdown
          label='Filtri'
          className='w-full'
          options={['Terrazzo', 'Balcone', 'Ascensore',
            'Arredato', 'Cantina', 'Aria condizionata', 'Affittato', 'Ripostiglio'
          ]}
          selectedOptions={selectedFilters}
          setSelectedOptions={setSelectedFilters}
        />

        {/* Pulsante per cercare immobili */}
        <CallToAction
          text='Cercare'
          anchor
          rounded='lg'
          size='lg'
          className='w-full rounded-full !bg-primary-500 hover:!bg-primary-600 active:!bg-primary-700 !text-primary-50'
          href={generateQueryParams()}
        />
      </div>
    </div>
  )
}

export default Browser
