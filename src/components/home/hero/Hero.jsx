import HeroBackground from "./HeroBackground"
import Browser from "./browser/Browser"

const Hero = () => {
    return (
        <HeroBackground>
            <div className="flex flex-col items-center text-center gap-6 mx-8">
                <div className="mx-auto max-w-2xl py-10 sm:py-12 lg:py-14">
                    <div className="hidden mb-4 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-primary-300 ring-1 hover:text-primary-100 ring-primary-300 hover:ring-primary-100 transition-all">
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            <a href="#" className="font-semibold text-primary-800 hover:text-primary-700 transition-all">
                                <span className="absolute inset-0" aria-hidden="true" />
                                {' '} Read more <span aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-primary-50 md:text-5xl lg:text-6xl">Lorem ipsum dolor <span className="text-primary-200">
                        sit amet consectetur 
                        </span> adipisicing elit
                        </h1>
                    <p className="text-lg font-medium text-primary-100 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <Browser />
            </div>
        </HeroBackground>
    )
}

export default Hero