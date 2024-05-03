// Function to generate the heading class
const generateHeadingClass = (headingSizeClasses, className) => {
  return `mb-4 font-extrabold leading-none tracking-tight text-primary-50 ${headingSizeClasses} ${className}`;
}

// Function to generate the gradient style
const generateGradientStyle = (gradientTo, gradientFrom, gradientVia) => {
  return {
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundImage: `linear-gradient(to bottom, ${gradientFrom}, ${gradientVia}, ${gradientTo})`
  };
}

// Function to generate the paragraph class
const generateParagraphClass = (paragraphSizeClasses) => {
  return `font-medium text-primary-100 ${paragraphSizeClasses}`;
}

// The refactored GradientHeading component
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
  // Generate dynamic classes and style using the helper functions
  const headingClass = generateHeadingClass(headingSizeClasses, className);
  const gradientStyle = generateGradientStyle(gradientTo, gradientFrom, gradientVia);
  const paragraphClass = generateParagraphClass(paragraphSizeClasses);

  return (
    <>
      <h1 className={headingClass}>
        {textOne}
        <span style={gradientStyle}>
          {' '}{gradientPhrase}{' '}
        </span>
        {textTwo}
      </h1>
      <p className={paragraphClass}>
        {paragraph}
      </p>
    </>
  )
}

export default GradientHeading;
