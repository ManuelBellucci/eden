import GradientHeading from "../../commons/GradientHeading"
import PopUp from "../../commons/PopUp"
import HeroBackground from "./HeroBackground"
// import Browser from "./browser/Browser"

const Hero = () => {
    return (
        <HeroBackground>
            <div className="flex flex-col items-center text-center gap-6 mx-8">
                <div className="mx-auto max-w-2xl py-10 sm:py-12 lg:py-14">
                    <div className="hidden mb-4 sm:flex sm:justify-center">
                        <PopUp
                            text='Cerchi lavoro? Stiamo assumendo in diverse mansioni!'
                            readMore='Scopri le posizioni aperte.'
                            color='primary-100'
                            href='#'
                        />
                    </div>
                    <GradientHeading
                        textOne='La realtà immobiliare'
                        gradientPhrase='numero 1'
                        textTwo='per vendere, comprare e affittare casa.'
                        paragraph='Con noi troverai la casa dei tuoi sogni, in pochi click. Siamo specializzati in vendite e affitti di immobili a Bologna e provincia.'
                        gradientFrom="rgba(81,247,246,1) 40%"
                        gradientVia="rgba(0,140,149,1) 85%"
                        gradientTo="rgba(0,44,51,1) 100%"
                    />
                </div>
                {/* <Browser /> */}
            </div> 
        </HeroBackground>
    )
}

export default Hero