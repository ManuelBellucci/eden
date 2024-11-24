import { useEffect, useRef, useState } from 'react'

// Componente che rappresenta un singolo passo del processo
const ProcessStep = ({ title, description, src, index, activeStep, setActiveStep, visibleSteps, setVisibleSteps }) => {
  const stepRef = useRef() // Riferimento per il passo corrente
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024) // Stato per gestire la visualizzazione mobile

  // Aggiorna isMobile al resize della finestra
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Osservatore per gestire la visibilità dei passi su mobile
  useEffect(() => {
    if (isMobile) {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => [...new Set([...prev, index])]) // Aggiunge il passo all'elenco dei passi visibili
            } else {
              setVisibleSteps((prev) => prev.filter((i) => i !== index)) // Rimuove il passo dall'elenco se non è visibile
            }
          })
        },
        { threshold: 0.5 } // Trigger per la visibilità
      )

      if (stepRef.current) {
        observer.observe(stepRef.current) // Inizia a osservare il passo
      }

      return () => {
        if (stepRef.current) {
          observer.unobserve(stepRef.current) // Ferma l'osservazione del passo
        }
      }
    }
  }, [index, setVisibleSteps, isMobile])

  const handleMouseEnter = () => {
    if (!isMobile) {
      setActiveStep(index) // Imposta il passo attivo su hover, solo su desktop
    }
  }

  const isActive = activeStep === index // Controllo se il passo è attivo

  return (
    <div
      ref={stepRef} // Assegna il riferimento
      onMouseEnter={handleMouseEnter} // Gestisce l'hover per desktop
      className={`flex flex-col justify-center border-l-4 p-8 ${isActive ? 'border-primary-500 bg-primary-900' : 'border-primary-50'
        } transition-all ease-in rounded-e-lg group`}
    >
      <div className='text-center'>
        <img loading='lazy' className='h-14 w-14' src={src} alt={title} />
      </div>
      <h2
        className={`text-xl md:text-2xl lg:text-3xl   mt-2 ${isActive ? 'text-primary-500' : 'text-primary-50'
          }`}
      >
        {title}
      </h2>
      <p className='font-sans text-lg md:text-xl lg:text-2xl text-primary-50 mt-1'>
        {description}
      </p>
    </div>
  )
}

export default ProcessStep
