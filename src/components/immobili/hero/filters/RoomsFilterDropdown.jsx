import { useState } from "react";

const RoomsFilterDropdown = ({ isOpen, toggle }) => {
    const [fromRooms, setFromRooms] = useState('');
    const [toRooms, setToRooms] = useState('');
    const [focusedField, setFocusedField] = useState('');

    const roomsOptions = [
        'Indifferente', '1', '2', '3', '4', '5'
    ];

    const selectRooms = (rooms) => {
        const sanitizedRooms = rooms.replace('.', '');

        if (!fromRooms || focusedField === 'fromRooms') {
            setFromRooms(rooms === 'Indifferente' ? '' : sanitizedRooms);
            setFocusedField('');
        } else if (!toRooms || focusedField === 'toRooms') {
            setToRooms(rooms === 'Indifferente' ? '' : sanitizedRooms);
            setFocusedField('');
        }

        if (fromRooms && toRooms) {
            applyRoomsFilter();
        }
    };

    const formatRoomLabel = (num) => (num === '1' ? 'locale' : 'locali');

    const getRoomsLabel = () => {
        if (!fromRooms && !toRooms) return 'Locali';
        if (fromRooms && toRooms) {
            const fromLabel = `${fromRooms}`;
            const toLabel = `${toRooms}`;
            return `Da ${fromLabel} a ${toLabel} ${formatRoomLabel(toLabel)}`;
        } else if (fromRooms) {
            const fromLabel = `${fromRooms}`;
            return `Da ${fromLabel} ${formatRoomLabel(fromRooms)}`;
        } else {
            const toLabel = `${toRooms}`;
            return `Fino a ${toLabel} ${formatRoomLabel(toRooms)}`;
        }
    };

    const applyRoomsFilter = () => {
        toggle();
    };

    return (
        <div className="relative">
            <button
                onClick={toggle}
                className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600"
            >
                {getRoomsLabel()}
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
                    <div className="flex flex-col mb-4">
                        <label htmlFor="fromRooms" className="mb-2 text-sm font-medium text-gray-900">
                            From
                        </label>
                        <input
                            type="number"
                            id="fromRooms"
                            className="px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100"
                            placeholder="Minimo Locali"
                            value={fromRooms}
                            onChange={(e) => setFromRooms(e.target.value)}
                            onFocus={() => setFocusedField('fromRooms')}
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="toRooms" className="mb-2 text-sm font-medium text-gray-900">
                            To
                        </label>
                        <input
                            type="number"
                            id="toRooms"
                            className="px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-primary-100"
                            placeholder="Massimo Locali"
                            value={toRooms}
                            onChange={(e) => setToRooms(e.target.value)}
                            onFocus={() => setFocusedField('toRooms')}
                        />
                    </div>
                    <div className="flex flex-col mb-4 max-h-40 overflow-y-scroll">
                        <ul className="space-y-1">
                            {roomsOptions.map((rooms, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer py-1 px-2 bg-gray-100 hover:bg-primary-100 text-gray-800 hover:text-primary-900 rounded-lg"
                                    onClick={() => selectRooms(rooms)}
                                >
                                    {rooms}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        type="button"
                        className="w-full px-4 mt-4 py-2 text-white bg-primary-500 rounded-lg hover:bg-primary-600"
                        onClick={applyRoomsFilter}
                    >
                        Apply
                    </button>
                </div>
            )}
        </div>
    );
};

export default RoomsFilterDropdown;
