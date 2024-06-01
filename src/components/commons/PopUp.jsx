import { useMemo } from 'react'
import { Link } from 'react-router-dom'

const useDynamicClasses = (color) => {
  const textColor = `hover:text-${color}`
  const ringColor = `hover:ring-${color}`

  const containerClasses = useMemo(() => [
    'relative',
    'rounded-full',
    'px-3',
    'py-1',
    'text-sm',
    'leading-6',
    'text-white',
    'hover:bg-primary-400',
    'hover:text-white',
    'ring-1',
    textColor,
    ringColor,
    'ring-primary-300',
    'hover:ring-primary-400',
    'transition-all'
  ].join(' '), [textColor, ringColor])

  const linkClasses = useMemo(() => [
    'font-semibold',
    'text-primary-800',
    'hover:text-primary-700',
    'transition-all'
  ].join(' '), [])

  return { containerClasses, linkClasses }
}

const PopUp = ({ text, readMore, color = 'primary-300', href }) => {
  const { containerClasses, linkClasses } = useDynamicClasses(color)

  return (
    <div className={containerClasses}>
      {text}
      <Link to={href} className={linkClasses}>
        <span className='absolute inset-0' aria-hidden='true' />
        {' '}{readMore}
        <span aria-hidden='true' />
      </Link>
    </div>
  )
}

export default PopUp
