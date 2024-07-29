import { useState, useEffect } from 'react'
import ProcessStep from './ProcessStep'

const HowItWorks = ({ processSteps }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [visibleSteps, setVisibleSteps] = useState([])

  useEffect(() => {
    if (visibleSteps.length > 0) {
      setActiveStep(visibleSteps[0])
    }
  }, [visibleSteps])

  return (
    <div className='m-14 mb-48 pt-24'>
      <h2 className='text-center text-balance mb-4 text-3xl font-extrabold leading-none text-primary-50 lg:text-4xl'>
        Come funziona?{' '}
        <span className='text-primary-500'>acquisto e vendita</span> di immobili
      </h2>
      <p className='text-center text-balance text-lg font-normal mx-auto max-w-xl text-primary-50/75 lg:text-2xl mb-14'>
        Scopri come funziona il nostro servizio di acquisto e vendita di immobili.
        Siamo specializzati in vendite e affitti di immobili a Bologna e
        provincia.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
        <div className='grid grid-rows-3'>
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.title}
              index={index}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              visibleSteps={visibleSteps}
              setVisibleSteps={setVisibleSteps}
              {...step}
            />
          ))}
        </div>
        <div className='md:flex md:items-center'>
          <img
            loading='lazy'
            src='/howitworks.webp'
            alt='Image'
            className='rounded-lg object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
