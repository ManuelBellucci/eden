import { Link, useLocation } from 'react-router-dom'
import CallToAction from '../commons/CallToAction'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'

const Navbar = () => {
  const location = useLocation()
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/immobili', label: 'Immobili' },
    { path: '/about', label: 'Chi siamo?' },
    { path: '/blog', label: 'Blog' },
    { path: '/scaricabili', label: 'Le guide' },
    { path: '/contatti', label: 'Contatti' }
  ]

  return (
    <nav className='sticky top-0 bg-primary-950 w-full z-[51] border-b border-primary-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Logo src='/edenlogoandtitle.svg' />
        <div className='flex xl:order-2 gap-4 rtl:space-x-reverse items-center relative'>
          <CallToAction
            anchor
            href='https://www.youtube.com/'
            text={window.innerWidth > 1024 ? 'Valuta il tuo immobile' : 'Valutare casa'}
            size='md'
            rounded='xl'
            className='!bg-primary-500 hover:!bg-primary-600 active:!bg-primary-700 !text-primary-50'
          />
          <HamburgerMenu />
        </div>
        <div className='items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1' id='navbar-cta'>
          <ul className='flex flex-col items-center justify-center xl:flex-row absolute top-0 h-screen left-0 w-screen xl:w-auto xl:relative xl:h-auto p-4 bg-primary-950 text-primary-50 font-bold text-6xl xl:text-lg xl:bg-transparent rounded-lg xl:space-x-8 rtl:space-x-reverse'>
            {navItems.map(item => (
              <li key={item.path}>
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
