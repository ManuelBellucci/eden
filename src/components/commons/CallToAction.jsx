const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-2 text-lg',
  xl: 'px-5 py-3 text-xl'
};

const roundedStyles = {
  'sm': 'rounded-sm',
  'md': 'rounded-md',
  'lg': 'rounded-lg',
  'xl': 'rounded-xl',
  'full': 'rounded-full'
};

const CallToAction = ({
  text,
  anchor,
  href,
  className = '',
  type = 'button',
  style = {},
  onClick = () => {},
  asSubmit = false,
  size = 'md',
  rounded = 'rounded-lg',
  preventDefault = false
}) => {
  const baseClasses = 'text-primary-950 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition-all font-medium text-center';
  const sizeClass = sizeStyles[size] || sizeStyles.md
  const roundedClass = roundedStyles[rounded] || roundedStyles.lg
  const combinedClasses = `${baseClasses} ${sizeClass} ${className}`

  const handleClick = (event) => {
    if (preventDefault) {
      event.preventDefault()
    }
    onClick(event)
  }

  if (anchor) {
    return <a href={href} className={combinedClasses} style={style} onClick={handleClick}>{text}</a>
  } else {
    const buttonType = asSubmit ? 'submit' : type
    return (
      <button
        type={buttonType}
        className={combinedClasses}
        style={style}
        onClick={handleClick}
      >
        {text}
      </button>
    );
  }
}

export default CallToAction
