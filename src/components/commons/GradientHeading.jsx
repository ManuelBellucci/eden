const GradientHeading = ({
  textOne,
  gradientPhrase,
  textTwo,
  paragraph,
  gradientFrom = 'primary-200',
  gradientVia = 'primary-300',
  gradientTo = 'primary-500',
  className = '',
  headingSizeClasses = 'text-4xl md:text-5xl lg:text-6xl', // Allows for overriding size
  paragraphSizeClasses = 'text-lg lg:text-xl'
}) => {
  return (
    <>
      <h1 className={`mb-4 font-extrabold leading-none tracking-tight text-primary-50 ${headingSizeClasses} ${className}`}>
        {textOne}
        <span className={`text-transparent bg-clip-text bg-gradient-to-b to-${gradientTo} from-${gradientFrom} via-${gradientVia}`}>
          {' '}{gradientPhrase}{' '}
        </span>
        {textTwo}
      </h1>
      <p className={`font-medium text-primary-100 ${paragraphSizeClasses}`}>
        {paragraph}
      </p>
    </>
  )
}

export default GradientHeading;
