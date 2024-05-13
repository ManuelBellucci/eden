const InfoBlock = ({ title, content }) => (
  <div className='flex flex-col gap-4'>
    <h3 className='text-xl font-bold'>{title}</h3>
    <p>{content}</p>
  </div>
)

export default InfoBlock
