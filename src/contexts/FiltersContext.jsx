import { createContext, useState, useEffect, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { queryStringToObject } from '../helpers/queryHelpers'

// Funzione per analizzare una stringa di extras e restituire un oggetto di booleani
const parseBooleanExtras = (extrasString) => {
  // Oggetto per tenere traccia dello stato degli extras
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

  // Se extrasString è presente, la suddivide e aggiorna lo stato di booleanExtras
  if (extrasString) {
    const selectedExtras = extrasString.split(',')
    selectedExtras.forEach((extra) => {
      if (Object.prototype.hasOwnProperty.call(booleanExtras, extra)) {
        booleanExtras[extra] = true // Imposta a true se l'extra è selezionato
      }
    })
  }

  return booleanExtras // Restituisce l'oggetto con lo stato degli extras
}

// Crea un contesto per i filtri
export const FiltersContext = createContext()

// Provider per il contesto dei filtri
export const FiltersProvider = ({ children }) => {
  // Stati per gestire i filtri
  const [initializingFromUrl, setInitializingFromUrl] = useState(true) // Stato per il caricamento iniziale dai parametri URL
  const [contract, setContract] = useState('') // Stato per il tipo di contratto
  const [tipology, setTipology] = useState('') // Stato per la tipologia dell'immobile
  const [price, setPrice] = useState({ from: '', to: '' }) // Stato per il prezzo
  const [size, setSize] = useState({ from: '', to: '' }) // Stato per la dimensione
  const [rooms, setRooms] = useState({ from: '', to: '' }) // Stato per il numero di locali
  const [bathrooms, setBathrooms] = useState('') // Stato per il numero di bagni
  const [floor, setFloor] = useState([]) // Stato per i piani
  const [extras, setExtras] = useState({ // Stato per gli extras
    terrace: false,
    balcony: false,
    elevator: false,
    furnished: false,
    cellar: false,
    airConditioning: false,
    rented: false,
    closet: false
  })

  const navigate = useNavigate() // Hook per la navigazione
  const location = useLocation() // Hook per ottenere l'URL attuale

  // Funzione per ripristinare i filtri
  const cleanFilters = useCallback(() => {
    setContract('')
    setTipology('')
    setPrice({ from: '', to: '' })
    setSize({ from: '', to: '' })
    setRooms({ from: '', to: '' })
    setBathrooms('')
    setFloor([])
    setExtras({ // Ripristina gli extras ai valori predefiniti
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

  // Funzione per aggiornare i parametri dell'URL in base ai filtri correnti
  const updateUrlParams = useCallback(() => {
    const params = new URLSearchParams() // Crea un oggetto URLSearchParams per gestire i parametri dell'URL

    // Aggiunge i filtri come parametri all'URL
    contract && params.set('c', contract.toLowerCase())
    tipology && params.set('t', tipology.toLowerCase())

    if (price && typeof price === 'object') {
      const fromPrice = price.from || ''
      const toPrice = price.to || ''
      fromPrice && params.set('pmin', fromPrice) // Prezzo minimo
      toPrice && params.set('pmax', toPrice) // Prezzo massimo
    }

    if (size && typeof size === 'object') {
      const fromSize = size.from || ''
      const toSize = size.to || ''
      fromSize && params.set('smin', fromSize) // Dimensione minima
      toSize && params.set('smax', toSize) // Dimensione massima
    }

    if (rooms && typeof rooms === 'object') {
      const fromRooms = rooms.from || ''
      const toRooms = rooms.to || ''
      fromRooms && params.set('lmin', fromRooms) // Numero minimo di locali
      toRooms && params.set('lmax', toRooms) // Numero massimo di locali
    }

    bathrooms && params.set('b', bathrooms) // Numero di bagni

    if (floor.length > 0) {
      params.set('pi', floor.join(',')) // Piani selezionati
    }

    if (extras && typeof extras === 'object') {
      const selectedExtras = Object.entries(extras) // Ottiene un array di extras selezionati
        .filter(([_, value]) => value) // Filtra solo quelli impostati a true
        .map(([key, _]) => key) // Estrae solo le chiavi degli extras

      selectedExtras.length > 0 && params.set('extras', selectedExtras.join(',')) // Aggiunge gli extras all'URL
    }

    navigate(`?${params.toString()}`, { replace: true }) // Naviga all'URL aggiornato
  }, [contract, tipology, price, size, rooms, bathrooms, floor, extras, navigate])

  // Funzione per inizializzare i filtri dai parametri URL
  const initializeFiltersFromUrl = useCallback(() => {
    const params = queryStringToObject(location.search) // Converte i parametri dell'URL in un oggetto

    // Estrae i parametri dall'URL
    const c = params.c || ''
    const t = params.t || ''
    const pmin = params.pmin || ''
    const pmax = params.pmax || ''
    const smin = params.smin || ''
    const smax = params.smax || ''
    const lmin = params.lmin || ''
    const lmax = params.lmax || ''
    const b = params.b || ''
    const pi = params.pi ? params.pi.split(',').map(floor => floor.trim()) : [] // Estrae i piani
    const extrasString = params.extras || '' // Estrae gli extras

    // Aggiorna lo stato dei filtri
    setContract(c.charAt(0).toUpperCase() + c.slice(1)) // Imposta il contratto con la prima lettera maiuscola
    setTipology(t.charAt(0).toUpperCase() + t.slice(1)) // Imposta la tipologia con la prima lettera maiuscola
    setPrice({ from: pmin, to: pmax }) // Imposta il prezzo
    setSize({ from: smin, to: smax }) // Imposta la dimensione
    setRooms({ from: lmin, to: lmax }) // Imposta il numero di locali
    setBathrooms(b) // Imposta il numero di bagni
    setFloor(pi) // Imposta i piani
    setExtras(parseBooleanExtras(extrasString)) // Imposta gli extras convertendoli in booleani
  }, [location.search])

  // Effetto per aggiornare i parametri dell'URL quando i filtri cambiano
  useEffect(() => {
    if (initializingFromUrl) {
      setInitializingFromUrl(false) // Dopo il primo caricamento dai parametri URL, cambia lo stato
    } else {
      updateUrlParams() // Aggiorna i parametri dell'URL
    }
  }, [initializingFromUrl, updateUrlParams])

  // Effetto per inizializzare i filtri dai parametri dell'URL
  useEffect(() => {
    initializeFiltersFromUrl() // Chiama la funzione per inizializzare i filtri
  }, [initializeFiltersFromUrl])

  return (
    <FiltersContext.Provider
      value={{
        contract, // Valore per il tipo di contratto
        setContract, // Funzione per aggiornare il contratto
        tipology, // Valore per la tipologia
        setTipology, // Funzione per aggiornare la tipologia
        price, // Valore per il prezzo
        setPrice, // Funzione per aggiornare il prezzo
        size, // Valore per la dimensione
        setSize, // Funzione per aggiornare la dimensione
        rooms, // Valore per il numero di locali
        setRooms, // Funzione per aggiornare il numero di locali
        bathrooms, // Valore per il numero di bagni
        setBathrooms, // Funzione per aggiornare il numero di bagni
        floor, // Valore per i piani
        setFloor, // Funzione per aggiornare i piani
        extras, // Valore per gli extras
        setExtras, // Funzione per aggiornare gli extras
        cleanFilters // Funzione per ripristinare i filtri
      }}
    >
      {children} {/* Renderizza i figli del provider */}
    </FiltersContext.Provider>
  )
}
