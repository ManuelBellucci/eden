import { useState, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { FiltersProvider } from './contexts/FiltersContext'
import ScrollToTop from './helpers/scrollToTop'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Lazy load the route components
const Home = lazy(() => import('./pages/home/Home'))
const Immobili = lazy(() => import('./pages/immobili/Immobili'))
const SingleImmobile = lazy(() => import('./pages/immobili/SingleImmobile'))
const About = lazy(() => import('./pages/about/About'))
const Contatti = lazy(() => import('./pages/contatti/Contatti'))
const LavoraConNoi = lazy(() => import('./pages/lavoraConNoi/LavoraConNoi'))
const Page404 = lazy(() => import('./pages/404/Page404'))
const Terms = lazy(() => import('./pages/terms/Terms'))
const Informativa = lazy(() => import('./pages/informativa/Informativa'))

function App () {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  return (
    <div className='relative bg-primary-950'>
      <BrowserRouter>
        <ScrollToTop />
        <FiltersProvider>
          {isNavbarVisible && <Navbar />}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact index path='/' element={<Home />} />
              <Route exact path='/immobili' element={<Immobili />} />
              <Route exact path='/immobili/:id' element={<SingleImmobile setIsNavbarVisible={setIsNavbarVisible} />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/contatti' element={<Contatti />} />
              <Route exact path='/lavoro' element={<LavoraConNoi />} />
              <Route exact path='/404' element={<Page404 />} />
              <Route exact path='/terms' element={<Terms />} />
              <Route exact path='/informativa' element={<Informativa />} />
            </Routes>
          </Suspense>
          <Footer />
        </FiltersProvider>
      </BrowserRouter>
      <SpeedInsights />
    </div>
  )
}

export default App
