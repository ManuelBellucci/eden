import { useState, useRef, useEffect } from 'react'

const MultiChoiceDropdown = ({
  options,
  label,
  selectedOptions,
  setSelectedOptions,
  isSingleSelection = false
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Handle outside clicks for closing dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelectionChange = (option) => {
    if (isSingleSelection) {
      setSelectedOptions([option])
    } else {
      setSelectedOptions((prev) => {
        if (prev.includes(option)) {
          return prev.filter((item) => item !== option)
        } else {
          return [...prev, option]
        }
      })
    }
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div ref={dropdownRef} className='relative w-full'>
      <button
        aria-label='Open dropdown'
        onClick={toggleDropdown}
        className='w-full flex items-center justify-between px-4 py-4 text-primary-950 bg-primary-50 border border-primary-300 rounded-lg text-nowrap'
      >
        {label}
        <span className='ml-2 text-xs'>{isDropdownOpen ? '▲' : '▼'}</span>
      </button>
      {isDropdownOpen && (
        <div className='absolute z-10 overflow-y-auto max-h-40 bg-primary-50 border mt-4 flex flex-col items-center border-gray-300 rounded-lg p-2'>
          {options.map((option) => (
            <button
              aria-label='Select option'
              key={option}
              onClick={() => handleSelectionChange(option)}
              className={`px-4 py-2 m-1 rounded-lg w-full ${selectedOptions.includes(option)
                                    ? 'bg-primary-500 text-primary-50'
                                    : 'bg-primary-50/75 text-primary-950'
                                }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default MultiChoiceDropdown
