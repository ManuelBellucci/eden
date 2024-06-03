const ProcessStep = ({ title, description, src }) => (
  <div className='flex flex-col justify-center border-l-4 p-8 hover:border-black transition-all ease-in hover:bg-primary-200/30 rounded-e-lg'>
    <div className='text-center'>
      <img loading='lazy' className='h-14 w-14' src={src} />
    </div>
    <h2 className='text-lg font-semibold mt-2'>{title}</h2>
    <p className='text-sm text-gray-500 mt-1'>{description}</p>
  </div>
)

export default ProcessStep
