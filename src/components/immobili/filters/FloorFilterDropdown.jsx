import { useCallback, memo } from 'react'

const FloorFilterDropdown = ({ isOpen, toggle, selectedFloor, setSelectedFloor }) => {
  const floorOptions = ['Indifferente', 'Piano terra', 'Piani intermedi', 'Ultimo piano']

  const selectFloor = useCallback((floor) => {
    if (floor === 'Indifferente') {
      setSelectedFloor('')
    } else {
      setSelectedFloor(floor)
    }
    toggle()
  }, [setSelectedFloor, toggle])

  const getFloorLabel = () => {
    return selectedFloor || 'Piano'
  }

  const isSelected = (floor) => {
    return selectedFloor === floor || (!selectedFloor && floor === 'Indifferente')
  }

  return (
    <div className='relative'>
      <button
        aria-label='Open floor dropdown'
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        onClick={toggle}
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getFloorLabel()}
        <svg
          className='ml-2 w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
            className='transition-all ease-in'
          />
        </svg>
      </button>

      {isOpen && (
        <div className='mt-2 w-full bg-primary-50 border rounded-lg shadow-lg z-10 p-4'>
          <div className='flex flex-col max-h-40 overflow-hidden'>
            <ul className='space-y-1'>
              {floorOptions.map((floor, index) => (
                <li
                  key={index}
                  role='option'
                  aria-selected={isSelected(floor)}
                  onClick={() => selectFloor(floor)}
                  className={`cursor-pointer py-1 px-2 rounded-lg text-lg transition-all ${isSelected(floor) ? 'bg-primary-500 text-primary-50' : 'bg-primary-100/75 text-primary-950 hover:bg-primary-200'}`}
                >
                  {floor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(FloorFilterDropdown)
