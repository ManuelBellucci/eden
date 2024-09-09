import React, { createContext, useState, useEffect, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { queryStringToObject } from '../helpers/queryHelpers'

const parseBooleanExtras = (extrasString) => {
  const booleanExtras = {
    terrace: false,
    balcony: false,
    elevator: false,
    furnished: false,
    cellar: false,
    airConditioning: false,
    rented: false,
    closet: false
  }

  if (extrasString) {
    const selectedExtras = extrasString.split(',')
    selectedExtras.forEach((extra) => {
      if (Object.prototype.hasOwnProperty.call(booleanExtras, extra)) {
        booleanExtras[extra] = true
      }
    })
  }

  return booleanExtras
}

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [initializingFromUrl, setInitializingFromUrl] = useState(true)
  const [contract, setContract] = useState('')
  const [tipology, setTipology] = useState('')
  const [price, setPrice] = useState({ from: '', to: '' })
  const [size, setSize] = useState({ from: '', to: '' })
  const [rooms, setRooms] = useState({ from: '', to: '' })
  const [bathrooms, setBathrooms] = useState('')
  const [floor, setFloor] = useState([])
  const [extras, setExtras] = useState({
    terrace: false,
    balcony: false,
    elevator: false,
    furnished: false,
    cellar: false,
    airConditioning: false,
    rented: false,
    closet: false
  })

  const navigate = useNavigate()
  const location = useLocation()

  const cleanFilters = useCallback(() => {
    setContract('')
    setTipology('')
    setPrice({ from: '', to: '' })
    setSize({ from: '', to: '' })
    setRooms({ from: '', to: '' })
    setBathrooms('')
    setFloor([])
    setExtras({
      terrace: false,
      balcony: false,
      elevator: false,
      furnished: false,
      cellar: false,
      airConditioning: false,
      rented: false,
      closet: false
    })
  }, [])

  const updateUrlParams = useCallback(() => {
    const params = new URLSearchParams()

    contract && params.set('c', contract.toLowerCase())
    tipology && params.set('t', tipology.toLowerCase())

    if (price && typeof price === 'object') {
      const fromPrice = price.from || ''
      const toPrice = price.to || ''
      fromPrice && params.set('pmin', fromPrice)
      toPrice && params.set('pmax', toPrice)
    }

    if (size && typeof size === 'object') {
      const fromSize = size.from || ''
      const toSize = size.to || ''
      fromSize && params.set('smin', fromSize)
      toSize && params.set('smax', toSize)
    }

    if (rooms && typeof rooms === 'object') {
      const fromRooms = rooms.from || ''
      const toRooms = rooms.to || ''
      fromRooms && params.set('lmin', fromRooms)
      toRooms && params.set('lmax', toRooms)
    }

    bathrooms && params.set('b', bathrooms)

    if (floor.length > 0) {
      params.set('pi', floor.join(','))
    }

    if (extras && typeof extras === 'object') {
      const selectedExtras = Object.entries(extras)
        .filter(([_, value]) => value)
        .map(([key, _]) => key)

      selectedExtras.length > 0 && params.set('extras', selectedExtras.join(','))
    }

    navigate(`?${params.toString()}`, { replace: true })
  }, [contract, tipology, price, size, rooms, bathrooms, floor, extras, navigate])

  const initializeFiltersFromUrl = useCallback(() => {
    const params = queryStringToObject(location.search)

    const c = params.c || ''
    const t = params.t || ''
    const pmin = params.pmin || ''
    const pmax = params.pmax || ''
    const smin = params.smin || ''
    const smax = params.smax || ''
    const lmin = params.lmin || ''
    const lmax = params.lmax || ''
    const b = params.b || ''
    const pi = params.pi ? params.pi.split(',').map(floor => floor.trim()) : []
    const extrasString = params.extras || ''

    setContract(c.charAt(0).toUpperCase() + c.slice(1))
    setTipology(t.charAt(0).toUpperCase() + t.slice(1))
    setPrice({ from: pmin, to: pmax })
    setSize({ from: smin, to: smax })
    setRooms({ from: lmin, to: lmax })
    setBathrooms(b)
    setFloor(pi)
    setExtras(parseBooleanExtras(extrasString))
  }, [location.search])

  useEffect(() => {
    if (initializingFromUrl) {
      setInitializingFromUrl(false)
    } else {
      updateUrlParams()
    }
  }, [initializingFromUrl, updateUrlParams])

  useEffect(() => {
    initializeFiltersFromUrl()
  }, [initializeFiltersFromUrl])

  return (
    <FiltersContext.Provider
      value={{
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
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
