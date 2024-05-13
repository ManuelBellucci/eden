const FloorFilterDropdown = ({ isOpen, toggle, selectedFloor, setSelectedFloor }) => {
    const floorOptions = ['Piano terra', 'Piani intermedi', 'Ultimo piano'];

    const selectFloor = (floor) => {
        setSelectedFloor(floor);
        toggle();
    };

    const getFloorLabel = () => {
        if (!selectedFloor) return 'Piano';
        return selectedFloor;
    };

    return (
        <div className="relative">
            <button
                onClick={toggle}
                className="flex justify-center items-center w-full px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600"
            >
                {getFloorLabel()}
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
                    <div className="flex flex-col max-h-40 overflow-hidden">
                        <ul className="space-y-1">
                            {floorOptions.map((floor, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer py-1 px-2 bg-gray-100 hover:bg-primary-100 text-gray-800 hover:text-primary-900 rounded-lg ${selectedFloor === floor ? 'bg-primary-100 text-primary-900' : ''}`}
                                    onClick={() => selectFloor(floor)}
                                >
                                    {floor}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloorFilterDropdown;