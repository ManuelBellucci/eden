const AgencyInfoMobile = ({ isMobile, userName, setUserName, userSurname, setUserSurname, userPhone, setUserPhone, userEmail, setUserEmail, isFormFilled, listing, setIsModalVisible }) => {
  return (
    <div className='2xl:hidden flex w-full h-full items-center justify-center col-span-2 bg-gray-100 px-4 py-6 mt-10 rounded-t-[200px]'>
      <div className='flex flex-col items-center pb-10'>
        <img loading='lazy' className='w-24 h-24 mb-3 rounded-full bg-gradient-to-t from-white to-transparent shadow-lg' src='/logotemp.webp' alt='logo' />
        <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>Eden House</h5>
        <span className='text-sm text-gray-500'>Via Saragozza 112/O, Bologna (BO)</span>
        <span className='text-sm text-gray-500 font-bold'>051 541 541</span>
        <form className='mt-10'>
          <h3 className='text-2xl text-center mb-2'>Ti interessa?</h3>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <div className='w-full relative'>
                <input className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5' type='text' name='name' id='name' placeholder=' ' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-400 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
                >Nome
                </label>
              </div>
              <div className='w-full relative'>
                <input className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5' type='text' name='surname' id='surname' placeholder=' ' value={userSurname} onChange={(e) => setUserSurname(e.target.value)} />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-400 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
                >Cognome
                </label>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='w-full relative'>
                <input className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5' type='text' name='phone' id='phone' placeholder=' ' value={userPhone} onChange={(e) => setUserPhone(e.target.value)} />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-400 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
                >Numero di telefono
                </label>
              </div>
              <div className='w-full relative'>
                <input className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5' type='email' name='email' id='email' placeholder=' ' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-400 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
                >Email
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-col text-center mt-4 gap-2'>
            <a
              href={`https://wa.me/393517404147?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+chiedere+un+informazione+in+merito+all'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
              className={`flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-center text-black bg-primary-300 rounded-lg hover:bg-primary-400 focus:outline-none ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormFilled}
              onClick={(e) => !isFormFilled && e.preventDefault()}
            >
              Richiedi informazioni <img loading='lazy' src='/whatsapplogo.svg' alt='whatsapp icon' className='w-6 h-6 ml-2' />
            </a>
            <a
              href={`https://wa.me/393517404147?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+prenotare+una+visione+per+l'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
              className={`flex justify-between items-center py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-white rounded-lg border w-full border-gray-200 hover:bg-gray-100 hover:text-primary-70 ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormFilled}
              onClick={(e) => !isFormFilled && e.preventDefault()}
            >
              Richiedi una visita <img loading='lazy' src='/whatsapplogo.svg' alt='whatsapp icon' className='w-6 h-6 ml-2' />
            </a>
            <button
              type='button'
              className='flex justify-between items-center py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-white rounded-lg border w-full border-gray-200 hover:bg-gray-100 hover:text-primary-70'
              onClick={() => setIsModalVisible(true)}
            >
              Richiedi una visita <img loading='lazy' src='/form.svg' alt='form icon' className='w-6 h-6 ml-2' />
            </button>

            {isMobile &&
                  (
                    <a
                      href='tel:+393517404147'
                      className='flex justify-between items-center py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-white rounded-lg border w-full border-gray-200 hover:bg-gray-100 hover:text-primary-70'
                    >
                      Chiama ora <img loading='lazy' src='/call.svg' alt='phone icon' className='w-6 h-6 ml-2' />
                    </a>
                  )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default AgencyInfoMobile
