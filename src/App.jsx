import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Immobili from './pages/immobili/Immobili';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='relative'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact index path='/' element={<Home />} />
          <Route exact path='/immobili' element={<Immobili />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
