import { useEffect, useState } from 'react'
import CallToAction from '../../../commons/CallToAction'
import MultiChoiceDropdown from './MultiChoiceDropdown'
import axios from 'axios'

const Browser = () => {
  const [municipalities, setMunicipalities] = useState([])
  const [selectedMunicipalities, setSelectedMunicipalities] = useState([])
  const [selectedTipology, setSelectedTipology] = useState([])
  const [selectedFilters, setSelectedFilters] = useState([])
  const [contractType, setContractType] = useState('vendita')

  const fetchMunicipalities = async () => {
    try {
      const response = await axios.get('http://localhost:5000/municipalities')
      setMunicipalities(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMunicipalities()
  }, [])

  const toggleContractType = (type) => {
    setContractType(type)
  }

  const generateQueryParams = () => {
    const params = new URLSearchParams()

    // Contract type (vendita/affitto)
    if (contractType) {
      params.set('c', contractType)
    }

    // Tipology (only one should be selected)
    if (selectedTipology.length > 0) {
      params.set('t', selectedTipology[0].toLowerCase())
    }

    // Filters (extras)
    if (selectedFilters.length > 0) {
      params.set('extras', selectedFilters.join(' ').toLowerCase())
    }

    return `/immobili?${params.toString()}`
  }

  return (
    <div className='w-full'>
      <div className='flex text-xl font-bold justify-center text-primary-50'>
        <button
          onClick={() => toggleContractType('vendita')}
          className={`px-4 py-2 rounded-t-lg w-full rounded-b-none rounded-tr-none ${contractType === 'vendita'
            ? 'bg-primary-50 text-primary-500 transition-all ease-in'
            : 'bg-primary-500 text-primary-50 transition-all ease-in'
            }`}
        >
          Vendita
        </button>
        <button
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
        <MultiChoiceDropdown
          label='Zona (disponibili)'
          className='w-full'
          options={municipalities}
          selectedOptions={selectedMunicipalities}
          setSelectedOptions={setSelectedMunicipalities}
        />
        <MultiChoiceDropdown
          label='Tipologia'
          className='w-full'
          options={['Appartamenti', 'Attici', 'Ville e villette', 'Uffici e negozi', 'Garage e posti auto']}
          selectedOptions={selectedTipology}
          setSelectedOptions={setSelectedTipology}
          isSingleSelection
        />
        <MultiChoiceDropdown
          label='Filtri'
          className='w-full'
          options={['Terrazzo', 'Balcone', 'Ascensore',
            'Arredato', 'Cantina', 'Aria condizionata', 'Affittato', 'Ripostiglio'
          ]}
          selectedOptions={selectedFilters}
          setSelectedOptions={setSelectedFilters}
        />

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
