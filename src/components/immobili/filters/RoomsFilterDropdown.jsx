import { memo, useCallback, useState } from 'react'

const RoomsFilterDropdown = ({ isOpen, toggle, selectedRooms, setSelectedRooms }) => {
  const [focusedField, setFocusedField] = useState('')
  const roomsOptions = ['Indifferente', '1', '2', '3', '4', '5']

  const selectRooms = useCallback((rooms) => {
    if (rooms === 'Indifferente') {
      setSelectedRooms({ from: '', to: '' })
      setFocusedField('')
      return
    }

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
  }, [setSelectedRooms, focusedField, selectedRooms])

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

  const isSelected = (rooms) => {
    return selectedRooms.from === rooms || selectedRooms.to === rooms || (!selectedRooms.from && !selectedRooms.to && rooms === 'Indifferente')
  }

  const isDisabled = (rooms) => {
    const sanitizedRooms = rooms === 'Indifferente' ? '' : rooms
    return selectedRooms.from && sanitizedRooms && parseInt(sanitizedRooms) < parseInt(selectedRooms.from)
  }

  return (
    <div className='relative'>
      <button
        aria-label='Open rooms dropdown'
        aria-haspopup='true'
        aria-expanded={isOpen}
        onClick={toggle}
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getRoomsLabel()}
        <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} className='transition-all ease-in' />
        </svg>
      </button>

      {isOpen && (
        <div className='mt-2 w-full bg-primary-50 border rounded-lg shadow-lg z-10 p-4'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='fromRooms' className='mb-2 text-sm font-medium text-primary-950'>
              Da
            </label>
            <input
              type='number'
              id='fromRooms'
              aria-label='Minimo Locali'
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Minimo Locali'
              value={selectedRooms.from || ''}
              onChange={(e) => setSelectedRooms({ ...selectedRooms, from: e.target.value })}
              onFocus={() => setFocusedField('fromRooms')}
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='toRooms' className='mb-2 text-sm font-medium text-primary-950'>
              Fino a
            </label>
            <input
              type='number'
              id='toRooms'
              aria-label='Massimo Locali'
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Massimo Locali'
              value={selectedRooms.to || ''}
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
                  aria-selected={isSelected(rooms)}
                  aria-disabled={isDisabled(rooms)}
                  className={`cursor-pointer mr-2 py-1 px-2 rounded-lg text-lg transition-all ${isSelected(rooms) ? 'bg-primary-500 text-primary-50' : isDisabled(rooms) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary-100/75 text-primary-950 hover:bg-primary-200'}`}
                  onClick={() => !isDisabled(rooms) && selectRooms(rooms)}
                >
                  {rooms}
                </li>
              ))}
            </ul>
          </div>
          <button
            aria-label='Apply rooms filter'
            className='w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600'
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
