import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { FiltersProvider } from './contexts/FiltersContext'
import Home from './pages/home/Home'
import Immobili from './pages/immobili/Immobili'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className='relative'>
      <BrowserRouter>
        <FiltersProvider>
          <Navbar />
          <Routes>
            <Route exact index path='/' element={<Home />} />
            <Route exact path='/immobili' element={<Immobili />} />
          </Routes>
          <Footer />
        </FiltersProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
