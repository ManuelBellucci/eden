import ProcessStep from './ProcessStep'

const HowItWorks = ({ processSteps }) => (
  <div className='m-14 mb-48 pt-24'>
    <h1 className='text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-primary-900 md:text-2xl lg:text-3xl'>
      Come funziona? {' '}
      <span className='underline underline-offset-8 decoration-8 decoration-primary-400'>
        acquisto e vendita
      </span> di immobili
    </h1>
    <p className='text-center text-md font-normal mx-auto max-w-xl text-primary-500 lg:text-lg mb-14'>
      Scopri come funziona il nostro servizio di acquisto e vendita di immobili. Siamo specializzati in vendite e affitti di immobili a Bologna e provincia.
    </p>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
      <div className='grid grid-rows-3'>
        {processSteps.map(step => <ProcessStep key={step.title} {...step} />)}
      </div>
      <div className='md:flex md:items-center'>
        <img loading='lazy' src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80' alt='Image' className='w-full h-full rounded-lg object-cover min-h-80' />
      </div>
    </div>
  </div>
)

export default HowItWorks
