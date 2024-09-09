import { useEffect, useState, useRef } from 'react'

const StatBlock = ({ icon, number, description }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)
  const ref = useRef()

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      let start = 0
      const end = number
      if (start === end) return

      const totalDuration = 800
      const incrementTime = (totalDuration / end) * 5

      const timer = setInterval(() => {
        start += 2
        setCount((prev) => (prev + 2 > end ? end : prev + 2))

        if (start >= end) clearInterval(timer)
      }, incrementTime)
    }
  }, [isVisible, number])

  return (
    <div ref={ref} className='flex flex-col gap-y-2 bg-primary-500 py-8 px-12 justify-center rounded-lg'>
      <dl className='flex flex-col items-center'>
        <dd>
          <img loading='lazy' className='h-10 w-10 mb-4' src={icon} alt='icon' />
        </dd>
        <dd className='font-bold text-primary-50 text-6xl'>{count}</dd>
        <dt className='font-serif text-2xl leading-7 text-primary-950'>{description}</dt>
      </dl>
    </div>
  )
}

export default StatBlock
