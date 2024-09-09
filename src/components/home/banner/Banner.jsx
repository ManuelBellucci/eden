import CallToAction from '../../commons/CallToAction'

const Banner = ({ bgImage, title, description, buttonText, buttonLink }) => {
  return (
    <div
      className='h-full mt-32 bg-cover bg-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='p-32 flex flex-col items-center text-center gap-6 justify-center'>
        <h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold max-w-2xl text-primary-950'>{title}</h2>
        <p className='font-serif text-2xl md:text-3xl lg:text-4xl text-primary-950'>{description}</p>
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
