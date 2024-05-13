import { useState } from 'react'

const PriceFilterDropdown = ({ isOpen, toggle, selectedPrice, setSelectedPrice }) => {
  const [focusedField, setFocusedField] = useState('')

  const priceOptions = [
    'Indifferente', '50.000 €', '60.000 €', '70.000 €', '80.000 €',
    '90.000 €', '100.000 €', '120.000 €', '140.000 €', '160.000 €',
    '180.000 €', '200.000 €', '220.000 €', '240.000 €', '260.000 €',
    '280.000 €', '300.000 €', '320.000 €', '340.000 €', '360.000 €',
    '380.000 €', '400.000 €', '450.000 €', '500.000 €'
  ]

  const selectPrice = (price) => {
    const sanitizedPrice = price.replace(' €', '').replace('.', '')
    if (!selectedPrice.from || focusedField === 'from') {
      setSelectedPrice({ ...selectedPrice, from: price === 'Indifferente' ? '' : sanitizedPrice })
      setFocusedField('')
    } else if (!selectedPrice.to || focusedField === 'to') {
      setSelectedPrice({ ...selectedPrice, to: price === 'Indifferente' ? '' : sanitizedPrice })
      setFocusedField('')
    }

    if (selectedPrice.from && selectedPrice.to) {
      applyPriceFilter()
    }
  }

  const getPriceLabel = () => {
    if (!selectedPrice.from && !selectedPrice.to) return 'Prezzo'
    if (selectedPrice.from && selectedPrice.to) {
      const fromLabel = `${Number(selectedPrice.from).toLocaleString()}€`
      const toLabel = `${Number(selectedPrice.to).toLocaleString()}€`
      return `Da ${fromLabel} a ${toLabel}`
    } else if (selectedPrice.from) {
      const fromLabel = `${Number(selectedPrice.from).toLocaleString()}€`
      return `Da ${fromLabel}`
    } else {
      const toLabel = `${Number(selectedPrice.to).toLocaleString()}€`
      return `Fino a ${toLabel}`
    }
  }

  const applyPriceFilter = () => {
    toggle()
  }

  return (
    <div className='relative'>
      <button
        onClick={toggle}
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600'
      >
        {getPriceLabel()}
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
        <div className='mt-2 w-full bg-white border rounded-lg shadow-lg z-10 p-4'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='fromPrice' className='mb-2 text-sm font-medium text-gray-900'>
              Da
            </label>
            <input
              type='number'
              id='fromPrice'
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Minimo (€)'
              value={selectedPrice.from}
              onChange={(e) => setSelectedPrice({ ...selectedPrice, from: e.target.value })}
              onFocus={() => setFocusedField('from')}
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='toPrice' className='mb-2 text-sm font-medium text-gray-900'>
              Fino a
            </label>
            <input
              type='number'
              id='toPrice'
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Massimo (€)'
              value={selectedPrice.to}
              onChange={(e) => setSelectedPrice({ ...selectedPrice, to: e.target.value })}
              onFocus={() => setFocusedField('to')}
            />
          </div>
          <div className='flex flex-col mb-4 max-h-40 overflow-y-scroll'>
            <ul className='space-y-1'>
              {priceOptions.map((price, index) => (
                <li
                  key={index}
                  className='cursor-pointer mr-2 py-1 px-2 bg-gray-100 hover:bg-primary-100 text-gray-800 hover:text-primary-900 rounded-lg'
                  onClick={() => selectPrice(price)}
                >
                  {price}
                </li>
              ))}
            </ul>
          </div>
          <button
            type='button'
            className='w-full px-4 mt-4 py-2 text-white bg-primary-500 rounded-lg hover:bg-primary-600'
            onClick={applyPriceFilter}
          >
            Applica
          </button>
        </div>
      )}
    </div>
  )
}

export default PriceFilterDropdown
