const PopUp = ({ text, readMore, color = 'primary-300', href }) => {
  const textColor = `hover:text-${color}`
  const ringColor = `hover:ring-${color}`
  const containerClasses = [
    'relative',
    'rounded-full',
    'px-3',
    'py-1',
    'text-sm',
    'leading-6',
    'text-primary-300',
    'ring-1',
    textColor,
    ringColor,
    'ring-primary-300',
    'transition-all'
  ].join(' ')

  return (
    <div className={containerClasses}>
      {text}
      <a href={href} className='font-semibold text-primary-800 hover:text-primary-700 transition-all'>
        <span className='absolute inset-0' aria-hidden='true' />
        {' '} {readMore}
        <span aria-hidden='true' />
      </a>
    </div>
  )
}

export default PopUp
