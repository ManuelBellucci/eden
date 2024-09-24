import { Link } from 'react-router-dom'

// Mappa delle classi CSS per le dimensioni del pulsante
const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-2 py-2 text-sm',
  lg: 'px-4 py-2 text-lg',
  xl: 'px-5 py-3 text-xl'
}

// Mappa delle classi CSS per i bordi arrotondati del pulsante
const roundedStyles = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full'
}

/**
 * CallToAction - Componente per pulsante o link di azione con diverse dimensioni e bordi arrotondati.
 * @param {string} text - Testo del pulsante/link.
 * @param {string} href - URL di destinazione se è un link.
 * @param {string} className - Classi CSS aggiuntive opzionali.
 * @param {string} type - Tipo di pulsante (es. 'button', 'submit').
 * @param {object} style - Stili inline opzionali.
 * @param {function} onClick - Funzione da eseguire al click.
 * @param {boolean} asSubmit - Indica se il pulsante agisce come submit.
 * @param {string} size - Dimensione del pulsante ('sm', 'md', 'lg', 'xl').
 * @param {string} rounded - Stile per il bordo arrotondato ('sm', 'md', 'lg', 'xl', 'full').
 * @param {boolean} preventDefault - Indica se l'evento click deve prevenire il comportamento predefinito.
 * @returns {JSX.Element} - Elemento React per la visualizzazione di un pulsante o link di azione.
 */

const CallToAction = ({
  text,
  anchor,
  href,
  className = '',
  type = 'button',
  style = {},
  onClick = () => { },
  asSubmit = false,
  size = 'md',
  rounded = 'rounded-lg',
  preventDefault = false
}) => {
  // Classi base per il pulsante/link
  const baseClasses = 'text-primary-50 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition-all font-bold text-center'
  const sizeClass = sizeStyles[size] || sizeStyles.md
  const roundedClass = roundedStyles[rounded] || roundedStyles.lg
  const combinedClasses = `${baseClasses} ${sizeClass} ${roundedClass} ${className}`

  // Gestione del click
  const handleClick = (event) => {
    if (preventDefault) {
      event.preventDefault()
    }
    onClick(event)
  }

  // Se il componente è un link (anchor) restituisce un elemento Link, altrimenti un bottone
  if (anchor) {
    return <Link to={href} className={combinedClasses} style={style} onClick={handleClick}>{text}</Link>
  } else {
    const buttonType = asSubmit ? 'submit' : type
    return (
      <button
        aria-label='submitButton'
        type={buttonType}
        className={combinedClasses}
        style={style}
        onClick={handleClick}
      >
        {text}
      </button>
    )
  }
}

export default CallToAction
