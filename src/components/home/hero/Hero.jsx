import GradientHeading from '../../commons/GradientHeading'
import HeroBackground from './HeroBackground'
// import PopUp from '../../commons/PopUp'
// import Browser from "./browser/Browser";

const Hero = () => {
  return (
    <HeroBackground backgroundPosition='25%' backgroundImage='https://static.bolognawelcome.com/immagini/8d/b5/64/bc/20200311171337.jpg'>
      <div className='flex flex-col items-center text-center gap-6 mx-8'>
        <div className='mx-auto max-w-2xl py-10 sm:py-12 lg:py-14'>

          {/* <div className='mb-4 flex justify-center'>
            <PopUp
              text='Cerchi lavoro? Stiamo assumendo in diverse mansioni!'
              readMore='Scopri le posizioni aperte.'
              color='primary-100'
              href='#'
            />
          </div> */}
          <GradientHeading
            textOne='La realtà immobiliare'
            gradientPhrase='numero 1'
            paragraphSizeClasses='text-lg md:text-xl lg:text-2xl text-balance'
            textTwo='per vendere, comprare e affittare casa.'
            paragraph='Con noi troverai la casa dei tuoi sogni, in pochi click. Siamo specializzati in vendite e affitti di immobili a Bologna e provincia.'
            gradientFrom='rgba(81,247,246,1) 40%'
            gradientVia='rgba(0,140,149,1) 85%'
            gradientTo='rgba(0,44,51,1) 100%'
          />
        </div>
        {/* <Browser /> */}
      </div>
    </HeroBackground>
  )
}

export default Hero
