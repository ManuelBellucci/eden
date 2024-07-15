const ProcessStep = ({ title, description, src }) => (
  <div className='flex flex-col justify-center border-l-4 p-8 border-primary-50 hover:border-primary-500 transition-all ease-in hover:bg-primary-900 rounded-e-lg group'>
    <div className='text-center'>
      <img loading='lazy' className='h-14 w-14' src={src} />
    </div>
    <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mt-2 text-primary-50 group-hover:text-primary-500'>{title}</h2>
    <p className='text-lg md:text-xl lg:text-2xl text-primary-50 mt-1'>{description}</p>
  </div>
)

export default ProcessStep
