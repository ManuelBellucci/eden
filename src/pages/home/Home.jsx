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
        <Tipologie
          tipologieData={[
            { title: 'Appartamenti per single', subtitle: 'Piccoli e facili da gestire', href: '/immobili?t=appartamenti&lmin=1&lmax=2', imgSrc: './single.webp' },
            { title: 'Appartamenti per coppie', subtitle: 'Perfetti per iniziare il vostro percorso', href: '/immobili?t=appartamenti&lmin=2&lmax=3', imgSrc: './coppia.webp' },
            { title: 'Appartamenti per famiglie', subtitle: 'I bambini crescono, i spazi di casa gli seguono', href: '/immobili?t=appartamenti&lmin=4', imgSrc: './famiglia.webp' },
            { title: 'Appartamenti per i nonni', subtitle: 'Basta scale. Vediamo case con ascensore!', href: '/immobili?t=appartamenti&extras=elevator', imgSrc: './nonni.webp' }
          ]}
        />
        <Stats
          statsData={[
            { icon: '/home.webp', number: 150, description: 'gli appartamenti affidati a noi dalla costituzione della nostra società' },
            { icon: '/deal.webp', number: 138, description: 'gli appartamenti venduti e rogitati' },
            { icon: '/feedback.webp', number: 140, description: 'clienti soddisfatti che ci hanno lasciato una recensione positiva' }
          ]}
        />
        <Featured />
        <HowItWorks
          processSteps={[
            { title: 'Facci sapere le tue esigenze', description: 'Contattaci per farci sapere cosa stai cercando e spiegarci le tue esigenze.' },
            { title: 'Capisci il tuo budget', description: 'Omagiamo per i nostri acquirenti una consulenza di mutuo o di vendita in base alle necessità in modo di darvi a conoscere il budget preciso ed effettivo che avete per l\'acquisto.' },
            { title: 'Visioniamo l\'immobile', description: 'Dopo aver capito le tue esigenze e il tuo budget, ti mostriamo gli immobili che fanno al caso tuo. Se non trovi quello che cerchi, non preoccuparti, continueremo a cercare per te fino a quando non troveremo la casa dei tuoi sogni.' }
          ]}
        />
      </div>
      <Banner
        bgImage='https://www.travelemiliaromagna.it/wp-content/uploads/2021/06/01-Bologna-Piazza-Maggiore-Ph.-@bolognacasamia.jpg'
        title='Scopri la casa dove amerai vivere.'
        description='Lorem ipsum dolor sit amet.'
        buttonText='Vedi le proprietà'
        buttonLink='/immobili'
      />
      <div className='lg:mx-14'>
        <WhyWorkWithUs
          benefits={[
            { title: 'Expertise and Professionalism', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?' },
            { title: 'Tailored Solutions', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?' }
          ]}
        />
      </div>
    </>
  )
}

export default Home
