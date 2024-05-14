import { memo, useCallback, useState } from 'react'

const RoomsFilterDropdown = ({ isOpen, toggle, selectedRooms, setSelectedRooms }) => {
  const [focusedField, setFocusedField] = useState('')
  const roomsOptions = ['1', '2', '3', '4', '5']

  const selectRooms = useCallback((rooms) => {
    const sanitizedRooms = rooms.replace('.', '')

    if (!selectedRooms.from || focusedField === 'fromRooms') {
      setSelectedRooms({ ...selectedRooms, from: sanitizedRooms })
      setFocusedField('')
    } else if (!selectedRooms.to || focusedField === 'toRooms') {
      setSelectedRooms({ ...selectedRooms, to: sanitizedRooms })
      setFocusedField('')
    }

    if (selectedRooms.from && selectedRooms.to) {
      applyRoomsFilter()
    }
  }, [setSelectedRooms, focusedField])

  const formatRoomLabel = (num) => (num === '1' ? 'locale' : 'locali')

  const getRoomsLabel = () => {
    if (!selectedRooms.from && !selectedRooms.to) return 'Locali'
    if (selectedRooms.from && selectedRooms.to) {
      const fromLabel = `${selectedRooms.from}`
      const toLabel = `${selectedRooms.to}`
      return `Da ${fromLabel} a ${toLabel} ${formatRoomLabel(toLabel)}`
    } else if (selectedRooms.from) {
      const fromLabel = `${selectedRooms.from}`
      return `Da ${fromLabel} ${formatRoomLabel(fromLabel)}`
    } else {
      const toLabel = `${selectedRooms.to}`
      return `Fino a ${toLabel} ${formatRoomLabel(toLabel)}`
    }
  }

  const applyRoomsFilter = () => {
    toggle()
  }

  return (
    <div className='relative'>
      <button
        aria-haspopup='true'
        aria-expanded={isOpen}
        onClick={toggle}
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600'
      >
        {getRoomsLabel()}
        <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} className='transition-all ease-in' />
        </svg>
      </button>

      {isOpen && (
        <div className='mt-2 w-full bg-white border rounded-lg shadow-lg z-10 p-4'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='fromRooms' className='mb-2 text-sm font-medium text-gray-900'>
              Da
            </label>
            <input
              type='number'
              id='fromRooms'
              aria-label='Minimo Locali'
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Minimo Locali'
              value={selectedRooms.from}
              onChange={(e) => setSelectedRooms({ ...selectedRooms, from: e.target.value })}
              onFocus={() => setFocusedField('fromRooms')}
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='toRooms' className='mb-2 text-sm font-medium text-gray-900'>
              Fino a
            </label>
            <input
              type='number'
              id='toRooms'
              aria-label='Massimo Locali'
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Massimo Locali'
              value={selectedRooms.to}
              onChange={(e) => setSelectedRooms({ ...selectedRooms, to: e.target.value })}
              onFocus={() => setFocusedField('toRooms')}
            />
          </div>
          <div className='flex flex-col mb-4 max-h-40 overflow-y-scroll'>
            <ul className='space-y-1'>
              {roomsOptions.map((rooms, index) => (
                <li
                  key={index}
                  role='option'
                  aria-selected={selectedRooms.from === rooms || selectedRooms.to === rooms}
                  className='cursor-pointer mr-2 py-1 px-2 bg-gray-100 hover:bg-primary-100 text-gray-800 hover:text-primary-900 rounded-lg'
                  onClick={() => selectRooms(rooms)}
                >
                  {rooms}
                </li>
              ))}
            </ul>
          </div>
          <button
            className='w-full px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600'
            onClick={applyRoomsFilter}
          >
            Applica
          </button>
        </div>
      )}
    </div>
  )
}

export default memo(RoomsFilterDropdown)
