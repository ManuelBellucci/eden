const InfoBlock = ({ title, content }) => (
  <div className='flex flex-col gap-4'>
    <h3 className='text-xl md:text-2xl font-bold text-primary-50'>{title}</h3>
    <p className='text-primary-50/75 text-xl'>{content}</p>
  </div>
)

export default InfoBlock
