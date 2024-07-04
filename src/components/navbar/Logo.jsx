const Logo = ({ src }) => {
  return (
    <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
      <img
        loading='lazy'
        src={src}
        className='h-10 lg:h-12'
        alt='Eden House Logo'
      />
    </a>
  )
}

export default Logo
