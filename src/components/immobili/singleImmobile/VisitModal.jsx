import React, { useRef, useState } from 'react'
import { InfoAlert } from '../../commons/Alerts'

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
  const [startIndex, setStartIndex] = useState(0)
  const visibleDatesCount = 4
  const datesContainerRef = useRef(null)

  if (!isVisible) return null

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, dates.length - visibleDatesCount))
  }

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center px-4 bg-primary-950 bg-opacity-50'>
      <div className='bg-primary-50 rounded-lg w-full max-w-xl max-h-[calc(100%-40px)] overflow-y-auto invisible-scrollbar relative'>
        <div className='px-4 py-3 rounded-t-lg bg-primary-100/75 flex justify-between items-center'>

          <button onClick={onClose} className='w-full text-gray-400 hover:text-gray-600'>
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <form className='px-10 pb-10'>
          <InfoAlert bold='Questa non è una prenotazione:' text="le tue disponibilità saranno inviate all'Agenzia che si occuperà di ricontattarti." extraClassNames='mb-8 mt-4' />

          <div className='flex gap-2'>
            <div className='relative w-full'>
              <input
                className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                type='text'
                name='name'
                id='modal-name'
                placeholder=' '
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
              >Nome
              </label>
            </div>
            <div className='relative w-full'>
              <input
                className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                type='text'
                name='surname'
                id='modal-surname'
                placeholder=' '
                value={userSurname}
                onChange={(e) => setUserSurname(e.target.value)}
              />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
              >Cognome
              </label>
            </div>
          </div>

          <div className='flex gap-2 mt-2'>
            <div className='relative w-full'>
              <input
                className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                type='tel'
                name='phone'
                id='modal-phone'
                placeholder=' '
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
              />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
              >Telefono
              </label>
            </div>
            <div className='relative w-full'>
              <input
                className='rounded-lg focus:ring-0 border-0 border-b-2 border-b-primary-300 p-2 w-full peer h-full bg-transparent text-primary-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5'
                type='email'
                name='email'
                id='modal-email'
                autoComplete='email'
                placeholder=' '
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-500 peer-focus:text-blue-600 before:border-primary-300 peer-focus:before:!border-blue-600 after:border-primary-300 peer-focus:after:!border-blue-600 transition-all ease-in"
              >Email
              </label>
            </div>
          </div>

          <div className='mt-4'>
            <h4 className='font-bold text-center mt-6 mb-2'>Scegli come visitare l'immobile</h4>
            <div className='flex'>
              <button
                type='button'
                className={`py-2 px-4 w-full border text-base  text-primary-950 rounded-lg rounded-r-none transition-all ease-in border-r-0 ${visitType === 'in-person' ? 'bg-primary-500 text-primary-50' : 'bg-primary-50 hover:bg-primary-100 '}`}
                onClick={() => setVisitType('in-person')}
              >
                Visita fisica
              </button>
              <button
                type='button'
                className={`py-2 px-4 w-full border text-base  text-primary-950 rounded-lg rounded-l-none transition-all ease-in border-l-0 ${visitType === 'remote' ? 'bg-primary-500 text-primary-50' : 'bg-primary-50 hover:bg-primary-100 '}`}
                onClick={() => setVisitType('remote')}
              >
                Visita virtuale
              </button>
            </div>
          </div>

          <div className='mt-4'>
            <h4 className='font-bold text-center mt-6 mb-2'>Seleziona le tue disponibilità</h4>
            <div className='flex items-center gap-2 relative'>
              <span onClick={handlePrev} className={`px-3 py-2 absolute -left-9 z-50 ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                &lArr;
              </span>
              <div ref={datesContainerRef} className='relative w-full overflow-x-auto'>
                <div
                  className='flex transition-transform duration-500 ease-in-out'
                  style={{ transform: `translateX(-${startIndex * (100 / visibleDatesCount)}%)` }}
                >
                  {dates.map((date) => (
                    <button
                      key={date.value}
                      type='button'
                      className={`py-6 px-4 border text-base transition-all ease-in text-primary-950 rounded-lg ${selectedDates.includes(date.value) ? 'bg-primary-500 text-primary-50' : 'bg-primary-50 hover:bg-primary-100'}`}
                      onClick={() => handleDateChange(date.value)}
                      style={{ minWidth: '30%', marginRight: '4px' }}
                    >
                      <div className='flex flex-col'>
                        <span className='text-sm'>{date.label.split(' ')[0]}</span>
                        <span className='text-xl font-bold'>{date.label.split(' ')[1]}</span>
                        <span className='text-sm'>{date.label.split(' ')[2]}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <span onClick={handleNext} className={`px-3 py-2 absolute -right-9 z-50 ${startIndex >= dates.length - visibleDatesCount ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                &rArr;
              </span>
            </div>
          </div>
          <div className='mt-4'>
            <h4 className='font-bold text-center mt-6 mb-2'>Seleziona le fasce orarie</h4>
            <div className='flex gap-2 overflow-x-auto'>
              {times.map((time) => (
                <button
                  key={time.value}
                  type='button'
                  className={`py-2 px-4 border text-sm text-nowrap w-full transition-all ease-in text-primary-950 rounded-lg ${selectedTimes.includes(time.value) ? 'bg-primary-500 text-primary-50 transition-all ease-in' : 'bg-primary-50 hover:bg-primary-100 '}`}
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
              className={`inline-flex w-full items-center justify-center px-4 py-2 text-base  text-primary-50 bg-primary-500 rounded-lg hover:bg-primary-500  focus:outline-none ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
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
