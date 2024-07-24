// Team.js
const Team = ({ members }) => {
  return (
    <li className='mb-10 ms-4'>
      <div className='absolute w-3 h-3 bg-primary-500 rounded-full mt-1.5 -start-2 border-2 border-primary-50' />
      <time className='mb-1 text-xl md:text-2xl lg:text-3xl font-bold leading-none text-primary-500 uppercase'>Il nostro team</time>
      <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-primary-50 mb-4'>
        Chi siamo
      </h3>
      <div className=' gap-4 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {members.map((member, index) => (
          <div key={index} className='flex items-center gap-4'>
            <img className='w-10 h-10 rounded-full border-2 border-primary-500' src={member.imgSrc} alt={member.name} />
            <div className='font-medium text-primary-500'>
              <div className='text-nowrap'>{member.name}</div>
              <div className='text-sm text-primary-50'>{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </li>
  )
}

export default Team
