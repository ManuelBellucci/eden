const TipologieCard = ({ title, subtitle, href, imgSrc }) => {
  return (
    <a href={href} className=' flex w-full flex-col justify-center overflow-hidden rounded-lg sm:mx-auto sm:max-w-lg'>
      <div className='group relative m-0 flex h-72 w-full xl:h-96'>
        <img loading='lazy' src={imgSrc} alt={title} className='h-full w-full object-cover object-bottom transition-all duration-300 ease-in-out group-hover:scale-110' />
        <div className='absolute bottom-0 text-center text-balance border-t-2 h-24 flex flex-col items-center justify-center border-black rounded-t-none rounded-lg left-0 z-20 w-full p-2 bg-primary-100'>
          <h2 className='text-md md:text-lg lg:text-xl font-bold text-black'>{title}</h2>
          <p className='text-xs md:text-sm lg:text-base text-black'>{subtitle}</p>
        </div>
      </div>
    </a>
  )
}

export default TipologieCard
