const positions = {
  topLeft: 'top-4 left-4',
  topRight: 'top-4 right-4',
  topCenter: 'top-4 left-1/2 transform -translate-x-1/2',
  bottomLeft: 'bottom-4 left-4',
  bottomRight: 'bottom-4 right-4'
}

const sizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-3 text-md',
  xl: 'px-5 py-4 text-lg'
}

const Tag = ({
  text,
  color,
  position = 'topLeft',
  size = 'md',
  style = {}
}) => {
  const positionClasses = positions[position] || positions.topLeft
  const sizeClasses = sizes[size] || sizes.md
  const combinedClasses = `absolute text-white font-bold rounded-full z-10 ${positionClasses} ${sizeClasses} ${color}`

  return (
    <div className={combinedClasses} style={style}>
      {text}
    </div>
  )
}

export default Tag
