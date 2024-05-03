import PhoneIcon from './PhoneIcon'
import CallToAction from '../commons/CallToAction'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'
const Navbar = () => {
  
  return (
    <nav className='absolute w-full z-10 border-b border-primary-200/50'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Logo src='/logotemp.png' title='Eden House' />
        <div className='flex md:order-2 gap-4 rtl:space-x-reverse items-center'>
         {/* <PhoneIcon numeroTelefonoAgenzia={3517404147} /> */}
          <CallToAction
            anchor
            href='https://www.youtube.com/'
            text='Call to Action'
            size='lg'
          />
          <HamburgerMenu />
        </div>
        <div className='items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1' id='navbar-cta'>
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
            <li>
              <a href='/' className='block transition-all py-2 px-3 md:p-0 md:text-primary-100' aria-current='page'>Home</a>
            </li>
            <li>
              <a href='/' className='block transition-all py-2 px-3 md:p-0 md:hover:text-primary-100'>Listings</a>
            </li>
            <li>
              <a href='/' className='block transition-all py-2 px-3 md:p-0 md:hover:text-primary-100'>Members</a>
            </li>
            <li>
              <a href='/' className='block transition-all py-2 px-3 md:p-0 md:hover:text-primary-100'>Blog</a>
            </li>
            <li>
              <a href='/' className='block transition-all py-2 px-3 md:p-0 md:hover:text-primary-100'>Pages</a>
            </li>
            <li>
              <a href='/' className='block transition-all py-2 px-3 md:p-0 md:hover:text-primary-100'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
