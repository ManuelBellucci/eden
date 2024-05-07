import { useState } from 'react';

const TipologyFilterDropdown = ({ isOpen, toggle }) => {
    const tipologyOptions = [
        'Appartamenti', 'Attici, ville e villini', 'Nuove costruzioni',
        'Garage e posti auto', 'Uffici e negozi', 'Magazzini'
    ];

    const [selectedTipology, setSelectedTipology] = useState('');

    const selectTipology = (tipology) => {
        setSelectedTipology(tipology);
        applyTipologyFilter();
    };

    const applyTipologyFilter = () => {
        toggle();
    };

    const getTipologyLabel = () => (selectedTipology ? selectedTipology : 'Tipologia');

    return (
        <div className="relative">
            <button
                onClick={toggle}
                className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600"
            >
                {getTipologyLabel()}
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
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10 p-4">
                    <ul className="space-y-1">
                        {tipologyOptions.map((tipology, index) => (
                            <li
                                key={index}
                                className="cursor-pointer py-1 px-2 bg-gray-100 hover:bg-primary-100 text-gray-800 hover:text-primary-900 rounded-lg"
                                onClick={() => selectTipology(tipology)}
                            >
                                {tipology}
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="w-full px-4 mt-4 py-2 text-white bg-primary-500 rounded-lg hover:bg-primary-600"
                        onClick={applyTipologyFilter}
                    >
                        Apply
                    </button>
                </div>
            )}
        </div>
    );
};

export default TipologyFilterDropdown;
