import { useState, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { FiltersProvider } from './contexts/FiltersContext'
import ScrollToTop from './helpers/scrollToTop'

// Lazy load the route components
const Home = lazy(() => import('./pages/home/Home'))
const Immobili = lazy(() => import('./pages/immobili/Immobili'))
const SingleImmobile = lazy(() => import('./pages/immobili/SingleImmobile'))
const About = lazy(() => import('./pages/about/About'))
const Contatti = lazy(() => import('./pages/contatti/Contatti'))
const LavoraConNoi = lazy(() => import('./pages/lavoraConNoi/LavoraConNoi'))

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
              <Route
                exact path='/404' element={
                  <div className='text-center mt-20'>
                    <h1 className='text-3xl font-bold'>404</h1>
                    <p>Page not found</p>
                  </div>
              }
              />
            </Routes>
          </Suspense>
          <Footer />
        </FiltersProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
