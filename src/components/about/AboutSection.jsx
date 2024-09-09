const AboutSection = ({ title, text, body }) => {
  return (
    <li className='mb-10 ms-4'>
      <div className='absolute w-3 h-3 bg-primary-500 rounded-full mt-3 -start-2 border-2 border-primary-50' />
      <time className='mb-1 text-xl md:text-2xl lg:text-3xl font-bold leading-none text-primary-500 uppercase'>
        {title}
      </time>
      <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-primary-50'>
        {text}
      </h3>
      <p className='font-sans text-base md:text-lg lg:text-xl font-normal text-primary-50/75'>
        {body}
      </p>
    </li>
  )
}

export default AboutSection
