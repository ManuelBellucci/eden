import React from 'react'

/**
 * Generate complete heading class
 * @param {string} sizeClasses - Tailwind size classes for heading
 * @param {string} additionalClasses - Additional custom classes
 * @returns {string} - Complete class string for heading
 */
const generateHeadingClass = (sizeClasses, additionalClasses) => {
  return `mb-4 font-extrabold leading-none tracking-tight text-primary-50 ${sizeClasses} ${additionalClasses}`
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
    backgroundImage: `linear-gradient(to bottom, ${from}, ${via}, ${to})`
  }
}

/**
 * Generate complete paragraph class
 * @param {string} sizeClasses - Tailwind size classes for paragraph
 * @returns {string} - Complete class string for paragraph
 */
const generateParagraphClass = (sizeClasses) => {
  return `font-medium text-primary-100 ${sizeClasses}`
}

/**
 * Component for displaying headings with gradient effect
 */
const GradientHeading = ({
  textOne,
  gradientPhrase,
  textTwo,
  paragraph,
  gradientFrom,
  gradientVia,
  gradientTo,
  className = '',
  headingSizeClasses = 'text-4xl md:text-5xl lg:text-6xl',
  paragraphSizeClasses = 'text-lg lg:text-xl'
}) => {
  const headingClass = generateHeadingClass(headingSizeClasses, className)
  const gradientStyle = generateGradientStyle(gradientTo, gradientFrom, gradientVia)
  const paragraphClass = generateParagraphClass(paragraphSizeClasses)

  return (
    <>
      <h1 className={headingClass}>
        {textOne}
        <span style={gradientStyle}>{` ${gradientPhrase} `}</span>
        {textTwo}
      </h1>
      <p className={paragraphClass}>{paragraph}</p>
    </>
  )
}

export default GradientHeading
