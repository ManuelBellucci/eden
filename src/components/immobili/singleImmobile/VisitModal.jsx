import React from 'react'

const VisitModal = ({
  isVisible,
  onClose,
  userName,
  setUserName,
  userSurname,
  setUserSurname,
  userPhone,
  setUserPhone,
  userEmail,
  setUserEmail,
  visitType,
  setVisitType,
  dates,
  selectedDates,
  handleDateChange,
  times,
  selectedTimes,
  handleTimeChange,
  isFormFilled
}) => {
  if (!isVisible) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg shadow-lg p-4 w-full max-w-md'>
        <button onClick={onClose} className='absolute top-0 right-0'>
          &times;
        </button>
        <form>
          <div className='flex gap-2'>
            <input
              className='rounded-lg border p-2 w-full'
              type='text'
              name='name'
              id='modal-name'
              placeholder='Nome'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className='rounded-lg border p-2 w-full'
              type='text'
              name='surname'
              id='modal-surname'
              placeholder='Cognome'
              value={userSurname}
              onChange={(e) => setUserSurname(e.target.value)}
            />
          </div>
          <div className='flex gap-2 mt-2'>
            <input
              className='rounded-lg border p-2 w-full'
              type='text'
              name='phone'
              id='modal-phone'
              placeholder='Telefono'
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />
            <input
              className='rounded-lg border p-2 w-full'
              type='email'
              name='email'
              id='modal-email'
              placeholder='Email'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className='mt-4'>
            <h4 className='font-medium'>Scegli come visitare l'immobile</h4>
            <div className='flex gap-4'>
              <button
                type='button'
                className={`py-2 px-4 text-sm font-medium text-white rounded-lg ${visitType === 'in-person' ? 'bg-primary-400' : 'bg-gray-300 hover:bg-primary-400'}`}
                onClick={() => setVisitType('in-person')}
              >
                Di Persona
              </button>
              <button
                type='button'
                className={`py-2 px-4 text-sm font-medium text-white rounded-lg ${visitType === 'remote' ? 'bg-primary-400' : 'bg-gray-300 hover:bg-primary-400'}`}
                onClick={() => setVisitType('remote')}
              >
                A Distanza
              </button>
            </div>
          </div>
          <div className='mt-4'>
            <h4 className='font-medium'>Seleziona le tue disponibilità</h4>
            <div className='flex gap-2 overflow-x-auto'>
              {dates.map((date) => (
                <button
                  key={date.value}
                  type='button'
                  className={`py-6 px-8 text-sm font-medium text-white rounded-lg ${selectedDates.includes(date.value) ? 'bg-primary-400' : 'bg-gray-300 hover:bg-primary-400'}`}
                  onClick={() => handleDateChange(date.value)}
                >
                  {date.label}
                </button>
              ))}
            </div>
          </div>
          <div className='mt-4'>
            <h4 className='font-medium'>Seleziona le fasce orarie</h4>
            <div className='flex gap-2 overflow-x-auto'>
              {times.map((time) => (
                <button
                  key={time.value}
                  type='button'
                  className={`py-2 px-4 text-sm font-medium text-white rounded-lg ${selectedTimes.includes(time.value) ? 'bg-primary-400' : 'bg-gray-300 hover:bg-primary-400'}`}
                  onClick={() => handleTimeChange(time.value)}
                >
                  {time.label}
                </button>
              ))}
            </div>
          </div>
          <div className='mt-4'>
            <button
              type='submit'
              className={`inline-flex w-full items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-400 rounded-lg hover:bg-primary-400 focus:outline-none ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormFilled}
            >
              Invia richiesta
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VisitModal
