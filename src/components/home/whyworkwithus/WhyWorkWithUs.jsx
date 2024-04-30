const WhyWorkWithUs = () => {
  return (
    <div className='m-14 mb-48 pt-24'>
      <h1 className='text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-primary-900 md:text-2xl lg:text-3xl'>Perchè dovresti <span className='underline underline-offset-4 decoration-8 decoration-primary-400'>
        lavorare con noi
      </span> per le tue operazioni immobiliari?
      </h1>
      <p className='text-center text-md font-normal mx-auto max-w-xl text-primary-500 lg:text-lg mb-14'>
        Scopri perchè dovresti scegliere noi per le tue operazioni immobiliari. Siamo specializzati in vendite e affitti di immobili a Bologna e provincia.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
        <div className='md:flex md:items-center'>
          <img src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80' alt='Image' className='w-full h-full rounded-lg object-cover xl:min-h-[600px]' />
        </div>
        <div className='flex flex-col gap-10 justify-center'>
          <h3 className='text-3xl font-bold max-w-lg text-balance'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, molestias?</h3>
          <p className='text-xl max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum ipsa iure, ut beatae adipisci.</p>
          <div className='grid grid-cols-2 gap-8'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-xl font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, hic.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?</p>
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='text-xl font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, hic.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?</p>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default WhyWorkWithUs
