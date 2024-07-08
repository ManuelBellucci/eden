import CallToAction from '../../commons/CallToAction'

const Banner = ({ bgImage, title, description, buttonText, buttonLink }) => {
  return (
    <div
      className='h-full mt-32 bg-cover bg-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='p-32 flex flex-col items-center text-center gap-6 justify-center'>
        <h3 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold max-w-2xl'>{title}</h3>
        <p className='text-xl md:text-2xl lg:text-3xl'>{description}</p>
        <CallToAction
          href={buttonLink}
          text={buttonText}
          anchor
          size='xl'
          rounded='lg'
          className='!bg-primary-500 hover:!bg-primary-600 active:!bg-primary-700 !text-primary-50'
        />
      </div>
    </div>
  )
}

export default Banner
