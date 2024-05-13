const HeroBackground = ({ children, backgroundImage, backgroundPosition = 'center 25%' }) => {
  return (
    <div
      className='h-screen flex justify-center items-center relative bg-cover'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition
      }}
    >
      {children}
    </div>
  )
}

export default HeroBackground
