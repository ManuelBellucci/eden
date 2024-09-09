const InfoBlock = ({ title, content }) => (
  <div className='flex flex-col gap-4'>
    <h3 className='text-2xl lg:text-3xl font-bold text-primary-50'>{title}</h3>
    <p className='font-sans text-primary-50/75 text-xl'>{content}</p>
  </div>
)

export default InfoBlock
