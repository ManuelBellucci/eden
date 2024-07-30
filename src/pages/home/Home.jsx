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
      <div className='lg:mx-14 bg-primary-950'>
        <Tipologie
          tipologieData={[
            { title: 'Per single', subtitle: 'Piccoli e facili da gestire', href: '/immobili?t=appartamenti&lmin=1&lmax=2', imgSrc: './single.webp' },
            { title: 'Per coppie', subtitle: 'L\'inizio della vostra storia', href: '/immobili?t=appartamenti&lmin=2&lmax=3', imgSrc: './coppia.webp' },
            { title: 'Per famiglie', subtitle: 'Qualcuno ha detto bimbi?', href: '/immobili?t=appartamenti&lmin=4', imgSrc: './famiglia.webp' },
            { title: 'Per i nonni', subtitle: 'Basta scale!', href: '/immobili?t=appartamenti&extras=elevator', imgSrc: './nonni.webp' }
          ]}
        />
        <Stats
          statsData={[
            { icon: '/home.webp', number: 75, description: 'appartamenti affidati a noi dalla costituzione della nostra società' },
            { icon: '/deal.svg', number: 68, description: 'appartamenti venduti e rogitati con successo dai nostri agenti immobiliari ' },
            { icon: '/feedback.webp', number: 222, description: 'clienti soddisfatti che ci hanno lasciato una recensione positiva' }
          ]}
        />
        <Featured />
        <HowItWorks
          processSteps={[
            { title: 'Facci sapere le tue esigenze', description: 'Contattaci per farci sapere cosa stai cercando e spiegarci le tue esigenze.', src: '/esigenze.svg' },
            { title: 'Capisci il tuo budget', description: 'Omagiamo per i nostri acquirenti una consulenza di mutuo o di vendita in base alle necessità in modo di darvi a conoscere il budget preciso ed effettivo che avete per l\'acquisto.', src: '/budget.svg' },
            { title: 'Visioniamo l\'immobile', description: 'Dopo aver capito le tue esigenze e il tuo budget, ti mostriamo gli immobili che fanno al caso tuo. Se non trovi quello che cerchi, non preoccuparti, continueremo a cercare per te fino a quando non troveremo la casa dei tuoi sogni.', src: '/visione.svg' }
          ]}
        />
      </div>
      <Banner
        bgImage='/banner.webp'
        title='Scopri la casa dove amerai vivere.'
        description='Non aspettare, il tuo futuro inizia oggi.'
        buttonText='Vedi le proprietà'
        buttonLink='/immobili'
      />
      <div className='lg:mx-14'>
        <WhyWorkWithUs
          benefits={[
            { title: 'Consulenza personalizzata', content: 'Offriamo consulenze su misura per soddisfare le vostre esigenze specifiche, unendo la saggezza del passato con le tecnologie del presente' },
            { title: 'Gestione immobiliare', content: 'Gestiamo le vostre proprietà con cura e attenzione, massimizzando il valore del vostro investimento.' }
          ]}
        />
      </div>
    </>
  )
}

export default Home
