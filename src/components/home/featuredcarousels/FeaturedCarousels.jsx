import Tag from "../../commons/Tag"
import { SingleCarousel } from "./SingleCarousel"

const FeaturedCarousels = () => {
    return (
        <div className="m-14 pt-24">
            <h1 className="text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-primary-900 md:text-2xl lg:text-3xl">Lorem ipsum <span className="underline underline-offset-4 decoration-8 decoration-primary-400">dolor asit met</span> consectetur adipisicing elit
            </h1>
            <p className="text-center text-md font-normal mx-auto max-w-xl text-primary-500 lg:text-lg mb-14">Lorem ipsum dolor sit amet consectetur adipisicing.</p>

            <div className="flex gap-10 justify-center max-w-7xl mx-auto mt-14">
                {/* Single card */}
                <div className="w-1/3">
                    <Tag
                        text="Libero subito"
                        color="bg-primary-600"
                    />
                    <SingleCarousel />
                </div>
                {/* Single card */}
                <div className="w-1/3">
                    <Tag
                        text="Nuova costruzione"
                        color="bg-primary-600"
                    />
                    <SingleCarousel />
                </div>
                {/* Single card */}
                <div className="w-1/3">
                    <Tag
                        text="In vendita"
                        color="bg-primary-600"
                    />
                    <SingleCarousel />
                </div>
            </div>
        </div>
    )
}

export default FeaturedCarousels
