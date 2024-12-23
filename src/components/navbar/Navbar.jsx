import { Link, useLocation } from 'react-router-dom'
// import CallToAction from '../commons/CallToAction'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'
import { useState } from 'react'

// Componente per la navigazione del sito
const Navbar = () => {
  // Ottieni la posizione corrente
  const location = useLocation()
  // Stato per gestire l'apertura e la chiusura del menu
  const [menuOpen, setMenuOpen] = useState(false)

  // Elementi della navigazione
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/immobili', label: 'Immobili' },
    { path: '/about', label: 'Chi siamo?' },
    // { path: '/blog', label: 'Blog' },
    // { path: '/scaricabili', label: 'Le guide' },
    { path: '/contatti', label: 'Contatti' }
  ]

  // Funzione per alternare l'apertura e la chiusura del menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Funzione per chiudere il menu
  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav id='nav' className='sticky top-0 bg-primary-950 w-full z-[51] border-b border-primary-200'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
        <Logo src='/edenlogoandtitle.svg' />
        <div className='flex xl:order-2 gap-4 rtl:space-x-reverse items-center relative'>
          {/* <CallToAction
            anchor
            href='https://eden-landing-page.vercel.app/'
            text='Valutare casa'
            size='lg'
            rounded='xl'
            className='!bg-secondary-500 hover:!bg-primary-600 active:!bg-primary-700 !text-primary-50'
          /> */}
          <HamburgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className={`items-center justify-between w-full xl:flex xl:w-auto xl:order-1 ${menuOpen ? 'block' : 'hidden'}`} id='navbar-cta'>
          <ul className='flex flex-col items-center justify-center xl:flex-row absolute top-0 h-screen left-0 w-screen xl:w-auto xl:relative xl:h-auto p-4 bg-primary-950 text-primary-50   text-6xl xl:text-xl xl:bg-transparent rounded-lg xl:space-x-8 rtl:space-x-reverse'>
            {navItems.map(item => (
              <li key={item.path} onClick={closeMenu}>
                <Link
                  to={item.path}
                  className={`block transition-all py-2 px-3 ${location.pathname === item.path ? 'text-primary-100' : 'text-primary-500'} hover:text-primary-100`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
