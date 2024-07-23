import { memo, useCallback, useState } from 'react'

const SizeFilterDropdown = ({ isOpen, toggle, selectedSize, setSelectedSize }) => {
  const sizeOptions = [
    'Indifferente', '20 m²', '40 m²', '60 m²', '80 m²',
    '100 m²', '120 m²', '140 m²', '160 m²', '180 m²',
    '200 m²', '250 m²', '300 m²', '350 m²', '400 m²',
    '500 m²', '600 m²', '700 m²', '800 m²', '900 m²', '1.000 m²'
  ]
  const [focusedField, setFocusedField] = useState('')

  const selectSize = useCallback((size) => {
    if (size === 'Indifferente') {
      setSelectedSize({ from: '', to: '' })
      setFocusedField('')
      return
    }

    const sanitizedSize = size.replace(' m²', '')
    if (!selectedSize.from || focusedField === 'fromSize') {
      setSelectedSize({ ...selectedSize, from: sanitizedSize })
      setFocusedField('')
    } else if (!selectedSize.to || focusedField === 'toSize') {
      setSelectedSize({ ...selectedSize, to: sanitizedSize })
      setFocusedField('')
    }

    // If both size fields are filled, close the dropdown
    if (selectedSize.from && selectedSize.to) {
      applySizeFilter()
    }
  }, [setSelectedSize, focusedField, selectedSize])

  const getSizeLabel = () => {
    if (!selectedSize.from && !selectedSize.to) return 'Superficie'
    if (selectedSize.from && selectedSize.to) {
      const fromLabel = `${selectedSize.from} m²`
      const toLabel = `${selectedSize.to} m²`
      return `Da ${fromLabel} a ${toLabel}`
    } else if (selectedSize.from) {
      const fromLabel = `${selectedSize.from} m²`
      return `Da ${fromLabel}`
    } else {
      const toLabel = `${selectedSize.to} m²`
      return `Fino a ${toLabel}`
    }
  }

  const applySizeFilter = () => {
    toggle()
  }

  const isSelected = (size) => {
    const sanitizedSize = size === 'Indifferente' ? '' : size.replace(' m²', '')
    return selectedSize.from === sanitizedSize || selectedSize.to === sanitizedSize || (!selectedSize.from && !selectedSize.to && size === 'Indifferente')
  }

  const isDisabled = (size) => {
    const sanitizedSize = size === 'Indifferente' ? '' : size.replace(' m²', '')
    return selectedSize.from && sanitizedSize && parseInt(sanitizedSize) < parseInt(selectedSize.from)
  }

  return (
    <div className='relative'>
      <button
        aria-haspopup='true'
        aria-expanded={isOpen}
        onClick={toggle}
        className='flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 transition-all text-xl'
      >
        {getSizeLabel()}
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
          <div className='flex flex-col mb-4'>
            <label htmlFor='fromSize' className='mb-2 text-sm font-medium text-primary-950'>
              Da
            </label>
            <input
              type='number'
              id='fromSize'
              aria-label='Minimo Superficie'
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Minimo (m²)'
              value={selectedSize.from || ''}
              onChange={(e) => setSelectedSize({ ...selectedSize, from: e.target.value })}
              onFocus={() => setFocusedField('fromSize')}
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='toSize' className='mb-2 text-sm font-medium text-primary-950'>
              Fino a
            </label>
            <input
              type='number'
              id='toSize'
              aria-label='Massimo Superficie'
              className='px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100'
              placeholder='Massimo (m²)'
              value={selectedSize.to || ''}
              onChange={(e) => setSelectedSize({ ...selectedSize, to: e.target.value })}
              onFocus={() => setFocusedField('toSize')}
            />
          </div>
          <div className='flex flex-col mb-4 max-h-40 overflow-y-scroll'>
            <ul className='space-y-1'>
              {sizeOptions.map((size, index) => (
                <li
                  key={index}
                  role='option'
                  aria-selected={isSelected(size)}
                  aria-disabled={isDisabled(size)}
                  className={`cursor-pointer mr-2 py-1 px-2 rounded-lg text-lg transition-all ${isSelected(size) ? 'bg-primary-500 text-primary-50' : isDisabled(size) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary-100/75 text-primary-950 hover:bg-primary-200'}`}
                  onClick={() => !isDisabled(size) && selectSize(size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <button
            type='button'
            className='w-full px-4 py-2 text-primary-50 bg-primary-500 rounded-lg hover:bg-primary-600'
            onClick={applySizeFilter}
          >
            Applica
          </button>
        </div>
      )}
    </div>
  )
}

export default memo(SizeFilterDropdown)
