const Caption = ({ text, name, role }) => {
  return (
    <figure className='max-w-screen-md mx-auto text-center m-4 p-4'>
      <svg className='w-10 h-10 mx-auto mb-3 text-primary-500' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 14'>
        <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
      </svg>
      <blockquote>
        <p className='text-2xl italic font-medium text-primary-50'>{text}</p>
      </blockquote>
      <figcaption className='flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse'>
        <img className='w-8 lg:w-16 h-8 lg:h-16 rounded-full border-2 border-primary-500' src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' alt='profile picture' />
        <div className='flex items-center divide-x-2 rtl:divide-x-reverse divide-primary-500'>
          <cite className='pe-3 font-lg text-primary-50'>{name}</cite>
          <cite className='ps-3 text-base text-primary-50'>{role}</cite>
        </div>
      </figcaption>
    </figure>
  )
}

export default Caption
