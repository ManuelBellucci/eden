import { useContext, useState, useCallback, useReducer } from 'react'
import { FiltersContext } from '../contexts/FiltersContext'

// Tipi di azione per il riduttore
const TOGGLE_FILTER = 'TOGGLE_FILTER'
const TOGGLE_MODAL = 'TOGGLE_MODAL'

// Stato iniziale per i filtri del modulo
const initialModalFiltersState = {
  contract: false,
  tipology: false,
  price: false,
  size: false,
  rooms: false,
  bathrooms: false,
  floor: false,
  extras: false
}

// Riduttore per gestire lo stato dei filtri del modulo
const modalFiltersReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FILTER: {
      const { filterName } = action.payload
      const isCurrentlyOpen = state[filterName]
      const newSettings = Object.keys(state).reduce((acc, key) => {
        acc[key] = false
        return acc
      }, {})
      return { ...newSettings, [filterName]: !isCurrentlyOpen } // Inverte lo stato del filtro
    }
    case TOGGLE_MODAL:
      return initialModalFiltersState // Resetta i filtri del modulo
    default:
      return state
  }
}

const useFilters = () => {
  // Estrae i valori dal contesto dei filtri
  const {
    contract,
    setContract,
    tipology,
    setTipology,
    price,
    setPrice,
    size,
    setSize,
    rooms,
    setRooms,
    bathrooms,
    setBathrooms,
    floor,
    setFloor,
    extras,
    setExtras,
    cleanFilters
  } = useContext(FiltersContext)

  const [openFilter, setOpenFilter] = useState(null) // Stato per il filtro attualmente aperto
  const [isModalOpen, setIsModalOpen] = useState(false) // Stato per la visibilità del modulo
  const [openModalFilters, dispatch] = useReducer(modalFiltersReducer, initialModalFiltersState) // Stato per i filtri del modulo

  // Gestisce le modifiche ai filtri
  const handleFilterChange = useCallback((setter, value) => {
    setter(value)
  }, [])

  // Alterna la visibilità di un filtro
  const toggleFilter = useCallback((filterName) => {
    setOpenFilter(prevFilter => prevFilter === filterName ? null : filterName)
  }, [])

  // Alterna la visibilità di un filtro nel modulo
  const toggleModalFilter = useCallback((filterName) => {
    dispatch({ type: TOGGLE_FILTER, payload: { filterName } })
  }, [])

  // Alterna la visibilità del modulo dei filtri
  const toggleModal = useCallback(() => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen)
    if (!isModalOpen) {
      dispatch({ type: TOGGLE_MODAL }) // Resetta i filtri se il modulo si apre
    }
  }, [isModalOpen])

  return {
    contract,
    setContract,
    tipology,
    setTipology,
    price,
    setPrice,
    size,
    setSize,
    rooms,
    setRooms,
    bathrooms,
    setBathrooms,
    floor,
    setFloor,
    extras,
    setExtras,
    cleanFilters,
    openFilter,
    isModalOpen,
    openModalFilters,
    handleFilterChange,
    toggleFilter,
    toggleModalFilter,
    toggleModal
  }
}

export default useFilters
