import { memo, useCallback } from 'react'

const BathroomsFilterDropdown = ({ isOpen, toggle, selectedBathrooms, setSelectedBathrooms }) => {
  const bathroomsOptions = ['Indifferente', '1', '2', '3']

  const selectBathrooms = useCallback((bathrooms) => {
    if (bathrooms === 'Indifferente') {
      setSelectedBathrooms('')
    } else {
      setSelectedBathrooms(bathrooms)
    }
    toggle()
  }, [setSelectedBathrooms, toggle])

  const getBathroomsLabel = () => {
    if (!selectedBathrooms) return 'Bagni'
    return selectedBathrooms === 'Indifferente' ? 'Indifferente' : `Min. ${selectedBathrooms} ${selectedBathrooms === '1' ? 'bagno' : 'bagni'}`
  }

  const isSelected = (bathrooms) => {
    return selectedBathrooms === bathrooms || (!selectedBathrooms && bathrooms === 'Indifferente')
  }

  return (
    <div className='relative'>
      <button
        aria-expanded={isOpen}
        aria-controls='bathrooms-dropdown'
        onClick={toggle}
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getBathroomsLabel()}
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
          <ul
            className='space-y-1'
            id='bathrooms-dropdown'
            role='menu'
          >
            {bathroomsOptions.map((bathrooms, index) => (
              <li
                key={index}
                className={`cursor-pointer py-1 px-2 rounded-lg text-lg transition-all ${isSelected(bathrooms) ? 'bg-primary-500 text-primary-50' : 'bg-primary-100/75 text-primary-950 hover:bg-primary-200'}`}
                onClick={() => selectBathrooms(bathrooms)}
                role='menuitem'
              >
                {bathrooms}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default memo(BathroomsFilterDropdown)
