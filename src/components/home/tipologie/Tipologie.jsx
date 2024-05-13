import TipologieCard from './TipologieCard'

const Tipologie = () => {
  
  return (
    <div className='h-full m-14'>

      <h1 className='text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-primary-900 md:text-2xl lg:text-3xl'>Dai un'occhiata alle <span className='underline underline-offset-4 decoration-8 decoration-primary-400'>nostre proprietà in vendita</span></h1>
      <p className='text-center text-md font-normal mx-auto max-w-xl text-primary-500 lg:text-lg mb-14'>
        Abbiamo una vasta gamma di proprietà in vendita e in affitto, per soddisfare le esigenze di tutti i nostri clienti.
      </p>

      <div className='flex flex-col items-center xl:flex-row justify-center gap-6 mt-8'>

        <div className='flex flex-col md:flex-row gap-6'>
          <TipologieCard title='Appartamenti per single' subtitle='Piccoli e facili da gestire' href='/immobili?t=appartamenti&lmin=1&lmax=2' />
          <TipologieCard title='Appartamenti per coppie' subtitle='Perfetti per iniziare il vostro percorso' href='/immobili?t=appartamenti&lmin=2&lmax=3' />
        </div>
        <div className='flex flex-col md:flex-row gap-6'>
          <TipologieCard title='Appartamenti per famiglie' subtitle='I bambini crescono, i spazi di casa gli seguono' href='/immobili?t=appartamenti&lmin=4' />
          <TipologieCard title='Appartamenti per i nonni' subtitle='Basta scale. Vediamo case con ascensore!' href='/immobili?t=appartamenti&extras=elevator' />
        </div>
        {/* <div className='flex flex-col md:flex-row gap-6'>
          <TipologieCard title='Cinque e più locali' subtitle='8 proprietà' href='/immobili?t=appartamenti&lmin=5'/>
          <TipologieCard title='Attici' subtitle='3 proprietà'href='/immobili?t=attici' />
        </div> */}

      </div>
    </div>
  )
}

export default Tipologie
