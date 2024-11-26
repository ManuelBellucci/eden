/**
 * Team - Componente per visualizzare il team dell'agenzia in una griglia.
 * @param {Array} members - Array di oggetti membri con { name, imgSrc, role }.
 * @returns {JSX.Element} - Componente per la visualizzazione del team.
 */

const Team = ({ members }) => {
  return (
    <li className='mb-10 ms-4'>
      {/* Cerchio colorato a sinistra per design visivo */}
      <div className='absolute w-3 h-3 bg-primary-500 rounded-full mt-3 -start-2 border-2 border-primary-50' />

      {/* Titolo della sezione */}
      <time className='mb-1 text-xl md:text-2xl lg:text-3xl   leading-none text-primary-500 uppercase'>Il nostro team</time>

      {/* Sottotitolo descrittivo per la sezione */}
      <h3 className='text-lg md:text-xl lg:text-2xl   text-primary-50 mb-4'>
        Chi siamo
      </h3>

      {/* Lista dei membri del team mostrati in una griglia */}
      <div className=' gap-4 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {members.map((member, index) => (
          <div key={index} className='flex items-center gap-4'>
            {/* Immagine del membro del team */}
            <img className='w-14 h-14 rounded-full border-2 border-primary-500 object-cover' src={member.imgSrc} alt={member.name} loading='lazy' />
            {/* Nome e ruolo del membro del team */}
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
