import { useContext, useState, useCallback } from 'react'
import { FiltersContext } from '../contexts/FiltersContext'

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

    const [openModalFilters, setOpenModalFilters] = useState({
        contract: false,
        tipology: false,
        price: false,
        size: false,
        rooms: false,
        bathrooms: false,
        floor: false,
        extras: false
    })

    const handleFilterChange = useCallback((setter, value) => {
        setter(value)
    }, [])

    const toggleFilter = useCallback((filterName) => {
        setOpenFilter(prevFilter => prevFilter === filterName ? null : filterName)
    }, [])

    const toggleModalFilter = useCallback((filterName) => {
        setOpenModalFilters(prev => {
            const isCurrentlyOpen = prev[filterName]
            const newSettings = Object.fromEntries(
                Object.keys(prev).map(key => [key, false]) // Close all first
            )
            return { ...newSettings, [filterName]: !isCurrentlyOpen }
        })
    }, [])

    const toggleModal = useCallback(() => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen)
        if (!isModalOpen) {
            setOpenModalFilters({
                contract: false,
                tipology: false,
                price: false,
                size: false,
                rooms: false,
                bathrooms: false,
                floor: false,
                extras: false
            })
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
