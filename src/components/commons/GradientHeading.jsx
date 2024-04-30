const GradientHeading = ({ textOne, gradientPhrase, textTwo, paragraph }) => {
    return (
        <>
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-primary-50 md:text-5xl lg:text-6xl'>{textOne}<span className='text-transparent bg-clip-text bg-gradient-to-b to-primary-500 from-primary-200 via-primary-300'>
                {' '}{gradientPhrase}{' '}
            </span> {textTwo}
            </h1>
            <p className='text-lg font-medium text-primary-100 lg:text-xl'>
                {paragraph}
            </p>
        </>
    )
}

export default GradientHeading
