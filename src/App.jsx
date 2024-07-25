import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { FiltersProvider } from './contexts/FiltersContext'
import Home from './pages/home/Home'
import Immobili from './pages/immobili/Immobili'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleImmobile from './pages/immobili/SingleImmobile'
import ScrollToTop from './helpers/scrollToTop'
import { useState } from 'react'
import About from './pages/about/About'

function App () {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  return (
    <div className='relative bg-primary-950'>
      <BrowserRouter>
        <ScrollToTop />
        <FiltersProvider>
          {isNavbarVisible && <Navbar />}
          <Routes>
            <Route exact index path='/' element={<Home />} />
            <Route exact path='/immobili' element={<Immobili />} />
            <Route exact path='/immobili/:id' element={<SingleImmobile setIsNavbarVisible={setIsNavbarVisible} />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contatti' element={<Contatti />} />
          </Routes>
          <Footer />
        </FiltersProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
