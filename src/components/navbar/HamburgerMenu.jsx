const HamburgerMenu = () => {
  return (
    <button data-collapse-toggle='navbar-cta' type='button' className='inline-flex items-center w-8 h-8 justify-center text-sm text-black rounded-lg lg:hidden' aria-controls='navbar-cta' aria-expanded='false'>
      <span className='sr-only'>Open main menu</span>
      <svg className='w-5 h-5' aria-hidden='true' viewBox='0 0 17 14'>
        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
      </svg>
    </button>
  )
}

export default HamburgerMenu
