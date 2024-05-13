import CallToAction from '../../commons/CallToAction'

const Banner = ({ bgImage, title, description, buttonText, buttonLink }) => {
  return (
    <div
      className='h-full mt-32 bg-cover bg-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='p-8 md:p-32 flex flex-col items-center text-center gap-6 justify-center'>
        <h3 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl'>{title}</h3>
        <p className='text-md md:text-lg lg:text-xl'>{description}</p>
        <CallToAction
          href={buttonLink}
          text={buttonText}
          anchor
        />
      </div>
    </div>
  )
}

export default Banner
