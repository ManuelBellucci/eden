const PopUp = ({ text, readMore, color, href }) => {
  return (
    <div className={`relative rounded-full px-3 py-1 text-sm leading-6 text-primary-300 ring-1 hover:text-${color} ring-primary-300 hover:ring-${color} transition-all`}>
      {text}
      <a href={href} className='font-semibold text-primary-800 hover:text-primary-700 transition-all'>
        <span className='absolute inset-0' aria-hidden='true' />
        {' '} {readMore} <span aria-hidden='true' />
      </a>
    </div>
  )
}

export default PopUp
