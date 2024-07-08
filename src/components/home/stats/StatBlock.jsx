const StatBlock = ({ icon, number, description }) => (
  <div className='flex flex-col gap-y-2 bg-primary-400 py-16 px-12 justify-center rounded-lg'>
    <img loading='lazy' className='h-10 w-10 self-center mb-4' src={icon} alt='icon' />
    <dd className='text-3xl font-bold   text-primary-50 sm:text-5xl'>{number}</dd>
    <dt className='text-lg leading-7 text-primary-50'>{description}</dt>
  </div>
)

export default StatBlock
