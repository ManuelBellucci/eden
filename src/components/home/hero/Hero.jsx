import HeroBackground from "./HeroBackground"
import Browser from "./browser/Browser"

const Hero = () => {
    return (
        <HeroBackground>
            <div className="flex flex-col items-center text-center gap-6 mx-8">
                <div className="mx-auto max-w-2xl py-10 sm:py-12 lg:py-14">
                    <div className="hidden mb-4 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 hover:text-gray-100 ring-gray-300 hover:ring-gray-100 transition-all">
                            Announcing our next round of funding.
                            <a href="#" className="font-semibold text-indigo-600/50 hover:text-indigo-600 transition-all">
                                <span className="absolute inset-0" aria-hidden="true" />
                                {' '} Read more <span aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span className="text-blue-600 dark:text-blue-500">the world's #1</span> CRM.</h1>
                    <p className="text-lg font-medium text-gray-100 lg:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <Browser />
            </div>
        </HeroBackground>
    )
}

export default Hero