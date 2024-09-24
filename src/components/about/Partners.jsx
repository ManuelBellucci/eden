/**
 * Partners - Componente per visualizzare la sezione dei partner dell'agenzia.
 * @param {Array} partners - Array di oggetti partner con { name, imgSrc, role }.
 * @returns {JSX.Element} - Componente per la visualizzazione dei partner.
 */

const Partners = ({ partners }) => {
  return (
    <li className='ms-4'>
      {/* Cerchio colorato a sinistra per design visivo */}
      <div className='absolute w-3 h-3 bg-primary-500 rounded-full mt-3 -start-2 border-2 border-primary-50' />

      {/* Titolo della sezione */}
      <time className='mb-1 text-xl md:text-2xl lg:text-3xl font-bold leading-none text-primary-500 uppercase'>I nostri partner</time>

      {/* Sottotitolo descrittivo per la sezione */}
      <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-primary-50 mb-4'>
        Chi ci supporta
      </h3>

      {/* Lista dei partner mostrati in una griglia */}
      <div className=' gap-4 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {partners.map((partner, index) => (
          <div key={index} className='flex items-center gap-4'>
            {/* Immagine del partner */}
            <img className='w-10 h-10 rounded-full border-2 border-primary-500' src={partner.imgSrc} alt={partner.name} loading='lazy' />
            {/* Nome e ruolo del partner */}
            <div className='font-medium text-primary-500'>
              <div className='text-nowrap'>{partner.name}</div>
              <div className='text-sm text-primary-50'>{partner.role}</div>
            </div>
          </div>
        ))}
      </div>
    </li>
  )
}

export default Partners
