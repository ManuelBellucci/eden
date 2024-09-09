import StatBlock from './StatBlock'

const Stats = ({ statsData }) => (
  <div className='bg-primary-950 m-14 pt-24'>
    <h2 className='text-center text-balance mb-4 text-3xl font-extrabold leading-none text-primary-50 lg:text-4xl'>
      <span className='text-primary-500'>Professionalità dimostrata</span> dopo
      anni di esperienza e soddisfazione dei nostri clienti
    </h2>
    <p className='font-serif text-center text-balance text-lg font-normal mx-auto max-w-xl text-primary-50/75 lg:text-2xl mb-14'>
      Siamo orgogliosi di aver soddisfatto le esigenze di tanti clienti, grazie
      alla nostra professionalità e competenza nel settore immobiliare.
    </p>
    <div className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
      {statsData.map((stat) => (
        <StatBlock key={stat.description} {...stat} />
      ))}
    </div>
  </div>
)

export default Stats
