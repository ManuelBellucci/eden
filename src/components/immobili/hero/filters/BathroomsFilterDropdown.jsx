import { useState } from "react";

const BathroomsFilterDropdown = ({ isOpen, toggle }) => {
    const [fromBathrooms, setFromBathrooms] = useState('');
    const [toBathrooms, setToBathrooms] = useState('');

    const bathroomsOptions = ['1', '2', '3', '>3'];

    const selectBathrooms = (bathrooms) => {
        if (!fromBathrooms) {
            setFromBathrooms(bathrooms);
        } else {
            setToBathrooms(bathrooms);
        }

        if (fromBathrooms && toBathrooms) {
            applyBathroomsFilter();
        }
    };

    const getBathroomsLabel = () => {
        if (!fromBathrooms && !toBathrooms) return 'Bagni';
        if (fromBathrooms && toBathrooms) {
            const fromLabel = `${fromBathrooms}`;
            const toLabel = `${toBathrooms}`;
            return `Da ${fromLabel} a ${toLabel} bagni`;
        } else if (fromBathrooms) {
            const fromLabel = `${fromBathrooms}`;
            return `Da ${fromLabel} bagni`;
        } else {
            const toLabel = `${toBathrooms}`;
            return `Fino a ${toLabel} bagni`;
        }
    };

    const applyBathroomsFilter = () => {
        toggle();
    };

    return (
        <div className="relative">
            <button
                onClick={toggle}
                className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600"
            >
                {getBathroomsLabel()}
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
                    <div className="flex flex-col mb-4 max-h-40 overflow-y-hidden">
                        <ul className="space-y-1">
                            {bathroomsOptions.map((bathrooms, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer py-1 px-2 bg-gray-100 hover:bg-primary-100 text-gray-800 hover:text-primary-900 rounded-lg"
                                    onClick={() => selectBathrooms(bathrooms)}
                                >
                                    {bathrooms}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        type="button"
                        className="w-full px-4 py-2 text-white bg-primary-500 rounded-lg hover:bg-primary-600"
                        onClick={applyBathroomsFilter}
                    >
                        Applicare filtri
                    </button>
                </div>
            )}
        </div>
    );
};

export default BathroomsFilterDropdown;
