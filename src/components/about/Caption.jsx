/**
 * Caption - Componente che visualizza una didascalia o un'area di citazione con un'immagine e informazioni su chi parla.
 * @param {string} text - Testo citato.
 * @param {string} name - Nome della persona citata.
 * @param {string} role - Ruolo della persona citata.
 * @returns {JSX.Element} - Componente per la visualizzazione di una citazione.
 */

const Caption = ({ text, name, role, url }) => {
  return (
    <figure className='max-w-screen-md mx-auto text-center m-4 p-4'>

      {/* Icona grafica di una citazione */}
      <svg className='w-10 h-10 mx-auto mb-3 text-primary-500' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 14'>
        <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
      </svg>

      {/* Blocco della citazione */}
      <blockquote>
        <p className='text-2xl italic font-medium text-primary-50'>{text}</p>
      </blockquote>

      {/* Informazioni sull'autore della citazione */}
      <figcaption className='flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse'>
        <img
          className='w-16 h-16 object-cover rounded-full border-2 border-primary-500'
          src={url}
          alt='profile picture'
          loading='lazy'
        />

        {/* Nome e ruolo dell'autore */}
        <div className='flex items-center divide-x-2 rtl:divide-x-reverse divide-primary-500'>
          <cite className='pe-3 font-lg text-primary-50'>{name}</cite>
          <cite className='ps-3 text-base text-primary-50'>{role}</cite>
        </div>
      </figcaption>
    </figure>
  )
}

export default Caption
