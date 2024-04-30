import PopUp from '../../commons/PopUp'
import HeroBackground from './HeroBackground'
import Browser from './browser/Browser'

const Hero = () => {
  return (
    <HeroBackground>
      <div className='flex flex-col items-center text-center gap-6 mx-8'>
        <div className='mx-auto max-w-2xl py-10 sm:py-12 lg:py-14'>
          <div className='hidden mb-4 sm:flex sm:justify-center'>
            <PopUp
              text='Cerchi lavoro? Stiamo assumendo in diverse mansioni!'
              readMore='Scopri le posizioni aperte.'
              color='primary-100'
              href='#'
            />
          </div>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-primary-50 md:text-5xl lg:text-6xl'>La realtà immobiliare <span className='text-transparent bg-clip-text bg-gradient-to-b to-primary-500 from-primary-200 via-primary-300'>
            numero 1
          </span> per vendere, comprare e affittare casa.
          </h1>
          <p className='text-lg font-medium text-primary-100 lg:text-xl'>
            Con noi troverai la casa dei tuoi sogni, in pochi click. Siamo specializzati in vendite e affitti di immobili a Bologna e provincia.
          </p>
        </div>
        <Browser />
      </div>
    </HeroBackground>
  )
}

export default Hero
