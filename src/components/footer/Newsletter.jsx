import React, { useState } from 'react'
import axios from 'axios'
import CallToAction from '../commons/CallToAction'
import validateEmail from '../../helpers/validateEmail'

const InfoBlock = ({ iconSrc, title, description }) => (
  <div className='flex flex-col items-start'>
    <div className='rounded-lg bg-primary-50/5 p-2 ring-1 ring-primary-50/10'>
      <div className='h-10 w-10' aria-hidden='true'>
        <img loading='lazy' src={iconSrc} alt={`${title} icon`} />
      </div>
    </div>
    <dt className='mt-4 font-semibold text-3xl text-primary-50'>{title}</dt>
    <dd className='mt-2 leading-7 text-xl text-primary-50/75'>{description}</dd>
  </div>
)

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setMessage('Inserisci un indirizzo email valido.')
      return
    }

    try {
      await axios.post('https://eden-backend.vercel.app/iscrizione-newsletter', {
        email,
        firstName,
        lastName
      })
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
        <label htmlFor='lastName' className='sr-only'>Cognome</label>
        <input
          id='lastName'
          name='lastName'
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
        className='flex-none px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 !bg-primary-500 hover:!bg-primary-600 active:!bg-primary-700 !text-primary-50'
      />
      {message && <p className='mt-2 text-primary-50'>{message}</p>}
    </form>
  )
}

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

const Newsletter = () => {
  return (
    <div className='p-14'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid max-w-2xl grid-cols-1 gap-y-16 lg:max-w-none 2xl:grid-cols-2'>
          <div className='max-w-xl p-8 lg:max-w-lg'>
            <h2 className='font-bold text-primary-50 text-3xl'>Iscriviti alla Nostra Newsletter.</h2>
            <p className='mt-4 text-xl leading-8 text-primary-50/75'>
              Informati sulle ultime novità e promozioni, immobili nuovi, notizie, agevolazioni e molte altre situazioni di interesse, gratuitamente. Non invieremo spam, promesso!
            </p>
            <NewsletterForm />
          </div>
          <dl className='grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 lg:pt-2'>
            {infoBlocks.map((block, index) => (
              <InfoBlock key={index} {...block} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
