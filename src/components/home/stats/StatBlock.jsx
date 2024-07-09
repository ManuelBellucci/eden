const StatBlock = ({ icon, number, description }) => (
  <div className='flex flex-col gap-y-2 bg-primary-400 py-8 px-12 justify-center rounded-lg'>
    <img loading='lazy' className='h-10 w-10 self-center mb-4' src={icon} alt='icon' />
    <dd className='font-bold text-primary-50 text-6xl'>{number}</dd>
    <dt className='text-2xl leading-7 text-primary-950'>{description}</dt>
  </div>
)

export default StatBlock
