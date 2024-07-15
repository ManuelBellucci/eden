import { memo, useCallback } from 'react'

const ContractFilterDropdown = ({ isOpen, toggle, selectedContract, setSelectedContract }) => {
  const contractOptions = ['Vendita', 'Affitto']

  const selectContract = useCallback((contract) => {
    setSelectedContract(contract)
    toggle()
  }, [setSelectedContract, toggle])

  return (
    <div className='relative'>
      <button
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        onClick={toggle}
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {selectedContract || 'Contratto'}
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
            role='listbox'
          >
            {contractOptions.map((contract, index) => (
              <li
                role='option'
                aria-selected={selectedContract === contract}
                key={index}
                onClick={() => selectContract(contract)}
                className='cursor-pointer py-1 px-2 bg-primary-100/75 hover:bg-primary-200 text-primary-950 rounded-lg'
              >
                {contract}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default memo(ContractFilterDropdown)
