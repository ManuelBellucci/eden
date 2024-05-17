import { useEffect, useState } from 'react'

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false)

  const updateMobileStatus = () => {
    const userAgent = navigator.userAgent || window.opera
    const isMobileDevice = (/android/i.test(userAgent)) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
    const isMobileWidth = window.innerWidth <= 768
    setIsMobile(isMobileDevice || isMobileWidth)
  }

  useEffect(() => {
    updateMobileStatus()
    window.addEventListener('resize', updateMobileStatus)
    return () => window.removeEventListener('resize', updateMobileStatus)
  }, [])

  return isMobile
}

export default useMobileDetect
