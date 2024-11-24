import { useState } from 'react'

// Definisce il componente Contacts
const Contacts = () => {
  // Stati per memorizzare i valori del modulo
  const [userName, setUserName] = useState('') // Nome dell'utente
  const [userSurname, setUserSurname] = useState('') // Cognome dell'utente
  const [userPhone, setUserPhone] = useState('') // Numero di telefono dell'utente
  const [userEmail, setUserEmail] = useState('') // Email dell'utente
  const [message, setMessage] = useState('') // Messaggio dell'utente
  const [status, setStatus] = useState('') // Stato dell'invio dell'email

  // Funzione per gestire l'invio del modulo
  const handleSubmit = async (e) => {
    e.preventDefault() // Previene il comportamento predefinito del modulo

    // Parametri da inviare nell'email
    const templateParams = {
      user_name: userName,
      user_surname: userSurname,
      user_phone: userPhone,
      user_email: userEmail,
      message
    }

    try {
      // Importa dinamicamente la funzione per inviare l'email
      const { sendEmail } = await import('../../helpers/sendEmailContact')
      const response = await sendEmail(templateParams) // Invia l'email
      console.log('SUCCESS!', response.status, response.text) // Log di successo
      setStatus('SUCCESS') // Aggiorna lo stato a successo
    } catch (err) {
      console.error('FAILED...', err) // Log di errore
      setStatus('FAILED') // Aggiorna lo stato a fallito
    }
  }

  return (
    <li className='mb-10 mx-auto max-w-xl text-center p-4'>
      <img className='max-w-72 lg:max-w-96 mx-auto' alt='lavora con noi' src='/contact.svg' />
      <h2 className='mb-1 text-2xl md:text-3xl lg:text-4xl   text-primary-500 uppercase'>Contattaci</h2>
      <h3 className='text-lg md:text-xl lg:text-2xl   text-primary-50 mb-4'>
        Restiamo in contatto
      </h3>
      <p className='font-sans text-primary-50 mb-4'>
        Se hai domande o vuoi saperne di più, compila il modulo qui sotto e ti risponderemo al più presto.
      </p>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <input type='text' name='hidden' style={{ display: 'none' }} /> {/* Input nascosto per prevenire spam */}
        <div className='flex gap-2'>
          {/* Input per il nome */}
          <div className='relative w-full'>
            <input
              className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-50 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
              type='text'
              name='name'
              placeholder=' '
              value={userName}
              onChange={(e) => setUserName(e.target.value)} // Aggiorna lo stato del nome
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-50/75 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-50/75 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
            >
              Nome
            </label>
          </div>

          {/* Input per il cognome */}
          <div className='relative w-full'>
            <input
              className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-50 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
              type='text'
              name='family-name'
              placeholder=' '
              value={userSurname}
              onChange={(e) => setUserSurname(e.target.value)} // Aggiorna lo stato del cognome
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-50/75 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-50/75 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
            >
              Cognome
            </label>
          </div>
        </div>

        <div className='flex gap-2'>
          {/* Input per il telefono */}
          <div className='relative w-full'>
            <input
              className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-50 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
              type='tel'
              name='phone'
              placeholder=' '
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)} // Aggiorna lo stato del telefono
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-50/75 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-50/75 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
            >
              Telefono
            </label>
          </div>

          {/* Input per l'email */}
          <div className='relative w-full'>
            <input
              className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-50 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
              type='email'
              name='email'
              placeholder=' '
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)} // Aggiorna lo stato dell'email
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-50/75 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-50/75 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
            >
              Email
            </label>
          </div>
        </div>

        {/* Area di testo per il messaggio */}
        <div className='relative'>
          <textarea
            className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-50 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
            name='message'
            placeholder=' '
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Aggiorna lo stato del messaggio
          />
          <label
            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-50/75 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-50/75 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
          >
            Messaggio
          </label>
        </div>

        {/* Pulsante di invio */}
        <button type='submit' className='w-full bg-primary-500 text-white   py-2 rounded-lg'>
          Invia
        </button>
      </form>

      {/* Messaggio di stato dopo l'invio */}
      {status === 'SUCCESS' && <p className='text-green-500'>Email inviata con successo!</p>}
      {status === 'FAILED' && <p className='text-red-500'>Invio email fallito, riprova.</p>}
    </li>
  )
}

export default Contacts
