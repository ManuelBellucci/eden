import { useState } from "react"

const PriceFilterDropdown = ({ isOpen, toggle }) => {
    const [fromPrice, setFromPrice] = useState('')
    const [toPrice, setToPrice] = useState('')
    const [focusedField, setFocusedField] = useState('')

    const priceOptions = [
        'Indifferente', '50.000 €', '60.000 €', '70.000 €', '80.000 €',
        '90.000 €', '100.000 €', '120.000 €', '140.000 €', '160.000 €',
        '180.000 €', '200.000 €', '220.000 €', '240.000 €', '260.000 €',
        '280.000 €', '300.000 €', '320.000 €', '340.000 €', '360.000 €',
        '380.000 €', '400.000 €', '450.000 €', '500.000 €', '550.000 €',
        '600.000 €', '650.000 €', '700.000 €', '750.000 €', '800.000 €',
        '850.000 €', '900.000 €', '950.000 €', '1.000.000 €',
        '1.500.000 €', '2.000.000 €', '2.200.000 €', '2.400.000 €',
        '2.600.000 €', '2.800.000 €', '3.000.000 €', '3.500.000 €',
        '4.000.000 €', '4.500.000 €', '5.000.000 €'
    ]

    const selectPrice = (price) => {
        const sanitizedPrice = price.replace(' €', '').replace('.', '')
        if (!fromPrice || focusedField === 'fromPrice') {
            setFromPrice(price === 'Indifferente' ? '' : sanitizedPrice)
            setFocusedField('')
        } else if (!toPrice || focusedField === 'toPrice') {
            setToPrice(price === 'Indifferente' ? '' : sanitizedPrice)
            setFocusedField('')
        }

        if (fromPrice && toPrice) {
            applyPriceFilter()
        }
    }

    const getPriceLabel = () => {
        if (!fromPrice && !toPrice) return 'Prezzo'
        if (fromPrice && toPrice) {
            const fromLabel = `${Number(fromPrice).toLocaleString()}€`
            const toLabel = `${Number(toPrice).toLocaleString()}€`
            return `Da ${fromLabel} a ${toLabel}`
        } else if (fromPrice) {
            const fromLabel = `${Number(fromPrice).toLocaleString()}€`
            return `Da ${fromLabel}`
        } else {
            const toLabel = `${Number(toPrice).toLocaleString()}€`
            return `Fino a ${toLabel}`
        }
    }

    const applyPriceFilter = () => {
        toggle()
    }

    return (
        <div className="relative">
            <button
                onClick={toggle}
                className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600"
            >
                {getPriceLabel()}
                <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                        className="transition-all ease-in"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10 p-4">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="fromPrice" className="mb-2 text-sm font-medium text-gray-900">
                            From
                        </label>
                        <input
                            type="number"
                            id="fromPrice"
                            className="px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100"
                            placeholder="Minimo (€)"
                            value={fromPrice}
                            onChange={(e) => setFromPrice(e.target.value)}
                            onFocus={() => setFocusedField('fromPrice')}
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="toPrice" className="mb-2 text-sm font-medium text-gray-900">
                            To
                        </label>
                        <input
                            type="number"
                            id="toPrice"
                            className="px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100"
                            placeholder="Massimo (€)"
                            value={toPrice}
                            onChange={(e) => setToPrice(e.target.value)}
                            onFocus={() => setFocusedField('toPrice')}
                        />
                    </div>
                    <div className="flex flex-col mb-4 max-h-40 overflow-y-scroll">
                        <ul className="space-y-1">
                            {priceOptions.map((price, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer py-1 px-2 bg-gray-100 hover:bg-primary-100 text-gray-800 hover:text-primary-900 rounded-lg"
                                    onClick={() => selectPrice(price)}
                                >
                                    {price}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        type="button"
                        className="w-full px-4 mt-4 py-2 text-white bg-primary-500 rounded-lg hover:bg-primary-600"
                        onClick={applyPriceFilter}
                    >
                        Apply
                    </button>
                </div>
            )}
        </div>
    )
}

export default PriceFilterDropdown
