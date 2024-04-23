import PhoneIcon from './PhoneIcon'
import CallToAction from '../commons/CallToAction'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'
const Navbar = () => {
    return (
        <nav className='absolute w-full z-10 border-b border-gray-200/50'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Logo src='https://th.bing.com/th?id=OIP.8vrST__G8_TvsLBvayhxUAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' title='Eden House' />
                <div className='flex md:order-2 gap-4 rtl:space-x-reverse items-center'>
                    <PhoneIcon numeroTelefonoAgenzia={3517404147} />
                    <CallToAction text='Call to Action' />
                    <HamburgerMenu />
                </div>
                <div className='items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1' id='navbar-cta'>
                    <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
                        <li>
                            <a href='/' className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700' aria-current='page'>Home</a>
                        </li>
                        <li>
                            <a href='/' className='block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700'>Listings</a>
                        </li>
                        <li>
                            <a href='/' className='block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700'>Members</a>
                        </li>
                        <li>
                            <a href='/' className='block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700'>Blog</a>
                        </li>
                        <li>
                            <a href='/' className='block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700'>Pages</a>
                        </li>
                        <li>
                            <a href='/' className='block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}






export default Navbar