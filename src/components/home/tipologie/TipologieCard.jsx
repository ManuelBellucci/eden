/** TipologieCard - Componente per visualizzare una singola scheda di tipologia
* @param {string} title - Titolo della tipologia
* @param {string} subtitle - Sottotitolo della tipologia
* @param {string} href - URL di destinazione
* @param {string} imgSrc - URL dell'immagine
* @returns {JSX.Element} - Elemento React per la visualizzazione di una singola scheda di tipologia
*/
const TipologieCard = ({ title, subtitle, href, imgSrc }) => {
  return (
    <a href={href} target='_blank' rel='noreferrer' className='flex w-full flex-col justify-center overflow-hidden rounded-lg sm:mx-auto sm:max-w-lg'>
      <div className='group relative m-0 flex h-72 w-full xl:h-96'>
        <img loading='lazy' src={imgSrc} alt={title} className='h-full w-full object-cover object-bottom transition-all duration-300 ease-in-out group-hover:scale-110' />
        <div className='absolute bottom-0 text-center text-balance border-t-2 h-24 flex flex-col items-center justify-center border-primary-950 rounded-t-none rounded-lg left-0 z-20 w-full p-2 bg-primary-500'>
          <h2 className='text-xl lg:text-2xl   text-primary-950'>{title}</h2>
          <p className='font-sans text-xl text-primary-950'>{subtitle}</p>
        </div>
      </div>
    </a>
  )
}

export default TipologieCard
