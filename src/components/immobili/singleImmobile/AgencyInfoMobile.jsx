/**
 * Un componente mobile-friendly che visualizza informazioni sull'agenzia e un modulo di contatto.
 * @param {Object} props - Le proprietà del componente.
 * @param {boolean} props.isMobile - Indica se la visualizzazione è su un dispositivo mobile.
 * @param {string} props.userName - Il nome dell'utente.
 * @param {function} props.setUserName - Funzione per aggiornare il nome dell'utente.
 * @param {string} props.userSurname - Il cognome dell'utente.
 * @param {function} props.setUserSurname - Funzione per aggiornare il cognome dell'utente.
 * @param {string} props.userPhone - Il numero di telefono dell'utente.
 * @param {function} props.setUserPhone - Funzione per aggiornare il numero di telefono dell'utente.
 * @param {string} props.userEmail - L'indirizzo email dell'utente.
 * @param {function} props.setUserEmail - Funzione per aggiornare l'email dell'utente.
 * @param {boolean} props.isFormFilled - Indica se il modulo è stato completamente compilato.
 * @param {Object} props.listing - Le informazioni dell'annuncio che includono l'ID della proprietà.
 * @param {function} props.setIsModalVisible - Funzione per attivare la visibilità di un modulo per prenotare una visita.
 *
 * @returns {JSX.Element} Il componente renderizzato.
 */
const AgencyInfoMobile = ({ isMobile, userName, setUserName, userSurname, setUserSurname, userPhone, setUserPhone, userEmail, setUserEmail, isFormFilled, listing, setIsModalVisible }) => {
  return (
    <div className='2xl:hidden flex w-full h-full items-center justify-center col-span-2 bg-gradient-to-b from-primary-900 to-primary-950 px-4 py-6 mt-10 rounded-t-[200px]'>
      {/* Contenitore principale con sfondo a gradiente e padding */}
      <div className='flex flex-col items-center pb-10'>
        {/* Logo dell'agenzia */}
        <img loading='lazy' className='w-24 h-24 mb-3 rounded-full bg-gradient-to-t from-primary-50 to-primary-900 shadow-lg' src='/logo.webp' alt='logo' />
        {/* Nome e indirizzo dell'agenzia */}
        <h5 className='mb-1 text-3xl font-medium text-primary-50'>Eden House</h5>
        <span className='text-xl   text-primary-50'>Via Saragozza 112/O, Bologna (BO)</span>
        <span className='text-xl   text-primary-50  '>051 541 541</span>

        {/* Modulo per l'inserimento dell'utente */}
        <form className='mt-10'>
          <h3 className='text-2xl text-center mb-2 text-primary-50'>Ti interessa?</h3>
          <div className='flex flex-col gap-2'>
            {/* Campi per Nome e Cognome */}
            <div className='flex gap-2'>
              <div className='relative w-full'>
                <input
                  className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-50 p-2 w-full peer h-full bg-transparent text-primary-50 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                  type='text'
                  name='name'
                  id='name'
                  placeholder=' ' // Placeholder per accessibilità
                  value={userName} // Input controllato per il nome dell'utente
                  onChange={(e) => setUserName(e.target.value)} // Funzione di aggiornamento
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
                  value={userSurname} // Input controllato per il cognome dell'utente
                  onChange={(e) => setUserSurname(e.target.value)} // Funzione di aggiornamento
                />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-50/75 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-50/75 transition-all -top-1.5 peer-placeholder-shown:text-base text-[14px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-50 peer-focus:text-primary-50 before:border-primary-50 peer-focus:before:!border-blue-600 after:border-primary-50 peer-focus:after:!border-blue-600 transition-all ease-in"
                >Cognome
                </label>
              </div>
            </div>

            {/* Campi per Telefono e Email */}
            <div className='flex gap-2'>
              <div className='relative w-full'>
                <input
                  className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-50 p-2 w-full peer h-full bg-transparent text-primary-50 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder=' '
                  value={userPhone} // Input controllato per il numero di telefono dell'utente
                  onChange={(e) => setUserPhone(e.target.value)} // Funzione di aggiornamento
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
                  value={userEmail} // Input controllato per l'email dell'utente
                  onChange={(e) => setUserEmail(e.target.value)} // Funzione di aggiornamento
                />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-50/75 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-50/75 transition-all -top-1.5 peer-placeholder-shown:text-base text-[14px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-50 peer-focus:text-primary-50 before:border-primary-50 peer-focus:before:!border-blue-600 after:border-primary-50 peer-focus:after:!border-blue-600 transition-all ease-in"
                >Email
                </label>
              </div>
            </div>
          </div>

          {/* Pulsanti per richiedere informazioni o prenotare una visita */}
          <div className='flex flex-col text-center mt-4 gap-2'>
            <a
              href={`https://wa.me/393517404147?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+chiedere+un+informazione+in+merito+all'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
              className={`font-sans flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-center text-primary-950 bg-primary-50 rounded-lg hover:bg-primary-500 focus:outline-none ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormFilled}
              onClick={(e) => !isFormFilled && e.preventDefault()}
            >
              Richiedi informazioni su WhatsApp <img loading='lazy' src='/whatsapplogo.svg' alt='whatsapp icon' className='w-6 h-6 ml-2' />
            </a>
            <a
              href={`https://wa.me/393517404147?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+prenotare+una+visione+per+l'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
              className={`font-sans flex justify-between items-center py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-primary-50 rounded-lg border w-full border-gray-200 hover:bg-primary-100/75 hover:text-primary-70 ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormFilled}
              onClick={(e) => !isFormFilled && e.preventDefault()}
            >
              Richiedi una visita su WhatsApp <img loading='lazy' src='/whatsapplogo.svg' alt='whatsapp icon' className='w-6 h-6 ml-2' />
            </a>
            <button
              aria-label='Richiedi una visita tramite modulo'
              type='button'
              className='font-sans flex justify-between items-center py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-primary-50 rounded-lg border w-full border-gray-200 hover:bg-primary-100/75 hover:text-primary-70'
              onClick={() => setIsModalVisible(true)}
            >
              Richiedi una visita tramite modulo <img loading='lazy' src='/form.svg' alt='form icon' className='w-6 h-6 ml-2' />
            </button>

            {isMobile &&
              (
                <a
                  href='tel:+393517404147'
                  className='font-sans flex justify-between items-center py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-primary-50 rounded-lg border w-full border-gray-200 hover:bg-primary-100/75 hover:text-primary-70'
                >
                  Chiama ora in centralino <img loading='lazy' src='/call.svg' alt='phone icon' className='w-6 h-6 ml-2' />
                </a>
              )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default AgencyInfoMobile
