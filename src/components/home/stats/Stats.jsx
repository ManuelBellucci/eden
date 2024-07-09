import StatBlock from './StatBlock'

const Stats = ({ statsData }) => (
  <div className='bg-primary-950 m-14 pt-24'>
    <h1 className='text-center mb-4 text-xl font-extrabold leading-none text-primary-50 md:text-2xl lg:text-4xl'>
      <span className='text-primary-400'>Professionalità dimostrata</span> dopo anni di esperienza e soddisfazione dei nostri clienti
    </h1>
    <p className='text-center text-md md:text-lg font-normal mx-auto max-w-3xl text-primary-50 lg:text-2xl mb-14'>
      Siamo orgogliosi di aver soddisfatto le esigenze di tanti clienti, grazie alla nostra professionalità e competenza nel settore immobiliare.
    </p>
    <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
      {statsData.map(stat => (
        <StatBlock key={stat.description} {...stat} />
      ))}
    </dl>
  </div>
)

export default Stats
