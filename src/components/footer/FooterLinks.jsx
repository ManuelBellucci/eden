import { Link } from 'react-router-dom'

const LinkColumn = ({ title, links }) => (
  <div className='text-center'>
    <h2 className='mb-2 text-xl md:text-2xl font-semibold text-primary-500 underline underline-offset-4 uppercase'>{title}</h2>
    <ul className='text-primary-50 text-lg mb-10 font-medium'>
      {links.map((link) => (
        <li key={link.text} className='mb-4'>
          <Link to={link.href} className='hover:underline'>{link.text}</Link>
        </li>
      ))}
    </ul>
  </div>
)

const links = [
  {
    title: 'Eden House',
    links: [
      { text: 'Chi siamo', href: '/about' },
      { text: 'Lavora con noi', href: '/lavoro' },
      { text: 'Le Agenzie', href: '/agenzie' },
      { text: 'Contatti', href: '/contatti' }
    ]
  },
  {
    title: 'Magazine',
    links: [
      { text: 'Blog', href: '/blog' },
      { text: 'Notizie', href: '/blog/notizie' },
      { text: 'Agevolazioni e bonus', href: '/blog/agevolazioniebonus' },
      { text: 'Contenuti educativi scaricabili', href: '/scaricabili' }
    ]
  },
  {
    title: 'Guide TOP',
    links: [
      { text: 'Come fare una permuta immobiliare?', href: '#' },
      { text: 'Mutui 2024: tutto ciò che devi sapere', href: '#' },
      { text: 'Come individuare un immobile con un buon rapporto qualità-prezzo?', href: '#' },
      { text: 'Come vendere casa velocemente', href: '#' }
    ]
  },
  {
    title: 'Privacy',
    links: [
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Cookie Policy', href: '/cookies' },
      { text: 'Termini e condizioni', href: '/terminiecondizioni' },
      { text: 'Informativa sui dati', href: '/informativa' }
    ]
  }
]

const FooterLinks = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pl-8 md:pl-0'>
      {links.map((section) => (
        <LinkColumn key={section.title} title={section.title} links={section.links} />
      ))}
    </div>
  )
}

export default FooterLinks
