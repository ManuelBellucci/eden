import { Suspense, lazy } from 'react'

// Caricamento dinamico dei componenti per ottimizzare il caricamento della pagina
const Banner = lazy(() => import('../../components/home/banner/Banner'))
const Featured = lazy(() => import('../../components/home/featured/Featured'))
const Hero = lazy(() => import('../../components/home/hero/Hero'))
const HowItWorks = lazy(() => import('../../components/home/howitworks/HowItWorks'))
const Stats = lazy(() => import('../../components/home/stats/Stats'))
const Tipologie = lazy(() => import('../../components/home/tipologie/Tipologie'))
const WhyWorkWithUs = lazy(() => import('../../components/home/whyworkwithus/WhyWorkWithUs'))

// Definizione del componente Home
const Home = () => {
  return (
    <>
      {/* Componente Hero con caricamento sospeso */}
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <div className='lg:mx-14 bg-primary-950'>
        {/* Componente Tipologie con dati specifici */}
        <Suspense fallback={<div>Loading...</div>}>
          <Tipologie
            tipologieData={[
              { title: 'Per single', subtitle: 'Piccoli e facili da gestire', href: '/immobili?t=appartamenti&lmin=1&lmax=2', imgSrc: './single.webp' },
              { title: 'Per coppie', subtitle: 'L\'inizio della vostra storia', href: '/immobili?t=appartamenti&lmin=2&lmax=3', imgSrc: './coppia.webp' },
              { title: 'Per famiglie', subtitle: 'Qualcuno ha detto bimbi?', href: '/immobili?t=appartamenti&lmin=4', imgSrc: './famiglia.webp' },
              { title: 'Per i nonni', subtitle: 'Basta scale!', href: '/immobili?t=appartamenti&extras=elevator', imgSrc: './nonni.webp' }
            ]}
          />
        </Suspense>
        {/* Componente Stats con dati sulle statistiche */}
        <Suspense fallback={<div>Loading...</div>}>
          <Stats
            statsData={[
              { icon: '/home.webp', number: 75, description: 'appartamenti affidati a noi dalla costituzione della nostra società (sett. 2023)' },
              { icon: '/deal.svg', number: 68, description: 'appartamenti venduti e rogitati con successo dai nostri agenti immobiliari ' },
              { icon: '/feedback.webp', number: 222, description: 'clienti soddisfatti che ci hanno lasciato una recensione positiva' }
            ]}
          />
        </Suspense>
        {/* Componente Featured per gli immobili in evidenza */}
        <Suspense fallback={<div>Loading...</div>}>
          <Featured />
        </Suspense>
        {/* Componente HowItWorks che descrive il processo */}
        <Suspense fallback={<div>Loading...</div>}>
          <HowItWorks
            processSteps={[
              { title: 'Facci sapere le tue esigenze', description: 'Contattaci per farci sapere cosa stai cercando e spiegarci le tue esigenze.', src: '/esigenze.svg' },
              { title: 'Capisci il tuo budget', description: 'Omaggiamo per i nostri acquirenti una consulenza di mutuo o di vendita in base alle necessità in modo di darvi a conoscere il budget preciso ed effettivo che avete per l\'acquisto.', src: '/budget.svg' },
              { title: 'Visioniamo l\'immobile', description: 'Dopo aver capito le tue esigenze e il tuo budget, ti mostriamo gli immobili che fanno al caso tuo. Se non trovi quello che cerchi, non preoccuparti, continueremo a cercare per te fino a quando non troveremo la casa dei tuoi sogni.', src: '/visione.svg' }
            ]}
          />
        </Suspense>
      </div>
      {/* Componente Banner per promuovere la scoperta di nuove case */}
      <Suspense fallback={<div>Loading...</div>}>
        <Banner
          bgImage='/banner.webp'
          title='Scopri la casa dove amerai vivere.'
          description='Non aspettare, il tuo futuro inizia oggi.'
          buttonText='Vedi le proprietà'
          buttonLink='/immobili'
        />
      </Suspense>
      <div className='lg:mx-14'>
        {/* Componente WhyWorkWithUs che elenca i vantaggi */}
        <Suspense fallback={<div>Loading...</div>}>
          <WhyWorkWithUs
            benefits={[
              { title: 'Consulenza personalizzata', content: 'Offriamo consulenze su misura per soddisfare le vostre esigenze specifiche, unendo la saggezza del passato con le tecnologie del presente' },
              { title: 'Gestione immobiliare', content: 'Gestiamo le vostre proprietà con cura e attenzione, massimizzando il valore del vostro investimento.' }
            ]}
          />
        </Suspense>
      </div>
    </>
  )
}

export default Home
