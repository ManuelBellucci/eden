import { Link } from 'react-router-dom'

/**
 * LinkColumn - Componente per la visualizzazione di una colonna di link.
 * @param {string} title - Titolo della colonna.
 * @param {Array} links - Array di oggetti link, ciascuno contenente testo e href.
 * @returns {JSX.Element} - Componente per la visualizzazione di una colonna di link
 */
const LinkColumn = ({ title, links }) => (
  <div className='text-center'>
    <h2 className='mb-2 text-xl md:text-2xl   text-primary-500 underline underline-offset-4 uppercase'>{title}</h2>
    <ul className='text-primary-50 text-lg mb-10 font-medium'>
      {links.map((link) => (
        <li key={link.text} className='mb-4'>
          {/* Collegamento a ciascun link della colonna */}
          <Link to={link.href} className='hover:underline font-sans'>{link.text}</Link>
        </li>
      ))}
    </ul>
  </div>
)

// Links da visualizzare nel footer. Ogni oggetto rappresenta una sezione con titolo e array di link.
const links = [
  {
    title: 'Eden House',
    links: [
      { text: 'Chi siamo', href: '/about' },
      { text: 'Lavora con noi', href: '/lavoro' },
      { text: 'Immobili', href: '/immobili' },
      // { text: 'Le Agenzie', href: '/agenzie' },
      { text: 'Contatti', href: '/contatti' }
    ]
  },
  // {
  //   title: 'Magazine',
  //   links: [
  //     { text: 'Blog', href: '/blog' },
  //     { text: 'Notizie', href: '/blog/notizie' },
  //     { text: 'Agevolazioni e bonus', href: '/blog/agevolazioniebonus' },
  //     { text: 'Contenuti educativi scaricabili', href: '/scaricabili' }
  //   ]
  // },
  // {
  //   title: 'Guide TOP',
  //   links: [
  //     { text: 'Come fare una permuta immobiliare?', href: '#' },
  //     { text: 'Mutui 2024: tutto ciò che devi sapere', href: '#' },
  //     { text: 'Come individuare un immobile con un buon rapporto qualità-prezzo?', href: '#' },
  //     { text: 'Come vendere casa velocemente', href: '#' }
  //   ]
  // },
  {
    title: 'Privacy',
    links: [
      { text: 'Privacy Policy', href: 'https://www.iubenda.com/privacy-policy/29502028' },
      { text: 'Cookie Policy', href: 'https://www.iubenda.com/privacy-policy/29502028/cookie-policy' },
      { text: 'Termini e condizioni', href: '/terms' },
      { text: 'Informativa sui dati', href: '/informativa' }
    ]
  }
]

// FooterLinks - Componente per visualizzare tutte le colonne di link nel footer.
const FooterLinks = () => {
  return (
    // <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
    <>
      <div className='grid grid-cols-2'>
        {links.map((section) => (
          <LinkColumn key={section.title} title={section.title} links={section.links} />
        ))}
      </div>
    </>
  )
}

export default FooterLinks
