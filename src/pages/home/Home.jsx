import Banner from '../../components/home/banner/Banner'
import Featured from '../../components/home/featured/Featured'
import Hero from '../../components/home/hero/Hero'
import HowItWorks from '../../components/home/howitworks/HowItWorks'
import Stats from '../../components/home/stats/Stats'
import Tipologie from '../../components/home/tipologie/Tipologie'
import WhyWorkWithUs from '../../components/home/whyworkwithus/WhyWorkWithUs'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='lg:mx-14'>
        <Tipologie />
        <Stats />
        <Featured sells />
        <Featured rents />
        <HowItWorks />
      </div>
      <Banner />
      <div className='lg:mx-14'>
        <WhyWorkWithUs />
      </div>
    </>
  )
}

export default Home
