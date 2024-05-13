import StatBlock from './StatBlock'

const Stats = ({ statsData }) => (
  <div className='bg-white m-14 pt-24'>
    <h1 className='text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-primary-900 md:text-2xl lg:text-3xl'>
      Professionalità <span className='underline underline-offset-4 decoration-8 decoration-primary-400'>dimostrata</span> dopo anni di esperienza e soddisfazione dei nostri clienti
    </h1>
    <p className='text-center text-md font-normal mx-auto max-w-xl text-primary-500 lg:text-lg mb-14'>
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
