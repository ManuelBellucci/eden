import CallToAction from '../../commons/CallToAction'

/**
 * Componente Banner
 * @props {string} bgImage - URL dell'immagine di sfondo
 * @props {string} title - Titolo del banner
 * @props {string} description - Descrizione del banner
 * @props {string} buttonText - Testo del pulsante di invito all'azione
 * @props {string} buttonLink - Link per il pulsante di invito all'azione
 * @returns {JSX.Element} - Componente per la visualizzazione di un banner
 */
const Banner = ({ bgImage, title, description, buttonText, buttonLink }) => {
  return (
    <div
      className='h-full mt-32 bg-cover bg-center' // Imposta altezza, margine e stile dell'immagine di sfondo
      style={{ backgroundImage: `url(${bgImage})` }} // Imposta l'immagine di sfondo
    >
      {/* Contenitore centrale con padding e stile flessibile */}
      <div className='p-32 flex flex-col items-center text-center gap-6 justify-center'>
        <h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold max-w-2xl text-primary-950'>{title}</h2>
        <p className='font-sans text-2xl md:text-3xl lg:text-4xl text-primary-950'>{description}</p>
        <CallToAction
          href={buttonLink} // Link per il pulsante
          text={buttonText} // Testo del pulsante
          anchor // Indica che il pulsante funge da ancoraggio
          size='xl' // Dimensione del pulsante
          rounded='lg' // Bordo arrotondato del pulsante
          className='!bg-primary-500 hover:!bg-primary-600 active:!bg-primary-700 !text-primary-50' // Classi di stile per il pulsante
        />
      </div>
    </div>
  )
}

export default Banner
