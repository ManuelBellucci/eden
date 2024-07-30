const HamburgerMenu = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      aria-label='Open main menu'
      onClick={toggleMenu}
      data-collapse-toggle='navbar-cta'
      type='button'
      className='inline-flex items-center w-8 h-8 z-50 justify-center text-sm text-primary-50 rounded-lg xl:hidden' aria-controls='navbar-cta' aria-expanded={menuOpen}
    >
      <span className='sr-only'>Open main menu</span>
      <svg className='w-5 h-5' aria-hidden='true' viewBox='0 0 17 14'>
        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
      </svg>
    </button>
  )
}

export default HamburgerMenu
