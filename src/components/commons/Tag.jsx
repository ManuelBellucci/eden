// Mappa delle posizioni per i tag
const positions = {
  topLeft: 'top-2 left-2',
  topRight: 'top-2 right-2',
  topCenter: 'top-2 left-1/2 transform -translate-x-1/2',
  bottomLeft: 'bottom-2 left-2',
  bottomRight: 'bottom-2 right-2'
}

// Mappa delle dimensioni per i tag
const sizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-3 text-base',
  xl: 'px-5 py-4 text-lg'
}

/**
 * Tag - Componente per visualizzare un tag (etichetta) in una posizione specifica.
 * @param {string} text - Testo del tag.
 * @param {string} color - Colore del tag.
 * @param {string} position - Posizione del tag (es. 'topLeft', 'topRight').
 * @param {string} size - Dimensione del tag ('sm', 'md', 'lg', 'xl').
 * @param {object} style - Stili inline opzionali.
 * @returns {JSX.Element} - Elemento React per la visualizzazione di un tag.
 */
const Tag = ({
  text,
  color,
  position = 'topLeft',
  size = 'md',
  style = {}
}) => {
  // Classi per la posizione e la dimensione del tag
  const positionClasses = positions[position] || positions.topLeft
  const sizeClasses = sizes[size] || sizes.md
  // Classi combinate
  const combinedClasses = `absolute text-primary-50   rounded-lg z-10 ${positionClasses} ${sizeClasses} ${color}`

  return (
    <div className={combinedClasses} style={style}>
      {text}
    </div>
  )
}

export default Tag
