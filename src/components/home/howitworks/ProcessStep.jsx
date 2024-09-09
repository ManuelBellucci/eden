import { useEffect, useRef, useState } from 'react'

const ProcessStep = ({ title, description, src, index, activeStep, setActiveStep, visibleSteps, setVisibleSteps }) => {
  const stepRef = useRef()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => [...new Set([...prev, index])])
            } else {
              setVisibleSteps((prev) => prev.filter((i) => i !== index))
            }
          })
        },
        { threshold: 0.5 }
      )

      if (stepRef.current) {
        observer.observe(stepRef.current)
      }

      return () => {
        if (stepRef.current) {
          observer.unobserve(stepRef.current)
        }
      }
    }
  }, [index, setVisibleSteps, isMobile])

  const handleMouseEnter = () => {
    if (!isMobile) {
      setActiveStep(index)
    }
  }

  const isActive = activeStep === index

  return (
    <div
      ref={stepRef}
      onMouseEnter={handleMouseEnter}
      className={`flex flex-col justify-center border-l-4 p-8 ${
        isActive ? 'border-primary-500 bg-primary-900' : 'border-primary-50'
      } transition-all ease-in rounded-e-lg group`}
    >
      <div className='text-center'>
        <img loading='lazy' className='h-14 w-14' src={src} alt={title} />
      </div>
      <h2
        className={`text-xl md:text-2xl lg:text-3xl font-semibold mt-2 ${
          isActive ? 'text-primary-500' : 'text-primary-50'
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
