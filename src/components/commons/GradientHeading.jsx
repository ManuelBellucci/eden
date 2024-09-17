/**
 * Generate complete heading class
 * @param {string} sizeClasses - Tailwind size classes for heading
 * @param {string} additionalClasses - Additional custom classes
 * @returns {string} - Complete class string for heading
 */
const generateHeadingClass = (sizeClasses, additionalClasses) => {
  return `mb-2 font-base leading-none text-primary-50 ${sizeClasses} ${additionalClasses}`
}

/**
 * Generate inline gradient style for text
 * @param {string} to - Gradient end color
 * @param {string} from - Gradient start color
 * @param {string} via - Gradient middle transition color
 * @returns {object} - Style object for gradient text
 */
const generateGradientStyle = (to, from, via) => {
  return {
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundImage: `linear-gradient(150deg, ${from}, ${via}, ${to})`
  }
}

/**
 * Generate complete paragraph class
 * @param {string} sizeClasses - Tailwind size classes for paragraph
 * @returns {string} - Complete class string for paragraph
 */
const generateParagraphClass = (sizeClasses) => {
  return `text-primary-50 font-sans ${sizeClasses}`
}

/**
 * Component for displaying headings with gradient effect
 */
const GradientHeading = ({
  text,
  gradientPhrase,
  paragraph,
  gradientFrom,
  gradientVia,
  gradientTo,
  className = '',
  headingSizeClasses = 'text-6xl text-balance flex flex-col gap-16',
  paragraphSizeClasses = 'text-2xl'
}) => {
  const headingClass = generateHeadingClass(headingSizeClasses, className)
  const gradientStyle = generateGradientStyle(gradientTo, gradientFrom, gradientVia)
  const paragraphClass = generateParagraphClass(paragraphSizeClasses)

  return (
    <div className='mb-8'>
      <h2 className={headingClass}>
        <span className='font-extrabold' style={gradientStyle}>{` ${gradientPhrase} `}</span>
        <p>{text}</p>
      </h2>
      <p className={paragraphClass}>{paragraph}</p>
    </div>
  )
}

export default GradientHeading
