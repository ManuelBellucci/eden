const ExtrasFilterDropdown = ({ isOpen, toggle, selectedExtras, setSelectedExtras }) => {
    const extrasOptions = [
        { label: 'Terrazzo', value: 'terrace' },
        { label: 'Balcone', value: 'balcony' },
        { label: 'Ascensore', value: 'elevator' },
        { label: 'Arredato', value: 'furnished' },
        { label: 'Cantina', value: 'cellar' },
        { label: 'Aria condizionata', value: 'airConditioning' },
        { label: 'Affittato', value: 'rented' },
        { label: 'Ripostiglio', value: 'closet' }
    ];

    const toggleExtra = (value) => {
        setSelectedExtras((prev) => ({ ...prev, [value]: !prev[value] }));
    };

    const getExtrasLabel = () => {
        const selected = extrasOptions.filter((opt) => selectedExtras[opt.value]).map((opt) => opt.label);
        if (selected.length === 0) {
            return 'Extra';
        }
        const firstExtra = selected[0];
        const extraCount = selected.length - 1;
        return extraCount > 0 ? `${firstExtra} (+${extraCount})` : firstExtra;
    };

    return (
        <div className="relative">
            <button
                onClick={toggle}
                className="flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600"
            >
                {getExtrasLabel()}
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
                    <div className="flex flex-col max-h-40 overflow-y-scroll space-y-2">
                        {extrasOptions.map((extra) => (
                            <button
                                key={extra.value}
                                className={`py-1 px-2 mr-2 rounded-lg text-center cursor-pointer transition-all ${selectedExtras[extra.value]
                                    ? 'bg-primary-500 text-white'
                                    : 'bg-gray-100 text-gray-800 hover:bg-primary-100 hover:text-primary-900'
                                    }`}
                                onClick={() => toggleExtra(extra.value)}
                            >
                                {extra.label}
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="w-full px-4 mt-4 py-2 text-white bg-primary-500 rounded-lg hover:bg-primary-600"
                        onClick={toggle}
                    >
                        Applica
                    </button>
                </div>
            )}
        </div>
    );
};

export default ExtrasFilterDropdown;
