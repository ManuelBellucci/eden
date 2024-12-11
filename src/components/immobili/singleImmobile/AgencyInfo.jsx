/**
 * Il componente AgencyInfo visualizza le informazioni dell'agenzia e fornisce un modulo di contatto per gli utenti.
 * Permette di richiedere informazioni o prenotare una visita tramite WhatsApp, modulo di contatto o chiamata diretta.
 * @param {boolean} isMobile - Indica se l'utente sta utilizzando un dispositivo mobile.
 * @param {string} userName - Il nome dell'utente inserito nel modulo.
 * @param {function} setUserName - Funzione per aggiornare il nome dell'utente.
 * @param {string} userSurname - Il cognome dell'utente inserito nel modulo.
 * @param {function} setUserSurname - Funzione per aggiornare il cognome dell'utente.
 * @param {string} userPhone - Il numero di telefono inserito dall'utente.
 * @param {function} setUserPhone - Funzione per aggiornare il numero di telefono dell'utente.
 * @param {string} userEmail - L'indirizzo email inserito dall'utente.
 * @param {function} setUserEmail - Funzione per aggiornare l'email dell'utente.
 * @param {boolean} isFormFilled - Indica se tutti i campi richiesti nel modulo sono stati riempiti correttamente.
 * @param {object} listing - Oggetto contenente i dettagli dell'immobile visualizzato.
 * @param {function} setIsModalVisible - Funzione per mostrare o nascondere il modulo di richiesta.
 */
const AgencyInfo = ({
  isMobile,
  userName,
  setUserName,
  userSurname,
  setUserSurname,
  userPhone,
  setUserPhone,
  userEmail,
  setUserEmail,
  isFormFilled,
  listing,
  setIsModalVisible
}) => {
  return (
    <div className='hidden 2xl:flex w-full h-full items-center justify-center col-span-2 bg-primary-900 shadow-md px-4 py-6 rounded-lg'>
      <div className='flex flex-col items-center pb-10'>
        {/* Logo dell'agenzia */}
        <img
          loading='lazy'
          className='w-24 h-24 mb-3 rounded-full bg-gradient-to-t from-primary-50 to-primary-900 shadow-lg'
          src='/logo.webp'
          alt='logo'
        />

        {/* Nome e dettagli dell'agenzia */}
        <h5 className='mb-1 text-3xl font-medium text-primary-50'>Eden House</h5>
        <span className='text-xl text-primary-50'>Via Saragozza 112/O, Bologna (BO)</span>
        <span className='text-xl text-primary-50  '>051 541 541</span>

        {/* Modulo di contatto */}
        <form className='mt-10'>
          <h3 className='text-2xl text-center mb-2 text-primary-50'>Ti interessa?</h3>

          {/* Input per Nome e Cognome */}
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <div className='relative w-full'>
                <input
                  className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-50 p-2 w-full peer h-full bg-transparent text-primary-50 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                  type='text'
                  name='name'
                  id='name'
                  placeholder=' '
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-50/75 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-50/75 transition-all -top-1.5 peer-placeholder-shown:text-base text-[14px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-50 peer-focus:text-primary-50 before:border-primary-50 peer-focus:before:!border-blue-600 after:border-primary-50 peer-focus:after:!border-blue-600 transition-all ease-in"
                >Nome
                </label>
              </div>

              <div className='relative w-full'>
                <input
                  className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-50 p-2 w-full peer h-full bg-transparent text-primary-50 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                  type='text'
                  name='surname'
                  id='surname'
                  placeholder=' '
                  value={userSurname}
                  onChange={(e) => setUserSurname(e.target.value)}
                />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-50/75 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-50/75 transition-all -top-1.5 peer-placeholder-shown:text-base text-[14px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-50 peer-focus:text-primary-50 before:border-primary-50 peer-focus:before:!border-blue-600 after:border-primary-50 peer-focus:after:!border-blue-600 transition-all ease-in"
                >Cognome
                </label>
              </div>
            </div>

            {/* Input per Telefono ed Email */}
            <div className='flex gap-2'>
              <div className='relative w-full'>
                <input
                  className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-50 p-2 w-full peer h-full bg-transparent text-primary-50 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder=' '
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-50/75 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-50/75 transition-all -top-1.5 peer-placeholder-shown:text-base text-[14px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-50 peer-focus:text-primary-50 before:border-primary-50 peer-focus:before:!border-blue-600 after:border-primary-50 peer-focus:after:!border-blue-600 transition-all ease-in"
                >Telefono
                </label>
              </div>

              <div className='relative w-full'>
                <input
                  className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-50 p-2 w-full peer h-full bg-transparent text-primary-50 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                  type='email'
                  name='email'
                  id='email'
                  placeholder=' '
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-50/75 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-50/75 transition-all -top-1.5 peer-placeholder-shown:text-base text-[14px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-50 peer-focus:text-primary-50 before:border-primary-50 peer-focus:before:!border-blue-600 after:border-primary-50 peer-focus:after:!border-blue-600 transition-all ease-in"
                >Email
                </label>
              </div>
            </div>
          </div>

          {/* Pulsanti per inviare richiesta tramite WhatsApp o modulo */}
          <div className='flex flex-col mt-4 gap-2'>
            <a
              href={`https://wa.me/393339471915?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+chiedere+un+informazione+in+merito+all'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
              className={`font-sans flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-center text-primary-950 bg-primary-50 rounded-lg hover:bg-primary-500 focus:outline-none ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormFilled}
              onClick={(e) => !isFormFilled && e.preventDefault()}
            >
              Richiedi informazioni su WhatsApp <img loading='lazy' src='/whatsapplogo.svg' alt='whatsapp icon' className='w-6 h-6 ml-2' />
            </a>

            {/* Richiesta di una visita tramite WhatsApp */}
            <a
              href={`https://wa.me/393339471915?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+prenotare+una+visione+per+l'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
              className={`font-sans flex items-center justify-between py-2 px-4 text-sm font-medium text-center text-primary-900 focus:outline-none bg-primary-50 rounded-lg border w-full border-gray-200 hover:bg-primary-100/75 hover:text-primary-70 ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormFilled}
              onClick={(e) => !isFormFilled && e.preventDefault()}
            >
              Richiedi una visita su WhatsApp <img loading='lazy' src='/whatsapplogo.svg' alt='whatsapp icon' className='w-6 h-6 ml-2' />
            </a>

            {/* Pulsante per richiedere una visita tramite il modulo */}
            <button
              aria-label='Richiedi una visita tramite modulo'
              type='button'
              className='font-sans flex items-center justify-between py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-primary-50 rounded-lg border w-full border-gray-200 hover:bg-primary-100/75 hover:text-primary-70'
              onClick={() => setIsModalVisible(true)}
            >
              Richiedi una visita tramite modulo <img loading='lazy' src='/form.svg' alt='form icon' className='w-6 h-6 ml-2' />
            </button>

            {/* Pulsante di chiamata visibile solo su dispositivi mobili */}
            {isMobile && (
              <a
                href='tel:+390510375731'
                className='font-sans flex justify-between items-center py-2 px-4 text-sm font-medium text-primary-950 bg-primary-50 rounded-lg border w-full border-gray-200 hover:bg-primary-500 hover:text-primary-50'
              >
                Chiamaci <img loading='lazy' src='/call.svg' alt='call icon' className='w-6 h-6 ml-2' />
              </a>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default AgencyInfo
