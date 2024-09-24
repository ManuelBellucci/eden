/**
 * AboutSection - Componente che rappresenta una sezione informativa nella pagina "About".
 * @param {string} title - Titolo della sezione.
 * @param {string} text - Testo di supporto sotto il titolo.
 * @param {string} body - Contenuto principale della sezione.
 * @returns {JSX.Element} - Elemento React per la visualizzazione di una sezione informativa.
 */

const AboutSection = ({ title, text, body }) => {
  return (
    <li className='mb-10 ms-4'>
      {/* Cerchio colorato a sinistra per design visivo */}
      <div className='absolute w-3 h-3 bg-primary-500 rounded-full mt-3 -start-2 border-2 border-primary-50' />

      {/* Titolo della sezione (es. nome o data), visualizzato in grassetto e grande */}
      <time className='mb-1 text-xl md:text-2xl lg:text-3xl font-bold leading-none text-primary-500 uppercase'>
        {title}
      </time>

      {/* Testo descrittivo per la sezione */}
      <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-primary-50'>
        {text}
      </h3>

      {/* Corpo della sezione con descrizione dettagliata */}
      <p className='font-sans text-base md:text-lg lg:text-xl font-normal text-primary-50/75'>
        {body}
      </p>
    </li>
  )
}

export default AboutSection
