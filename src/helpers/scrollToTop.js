import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Componente per scorrere automaticamente all'inizio della pagina quando cambia l'URL
const ScrollToTop = () => {
  const { pathname } = useLocation() // Estrae il pathname corrente

  useEffect(() => {
    window.scrollTo(0, 0) // Scorri alla parte superiore della pagina
  }, [pathname]) // Esegui l'effetto ogni volta che cambia il pathname

  return null // Non rende nulla
}

export default ScrollToTop
