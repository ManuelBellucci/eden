const ProcessStep = ({ title, description, src }) => (
  <div className='flex flex-col justify-center border-l-4 p-8 border-primary-50 hover:border-primary-400 transition-all ease-in hover:bg-primary-900 rounded-e-lg group'>
    <div className='text-center'>
      <img loading='lazy' className='h-14 w-14' src={src} />
    </div>
    <h2 className='text-lg font-semibold mt-2 text-primary-50 group-hover:text-primary-400'>{title}</h2>
    <p className='text-sm text-primary-50 mt-1'>{description}</p>
  </div>
)

export default ProcessStep
