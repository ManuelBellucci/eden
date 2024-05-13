const ProcessStep = ({ title, description }) => (
  <div className='flex flex-col justify-center border-l-4 p-8 hover:border-black transition-all ease-in hover:bg-primary-200/30 rounded-e-lg'>
    <div className='text-center'>
      <svg className='h-8 w-8 bg-primary-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' />
    </div>
    <h2 className='text-lg font-semibold mt-2'>{title}</h2>
    <p className='text-sm text-gray-500 mt-1'>{description}</p>
  </div>
)

export default ProcessStep
