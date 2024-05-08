
const BathroomsFilterDropdown = ({ isOpen, toggle, selectedBathrooms, setSelectedBathrooms }) => {
    const bathroomsOptions = ['1', '2', '3'];

    const selectBathrooms = (bathrooms) => {
        setSelectedBathrooms(bathrooms);
        toggle();
    };

    const getBathroomsLabel = () => {
        if (!selectedBathrooms) return 'Bagni';
        return `Min. ${selectedBathrooms} ${selectedBathrooms === '1' ? 'bagno' : 'bagni'}`;
    };

    return (
        <div className="relative">
            <button
                onClick={toggle}
                className="flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600"
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
                <div className="mt-2 w-full bg-white border rounded-lg shadow-lg z-10 p-4">
                    <ul className="space-y-1">
                        {bathroomsOptions.map((bathrooms, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer py-1 px-2 bg-gray-100 hover:bg-primary-100 text-gray-800 hover:text-primary-900 rounded-lg ${selectedBathrooms === bathrooms ? 'bg-primary-100 text-primary-900' : ''}`}
                                onClick={() => selectBathrooms(bathrooms)}
                            >
                                {bathrooms}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BathroomsFilterDropdown;
