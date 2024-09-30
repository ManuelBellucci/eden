/**
 * Genera le classi CSS complete per un heading (titolo).
 * @param {string} sizeClasses - Classi per la dimensione del testo (Tailwind).
 * @param {string} additionalClasses - Classi aggiuntive personalizzate.
 * @returns {string} - Classi CSS complete per l'heading.
 */
const generateHeadingClass = (sizeClasses, additionalClasses) => {
  return `mb-2 font-base leading-none text-primary-50 ${sizeClasses} ${additionalClasses}`
}

/**
 * Genera lo stile inline per l'effetto gradiente nel testo.
 * @param {string} to - Colore di fine del gradiente.
 * @param {string} from - Colore di inizio del gradiente.
 * @param {string} via - Colore di transizione del gradiente.
 * @returns {object} - Oggetto di stile con il gradiente.
 */
const generateGradientStyle = (to, from, via) => {
  return {
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundImage: `linear-gradient(150deg, ${from}, ${via}, ${to})`
  }
}

/**
 * Genera le classi CSS complete per un paragrafo.
 * @param {string} sizeClasses - Classi Tailwind per la dimensione del paragrafo.
 * @returns {string} - Classi CSS complete per il paragrafo.
 */
const generateParagraphClass = (sizeClasses) => {
  return `text-primary-50 font-sans ${sizeClasses}`
}

/**
 * GradientHeading - Componente per visualizzare titoli con effetto gradiente e un paragrafo opzionale.
 * @param {string} text - Testo principale dell'heading.
 * @param {string} gradientPhrase - Testo che avrà l'effetto gradiente.
 * @param {string} paragraph - Testo del paragrafo sotto il titolo.
 * @param {string} gradientFrom - Colore iniziale del gradiente.
 * @param {string} gradientVia - Colore intermedio del gradiente.
 * @param {string} gradientTo - Colore finale del gradiente.
 * @param {string} className - Classi CSS aggiuntive opzionali.
 * @param {string} headingSizeClasses - Classi Tailwind per la dimensione del titolo.
 * @param {string} paragraphSizeClasses - Classi Tailwind per la dimensione del paragrafo.
 * @returns {JSX.Element} - Elemento React per la visualizzazione di un heading con effetto gradiente.
 */
const GradientHeading = ({
  text,
  gradientPhrase,
  paragraph,
  gradientFrom,
  gradientVia,
  gradientTo,
  className = '',
  headingSizeClasses = 'text-6xl text-balance flex flex-col gap-16',
  paragraphSizeClasses = 'text-2xl'
}) => {
  // Generazione delle classi CSS per l'heading
  const headingClass = generateHeadingClass(headingSizeClasses, className)
  // Generazione dello stile inline per il gradiente
  const gradientStyle = generateGradientStyle(gradientTo, gradientFrom, gradientVia)
  // Generazione delle classi per il paragrafo
  const paragraphClass = generateParagraphClass(paragraphSizeClasses)

  return (
    <div className='mb-8'>
      <h2 className={headingClass}>
        <span className='font-extrabold text-[100px]' style={gradientStyle}>{` ${gradientPhrase} `}</span>
        <p>{text}</p>
      </h2>
      <p className={paragraphClass}>{paragraph}</p>
    </div>
  )
}

export default GradientHeading
