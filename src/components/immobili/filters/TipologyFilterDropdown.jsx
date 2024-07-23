import { memo, useCallback } from 'react'

const TipologyFilterDropdown = ({ isOpen, toggle, selectedTipology, setSelectedTipology }) => {
  const tipologyOptions = [
    'Indifferente', 'Appartamenti', 'Attici', 'Ville e villini',
    'Nuove costruzioni', 'Garage e posti auto', 'Uffici e negozi', 'Magazzini'
  ]

  const selectTipology = useCallback((tipology) => {
    if (tipology === 'Indifferente') {
      setSelectedTipology('')
    } else {
      setSelectedTipology(tipology)
    }
    toggle()
  }, [setSelectedTipology, toggle])

  const getTipologyLabel = () => {
    return selectedTipology || 'Tipologia'
  }

  const isSelected = (tipology) => {
    return selectedTipology === tipology || (!selectedTipology && tipology === 'Indifferente')
  }

  return (
    <div className='relative'>
      <button
        aria-haspopup='true'
        aria-expanded={isOpen}
        onClick={toggle}
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getTipologyLabel()}
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
          <ul className='space-y-1'>
            {tipologyOptions.map((tipology, index) => (
              <li
                role='option'
                aria-selected={isSelected(tipology)}
                key={index}
                className={`cursor-pointer py-1 px-2 rounded-lg text-lg transition-all ${isSelected(tipology) ? 'bg-primary-500 text-primary-50' : 'bg-primary-100/75 text-primary-950 hover:bg-primary-200'}`}
                onClick={() => selectTipology(tipology)}
              >
                {tipology}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default memo(TipologyFilterDropdown)
