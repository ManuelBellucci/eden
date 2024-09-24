/* Componente HeroBackground - Mostra un'immagine di sfondo con contenuto sovrapposto
* @props {JSX.Element} children - Contenuto sovrapposto
* @props {string} backgroundImage - URL dell'immagine di sfondo
* @props {string} backgroundPosition - Posizione dell'immagine di sfondo
*/
const HeroBackground = ({ children, backgroundImage, backgroundPosition = 'center 25%' }) => {
  return (
    <div
      className='h-screen flex justify-center items-center relative bg-cover'
      style={{
        backgroundImage: `url(${backgroundImage})`, // Imposta l'immagine di sfondo
        backgroundPosition // Imposta la posizione dell'immagine\
      }}
    >
      {children}
    </div>
  )
}

export default HeroBackground
