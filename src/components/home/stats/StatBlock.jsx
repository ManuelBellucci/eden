import { useEffect, useState, useRef } from 'react'

// Componente per visualizzare una statistica
const StatBlock = ({ icon, number, description }) => {
  const [isVisible, setIsVisible] = useState(false) // Stato per controllare la visibilità
  const [count, setCount] = useState(0) // Contatore per la statistica
  const ref = useRef() // Riferimento per il blocco statistico

  // Osservatore per gestire la visibilità della statistica
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true) // Imposta la statistica come visibile
            observer.unobserve(entry.target) // Ferma l'osservazione
          }
        })
      },
      { threshold: 0.1 } // Trigger per la visibilità
    )

    if (ref.current) {
      observer.observe(ref.current) // Inizia a osservare il blocco statistico
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current) // Ferma l'osservazione del blocco
      }
    }
  }, [])

  // Incremento del contatore quando la statistica è visibile
  useEffect(() => {
    if (isVisible) {
      let start = 0
      const end = number // Valore finale per il contatore
      if (start === end) return

      const totalDuration = 800 // Durata totale dell'animazione
      const incrementTime = (totalDuration / end) * 5 // Tempo di incremento

      const timer = setInterval(() => {
        start += 2 // Incremento del contatore
        setCount((prev) => (prev + 2 > end ? end : prev + 2)) // Aggiorna il contatore

        if (start >= end) clearInterval(timer) // Ferma l'incremento se raggiunto il valore finale
      }, incrementTime)
    }
  }, [isVisible, number])

  return (
    <div ref={ref} className='flex flex-col gap-y-2 bg-primary-500 py-8 px-12 justify-center rounded-lg'>
      <dl className='flex flex-col items-center'>
        <dd>
          <img loading='lazy' className='h-10 w-10 mb-4' src={icon} alt='icon' />
        </dd>
        <dd className='  text-primary-50 text-6xl'>{count}</dd>
        <dt className='font-sans text-2xl leading-7 text-primary-950'>{description}</dt>
      </dl>
    </div>
  )
}

export default StatBlock
