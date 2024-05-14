import { useContext, useState, useCallback, useReducer } from 'react'
import { FiltersContext } from '../contexts/FiltersContext'

// Define action types
const TOGGLE_FILTER = 'TOGGLE_FILTER'
const TOGGLE_MODAL = 'TOGGLE_MODAL'

// Initial state for modal filters
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

// Reducer to handle modal filters state
const modalFiltersReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FILTER: {
      const { filterName } = action.payload
      const isCurrentlyOpen = state[filterName]
      const newSettings = Object.keys(state).reduce((acc, key) => {
        acc[key] = false
        return acc
      }, {})
      return { ...newSettings, [filterName]: !isCurrentlyOpen }
    }
    case TOGGLE_MODAL:
      return initialModalFiltersState
    default:
      return state
  }
}

const useFilters = () => {
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

  const [openFilter, setOpenFilter] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openModalFilters, dispatch] = useReducer(modalFiltersReducer, initialModalFiltersState)

  const handleFilterChange = useCallback((setter, value) => {
    setter(value)
  }, [])

  const toggleFilter = useCallback((filterName) => {
    setOpenFilter(prevFilter => prevFilter === filterName ? null : filterName)
  }, [])

  const toggleModalFilter = useCallback((filterName) => {
    dispatch({ type: TOGGLE_FILTER, payload: { filterName } })
  }, [])

  const toggleModal = useCallback(() => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen)
    if (!isModalOpen) {
      dispatch({ type: TOGGLE_MODAL })
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
