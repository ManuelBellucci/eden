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
          <TipologieCard title='Monolocali e bilocali' subtitle='18 proprietà' />
          <TipologieCard title='Trilocali' subtitle='5 proprietà' />
        </div>
        <div className='flex flex-col md:flex-row gap-6'>
          <TipologieCard title='Quadrilocali' subtitle='11 proprietà' />
          <TipologieCard title='Cinque e più locali' subtitle='8 proprietà' />
        </div>
        <div>
          <TipologieCard title='Attici, ville e villini' subtitle='3 proprietà' />
        </div>

      </div>
    </div>
  )
}

export default Tipologie
