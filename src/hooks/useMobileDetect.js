import { useEffect, useState } from 'react'

// Hook per rilevare se il dispositivo è mobile
const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false) // Stato per rilevare il dispositivo mobile

  // Funzione per aggiornare lo stato mobile
  const updateMobileStatus = () => {
    const userAgent = navigator.userAgent || window.opera
    const isMobileDevice = (/android/i.test(userAgent)) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
    const isMobileWidth = window.innerWidth <= 768 // Controllo della larghezza della finestra
    setIsMobile(isMobileDevice || isMobileWidth) // Imposta lo stato in base ai controlli
  }

  useEffect(() => {
    updateMobileStatus() // Inizializza lo stato mobile
    window.addEventListener('resize', updateMobileStatus) // Aggiungi listener per il ridimensionamento della finestra
    return () => window.removeEventListener('resize', updateMobileStatus) // Cleanup per rimuovere il listener
  }, [])

  return isMobile // Ritorna lo stato mobile
}

export default useMobileDetect
