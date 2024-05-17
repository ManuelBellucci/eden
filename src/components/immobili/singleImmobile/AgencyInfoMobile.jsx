const AgencyInfoMobile = ({ isMobile, userName, setUserName, userSurname, setUserSurname, userPhone, setUserPhone, userEmail, setUserEmail, isFormFilled, listing, setIsModalVisible }) => {
  return (
    <div className='2xl:hidden flex w-full h-full items-center justify-center col-span-2 bg-white rounded-lg'>
      <div className='flex flex-col items-center pb-10'>
        <img className='w-24 h-24 mb-3 rounded-full shadow-lg' src='/logotemp.png' alt='logo' />
        <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>Eden House</h5>
        <span className='text-sm text-gray-500'>Via Saragozza 112/O, Bologna (BO)</span>
        <span className='text-sm text-gray-500 font-bold'>051 541 541</span>
        <form className='mt-10'>
          <h3 className='text-2xl text-center mb-2'>Ti interessa?</h3>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <input className='rounded-lg' type='text' name='name' id='name' placeholder='Nome' value={userName} onChange={(e) => setUserName(e.target.value)} />
              <input className='rounded-lg' type='text' name='surname' id='surname' placeholder='Cognome' value={userSurname} onChange={(e) => setUserSurname(e.target.value)} />
            </div>
            <div className='flex gap-2'>
              <input className='rounded-lg' type='text' name='name' id='phone' placeholder='Numero di telefono' value={userPhone} onChange={(e) => setUserPhone(e.target.value)} />
              <input className='rounded-lg' type='email' name='email' id='email' placeholder='E-Mail' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            </div>
          </div>
          <div className='flex flex-col text-center mt-4 gap-2'>
            <a
              href={`https://wa.me/393517404147?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+chiedere+un+informazione+in+merito+all'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
              className={`inline-flex w-full items-center justify-center px-4 py-2 text-sm font-medium text-center text-black bg-primary-300 rounded-lg hover:bg-primary-400 focus:outline-none ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormFilled}
              onClick={(e) => !isFormFilled && e.preventDefault()}
            >
              Richiedi informazioni (WhatsApp)
            </a>
            <a
              href={`https://wa.me/393517404147?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+prenotare+una+visione+per+l'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
              className={`py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-white rounded-lg border w-full border-gray-200 hover:bg-gray-100 hover:text-primary-70 ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormFilled}
              onClick={(e) => !isFormFilled && e.preventDefault()}
            >
              Richiedi una visita (WhatsApp)
            </a>
            <button
              type='button'
              className='py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-white rounded-lg border w-full border-gray-200 hover:bg-gray-100 hover:text-primary-70'
              onClick={() => setIsModalVisible(true)}
            >
              Richiedi una visita (Modulo)
            </button>

            {isMobile &&
                  (
                    <a
                      href='tel:+393517404147'
                      className='py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-white rounded-lg border w-full border-gray-200 hover:bg-gray-100 hover:text-primary-70'
                    >
                      Chiama ora
                    </a>
                  )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default AgencyInfoMobile
