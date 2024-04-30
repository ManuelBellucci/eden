import CallToAction from '../../commons/CallToAction'

const Banner = () => {
  return (
    <div
      className='h-full mt-32' style={{
        backgroundImage: 'url(https://www.travelemiliaromagna.it/wp-content/uploads/2021/06/01-Bologna-Piazza-Maggiore-Ph.-@bolognacasamia.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 15%'
      }}
    >
      <div className='p-8 md:p-32 flex flex-col items-center text-center gap-6 justify-center'>
        <h3 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl'>Scopri la casa dove amerai vivere.</h3>
        <p className='text-md md:text-lg lg:text-xl'>Lorem ipsum dolor sit amet.</p>
        <CallToAction
          href='/immobili'
          text='Vedi le proprietà'
          anchor
        />
      </div>
    </div>
  )
}

export default Banner
