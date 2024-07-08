const InfoBlock = ({ title, content }) => (
  <div className='flex flex-col gap-4'>
    <h3 className='text-xl font-bold text-primary-50'>{title}</h3>
    <p className='text-primary-50'>{content}</p>
  </div>
)

export default InfoBlock
