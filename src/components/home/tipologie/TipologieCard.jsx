const TipologieCard = ({ title, subtitle, href, imgSrc }) => {
  return (
    <a href={href} className='relative flex w-full flex-col justify-center overflow-hidden rounded-xl ring-primary-900/5 sm:mx-auto sm:max-w-lg'>
      <div className='group relative m-0 flex h-72 w-full xl:h-96'>
        <img src={imgSrc} alt={title} className='h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110' />
        <div className='absolute bottom-0 left-0 z-20 m-0 p-4'>
          <h2 className='text-2xl font-bold text-white'>{title}</h2>
          <p className='text-sm text-primary-200'>{subtitle}</p>
        </div>
      </div>
    </a>
  )
}

export default TipologieCard
