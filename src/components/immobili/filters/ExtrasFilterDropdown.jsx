import { useCallback, memo } from 'react'
const ExtrasFilterDropdown = ({ isOpen, toggle, selectedExtras, setSelectedExtras }) => {
  const extrasOptions = [
    { label: 'Terrazzo', value: 'terrace' },
    { label: 'Balcone', value: 'balcony' },
    { label: 'Ascensore', value: 'elevator' },
    { label: 'Arredato', value: 'furnished' },
    { label: 'Cantina', value: 'cellar' },
    { label: 'Aria condizionata', value: 'airConditioning' },
    { label: 'Affittato', value: 'rented' },
    { label: 'Ripostiglio', value: 'closet' }
  ]

  const toggleExtra = useCallback((value) => {
    setSelectedExtras((prev) => ({ ...prev, [value]: !prev[value] }))
  }, [setSelectedExtras])

  const getExtrasLabel = () => {
    const selected = extrasOptions.filter((opt) => selectedExtras[opt.value]).map((opt) => opt.label)
    if (selected.length === 0) {
      return 'Extra'
    }
    const firstExtra = selected[0]
    const extraCount = selected.length - 1
    return extraCount > 0 ? `${firstExtra} (+${extraCount})` : firstExtra
  }

  return (
    <div className='relative'>
      <button
        aria-haspopup='true'
        aria-expanded={isOpen}
        onClick={toggle}
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getExtrasLabel()}
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
          <div className='flex flex-col max-h-40 overflow-y-scroll space-y-2'>
            {extrasOptions.map((extra) => (
              <button
                key={extra.value}
                aria-checked={selectedExtras[extra.value]}
                role='checkbox'
                className={`py-1 px-2 mr-2 text-lg rounded-lg text-center cursor-pointer transition-all ${selectedExtras[extra.value]
                                    ? 'bg-primary-500 text-primary-50'
                                    : 'text-primary-950 bg-primary-100/75 hover:bg-primary-200'
                                    }`}
                onClick={() => toggleExtra(extra.value)}
              >
                {extra.label}
              </button>
            ))}
          </div>

        </div>
      )}
    </div>
  )
}

export default memo(ExtrasFilterDropdown)
