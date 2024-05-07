import { useLocation } from 'react-router-dom'
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
        { path: '/guide', label: 'Le guide' },
        { path: '/contact', label: 'Contatti' }
    ]

    const isImmobiliPage = location.pathname === '/immobili'


    return (
        <nav className='absolute w-full z-10 border-b border-primary-200/50'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Logo src='/logotemp.png' title='Eden House' />
                <div className='flex xl:order-2 gap-4 rtl:space-x-reverse items-center'>
                    <CallToAction
                        anchor
                        href='https://www.youtube.com/'
                        text='Call to Action'
                        size='lg'
                        rounded='xl'
                    />
                    <HamburgerMenu />
                </div>
                <div className='items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1' id='navbar-cta'>
                    <ul className='flex flex-col items-center justify-center xl:flex-row absolute top-0 h-screen left-0 w-screen xl:w-auto xl:relative xl:h-auto font-medium p-4 bg-white text-6xl xl:text-base xl:bg-transparent rounded-lg xl:space-x-8 rtl:space-x-reverse'>
                        {navItems.map(item => (
                            <li key={item.path}>
                                <a
                                    href={item.path}
                                    className={`block transition-all py-2 px-3 ${
                                        location.pathname === item.path
                                            ? isImmobiliPage
                                                ? 'text-primary-500'
                                                : 'xl:text-primary-100 text-primary-500'
                                            : 'xl:hover:text-primary-100 hover:text-primary-500'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
