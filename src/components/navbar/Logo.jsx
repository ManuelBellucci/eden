import { Link } from 'react-router-dom'

const Logo = ({ src }) => {
  return (
    <Link to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
      <img
        loading='lazy'
        src={src}
        className='h-10 md:h-12 lg:h-16'
        alt='Eden House Logo'
      />
    </Link>
  )
}

export default Logo
