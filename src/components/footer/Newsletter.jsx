import CallToAction from '../commons/CallToAction'

const InfoBlock = ({ iconSrc, title, description }) => (
  <div className='flex flex-col items-start'>
    <div className='rounded-lg bg-white/5 p-2 ring-1 ring-white/10'>
      <div className='h-6 w-6' aria-hidden='true'>
        <img src={iconSrc} alt={`${title} icon`} />
      </div>
    </div>
    <dt className='mt-4 font-semibold text-white'>{title}</dt>
    <dd className='mt-2 leading-7 text-gray-400'>{description}</dd>
  </div>
)
const NewsletterForm = () => {
  return (
    <form className='mt-6 flex max-w-md gap-x-4'>
      <label htmlFor='email-address' className='sr-only'>
        Email
      </label>
      <input
        id='email-address'
        name='email'
        type='email'
        autoComplete='email'
        required
        placeholder='La tua migliore email'
        className='min-w-0 placeholder:text-primary-300 flex-auto rounded-lg border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6'
      />
      <CallToAction
        asSubmit
        text='Iscriviti'
        rounded='md'
        className='flex-none bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500'
      />
    </form>
  )
}
const infoBlocks = [
  {
    iconSrc: '/envelope.webp',
    title: 'Articoli nuovi ogni settimana.',
    description: 'Ci impegniamo a studiare il mercato e proporre posta di qualità, per tenerti sempre aggiornato. Ogni settimana inviamo diversi nuovi articoli informativi e di interesse.'
  },
  {
    iconSrc: '/spam.webp',
    title: 'No spam',
    description: 'Promettiamo di non inviarti spam. Solo contenuti di qualità, informativi e di interesse. Se non ti piace, puoi cancellarti in qualsiasi momento. Nessuna domanda. Nessun problema. Nessun rischio.'
  }
]

const Newsletter = () => {
  return (
    <div className='p-14'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid max-w-2xl grid-cols-1 gap-y-16 lg:max-w-none lg:grid-cols-2'>
          <div className='max-w-xl lg:max-w-lg'>
            <h2 className='text-3xl font-bold tracking-tight text-primary-300 sm:text-4xl'>Iscriviti alla Nostra Newsletter.</h2>
            <p className='mt-4 text-lg leading-8 text-primary-100'>
              Informati sulle ultime novità e promozioni, immobili nuovi, notizie, agevolazioni e molte altre situazioni di interesse, gratuitamente. Non invieremo spam, promesso!
            </p>
            <NewsletterForm />
          </div>
          <dl className='grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 lg:pt-2'>
            {infoBlocks.map((block, index) => (
              <InfoBlock key={index} {...block} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
