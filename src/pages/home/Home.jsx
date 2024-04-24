import FeaturedCarousel from "../../components/home/featuredcarousel/FeaturedCarousel"
import Hero from "../../components/home/hero/Hero"
import Stats from "../../components/home/stats/Stats"
import Tipologie from "../../components/home/tipologie/Tipologie"

const Home = () => {
    return (
        <>
            <Hero />
            <Tipologie />
            <Stats />
            <FeaturedCarousel />
        </>
    )

}

export default Home