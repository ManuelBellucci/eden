import { useState } from 'react'
import axios from 'axios'
import CallToAction from '../commons/CallToAction'
import validateEmail from '../../helpers/validateEmail'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

/**
 * InfoBlock - Componente per visualizzare blocchi informativi.
 * @param {string} iconSrc - Path dell'icona da visualizzare.
 * @param {string} title - Titolo del blocco.
 * @param {string} description - Descrizione del blocco.
 * @returns {JSX.Element} - Elemento React per la visualizzazione del blocco informativo.
 */
const InfoBlock = ({ iconSrc, title, description }) => (
  <div className='flex flex-col items-start'>
    <dl>
      <dt className='mt-4   text-3xl text-primary-50'>
        <div className='rounded-lg bg-primary-50/5 p-2 ring-1 inline-flex ring-primary-50/10'>
          <div className='h-10 w-10' aria-hidden='true'>
            <img loading='lazy' src={iconSrc} alt={`${title} icon`} />
          </div>
        </div>
        <p className='block'>{title}</p>
      </dt>
      <dd className='font-sans mt-2 leading-7 text-xl text-primary-50/75'>{description}</dd>
    </dl>
  </div>
)

// NewsletterForm - Componente per la gestione del form di iscrizione alla newsletter.
const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [message, setMessage] = useState('')

  /**
   * Gestione dell'invio del form di iscrizione.
   * @param {object} e - Evento dell'invio del form.
   * @returns {Promise<void>} - Nessun valore di ritorno.
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setMessage('Inserisci un indirizzo email valido.')
      return
    }

    try {
      const response = await axios.post(`${API_URL}/iscrizione-newsletter`, {
        email,
        firstName,
        lastName
      })
      console.log('Risposta dal server:', response.data) // Log della risposta dal server
      setMessage('Iscrizione avvenuta con successo!')
      setEmail('')
      setFirstName('')
      setLastName('')
    } catch (error) {
      console.error('Errore durante l\'iscrizione alla newsletter:', error)
      setMessage('Errore durante l\'iscrizione. Riprova più tardi.')
    }
  }

  return (
    <form className='mt-6 flex max-w-md gap-x-4' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-y-2 w-full'>
        <label htmlFor='firstName' className='sr-only'>Nome</label>
        <input
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type='text'
          autoComplete='name'
          required
          placeholder='Il tuo nome'
          className='min-w-0 h-10 placeholder:text-primary-50 flex-auto rounded-lg border-0 bg-primary-50/5 px-3.5 py-2 text-primary-50 shadow-sm ring-1 ring-inset ring-primary-50/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 text-sm md:text-base lg:text-lg sm:leading-6'
        />
        <label htmlFor='family-name' className='sr-only'>Cognome</label>
        <input
          id='family-name'
          name='family-name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type='text'
          autoComplete='family-name'
          required
          placeholder='Il tuo cognome'
          className='min-w-0 h-10 placeholder:text-primary-50 flex-auto rounded-lg border-0 bg-primary-50/5 px-3.5 py-2 text-primary-50 shadow-sm ring-1 ring-inset ring-primary-50/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 text-sm md:text-base lg:text-lg sm:leading-6'
        />

        <label htmlFor='email-address' className='sr-only'>Email</label>
        <input
          id='email-address'
          name='email'
          type='email'
          autoComplete='email'
          required
          placeholder='La tua migliore email'
          className='min-w-0 h-10 placeholder:text-primary-50 flex-auto rounded-lg border-0 bg-primary-50/5 px-3.5 py-2 text-primary-50 shadow-sm ring-1 ring-inset ring-primary-50/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 text-sm md:text-base lg:text-lg sm:leading-6'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <CallToAction
        asSubmit
        text='Iscriviti'
        rounded='md'
        size='lg'
        className='flex-none px-3.5 py-2.5 text-sm   shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 !bg-primary-500 hover:!bg-primary-600 active:!bg-primary-700 !text-primary-50'
      />
      {message && <p className='mt-2 text-primary-50'>{message}</p>}
    </form>
  )
}

// Dati per i blocchi informativi della newsletter.
const infoBlocks = [
  {
    iconSrc: '/envelope.webp',
    title: 'Articoli nuovi ogni settimana.',
    description: 'Ci impegniamo a studiare il mercato e proporre posta di qualità, per tenerti sempre aggiornato. Ogni settimana inviamo diversi nuovi articoli informativi e di interesse.'
  },
  {
    iconSrc: '/spam.webp',
    title: 'No spam',
    description: 'Promettiamo di non inviarti spam. Solo contenuti di qualità, informativi e di interesse. Se non ti piace, puoi cancellarti in qualsiasi momento. Nessuna domanda. Nessun problema. Nessun rischio.'
  }
]

// Newsletter - Componente principale per la sezione della newsletter. Include un form di iscrizione e blocchi informativi.
const Newsletter = () => {
  return (
    <div className='p-14'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid max-w-2xl grid-cols-1 gap-y-16 lg:max-w-none 2xl:grid-cols-2'>
          <div className='max-w-xl p-8 lg:max-w-lg'>
            <h2 className='  text-primary-50 text-3xl'>Iscriviti alla Nostra Newsletter.</h2>
            <p className='font-sans mt-4 text-xl leading-8 text-primary-50/75'>
              Informati sulle ultime novità e promozioni, immobili nuovi, notizie, agevolazioni e molte altre situazioni di interesse, gratuitamente. Non invieremo spam, promesso!
            </p>
            <NewsletterForm />
          </div>
          <div className='grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 lg:pt-2'>
            {infoBlocks.map((block, index) => (
              <InfoBlock key={index} {...block} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
