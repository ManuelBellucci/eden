import GradientHeading from '../../commons/GradientHeading'
import HeroBackground from './HeroBackground'
// import PopUp from '../../commons/PopUp'
// import Browser from "./browser/Browser";

const Hero = () => {
  return (
    <HeroBackground backgroundPosition='25%' backgroundImage='https://res.cloudinary.com/datqybdzt/image/upload/v1722352436/copimnjxryandtfcwumd.webp'>
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
            paragraphSizeClasses='text-2xl text-balance'
            textTwo='per vendere, comprare e affittare casa.'
            paragraph='Con noi troverai la casa dei tuoi sogni, in pochi click. Siamo specializzati in vendite e affitti di immobili a Bologna e provincia.'
            gradientFrom='rgba(87,239,241,1) 0%'
            gradientVia='rgba(3, 201, 217, 1) 35%'
            gradientTo=' rgba(2, 44, 51, 1) 100%'
          />
        </div>
        {/* <Browser /> */}
      </div>
    </HeroBackground>
  )
}

export default Hero
