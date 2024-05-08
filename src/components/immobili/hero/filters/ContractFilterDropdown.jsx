import { useState } from 'react'

const ContractFilterDropdown = ({ isOpen, toggle }) => {
    const contractOptions = [
        'Vendita', 'Affitto'
    ]

    const [selectedContract, setSelectedContract] = useState('')

    const selectContract = (contract) => {
        setSelectedContract(contract)
        applyContractFilter()
    }

    const applyContractFilter = () => {
        toggle()
    }

    const getContractLabel = () => (selectedContract ? selectedContract : 'Contratto')

    return (
        <div className="relative">
            <button
                onClick={toggle}
                className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600"
            >
                {getContractLabel()}
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
                    <ul className="space-y-1">
                        {contractOptions.map((contract, index) => (
                            <li
                                key={index}
                                className="cursor-pointer py-1 px-2 bg-gray-100 hover:bg-primary-100 text-gray-800 hover:text-primary-900 rounded-lg"
                                onClick={() => selectContract(contract)}
                            >
                                {contract}
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="w-full px-4 mt-4 py-2 text-white bg-primary-500 rounded-lg hover:bg-primary-600"
                        onClick={applyContractFilter}
                    >
                        Applicare filtri
                    </button>
                </div>
            )}
        </div>
    )
}

export default ContractFilterDropdown
