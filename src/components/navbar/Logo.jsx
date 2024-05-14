const Logo = ({ src, title }) => {
  return (
    <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
      <img
        src={src}
        className='h-14 md:h-10 lg:h-20'
        alt='Eden House Logo'
      />
      <span className='self-center text-2xl lg:text-3xl font-semibold whitespace-nowrap'>{title}</span>
    </a>
  )
}

export default Logo
