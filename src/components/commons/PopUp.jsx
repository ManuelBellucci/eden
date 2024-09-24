import { useMemo } from 'react'
import { Link } from 'react-router-dom'

/**
 * Hook per generare dinamicamente le classi CSS in base al colore fornito.
 * @param {string} color - Colore per il testo e l'anello.
 * @returns {object} - Oggetto contenente le classi dinamiche generate.
 */
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
    'text-primary-50',
    'hover:bg-primary-500',
    'hover:text-primary-50',
    'ring-1',
    textColor,
    ringColor,
    'ring-primary-300',
    'hover:ring-primary-500',
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

/**
 * PopUp - Componente per visualizzare un messaggio popup con un link "Leggi di più".
 * @param {string} text - Testo principale del popup.
 * @param {string} readMore - Testo del link "Leggi di più".
 * @param {string} color - Colore personalizzato per l'effetto hover.
 * @param {string} href - Link di destinazione.
 * @returns {JSX.Element} - Elemento React per la visualizzazione di un popup.
 */
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
