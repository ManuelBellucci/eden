import { useState } from 'react';
import PriceFilterDropdown from './PriceFilterDropdown';
import TipologyFilterDropdown from './TipologyFilterDropdown';
import ContractFilterDropdown from './ContractFilterDropdown';
import SizeFilterDropdown from './SizeFilterDropdown';
import RoomsFilterDropdown from './RoomsFilterDropdown';
import BathroomsFilterDropdown from './BathroomsFilterDropdown';
import FloorFilterDropdown from './FloorFilterDropdown';
import ExtrasFilterDropdown from './ExtrasFilterDropdown';

const Filters = () => {
    const [openFilter, setOpenFilter] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // States for each filter
    const [contract, setContract] = useState('');
    const [tipology, setTipology] = useState('');
    const [price, setPrice] = useState({ from: '', to: '' });
    const [size, setSize] = useState({ from: '', to: '' });
    const [rooms, setRooms] = useState({ from: '', to: '' });
    const [bathrooms, setBathrooms] = useState('');
    const [floor, setFloor] = useState('');
    const [extras, setExtras] = useState({
        terrazzo: false,
        balcone: false,
        ascensore: false,
        arredato: false,
        cantina: false,
        piscina: false
    });

    // Initial state: All filters are closed
    const [openModalFilters, setOpenModalFilters] = useState({
        contract: false,
        tipology: false,
        price: false,
        size: false,
        rooms: false,
        bathrooms: false,
        floor: false,
        extras: false
    });

    const toggleFilter = (filterName) => {
        setOpenFilter((prevFilter) => (prevFilter === filterName ? null : filterName));
    };

    const toggleModalFilter = (filterName) => {
        setOpenModalFilters((prev) => ({
            contract: filterName === 'contract' ? !prev.contract : false,
            tipology: filterName === 'tipology' ? !prev.tipology : false,
            price: filterName === 'price' ? !prev.price : false,
            size: filterName === 'size' ? !prev.size : false,
            rooms: filterName === 'rooms' ? !prev.rooms : false,
            bathrooms: filterName === 'bathrooms' ? !prev.bathrooms : false,
            floor: filterName === 'floor' ? !prev.floor : false,
            extras: filterName === 'extras' ? !prev.extras : false
        }));
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) {
            setOpenModalFilters({
                contract: false,
                tipology: false,
                price: false,
                size: false,
                rooms: false,
                bathrooms: false,
                floor: false,
                extras: false
            });
        }
    };

    // clean filters
    const cleanFilters = () => {
        setContract('');
        setTipology('');
        setPrice({ from: '', to: '' });
        setSize({ from: '', to: '' });
        setRooms({ from: '', to: '' });
        setBathrooms('');
        setFloor('');
        setExtras({
            terrazzo: false,
            balcone: false,
            ascensore: false,
            arredato: false,
            cantina: false,
            piscina: false
        });
    };

    return (
        <>
            {/* Desktop Filters */}
            <button
                className="px-4 py-2 hidden xl:block bg-red-500 text-white rounded-lg shadow hover:bg-red-600 active:bg-red-700"
                onClick={cleanFilters}
            >
                Pulisci filtri
            </button>
            <div className="hidden xl:flex w-full gap-6 justify-center">
                <ContractFilterDropdown
                    isOpen={openFilter === 'contract'}
                    toggle={() => toggleFilter('contract')}
                    selectedContract={contract}
                    setSelectedContract={setContract}
                />
                <TipologyFilterDropdown
                    isOpen={openFilter === 'tipology'}
                    toggle={() => toggleFilter('tipology')}
                    selectedTipology={tipology}
                    setSelectedTipology={setTipology}
                />
                <PriceFilterDropdown
                    isOpen={openFilter === 'price'}
                    toggle={() => toggleFilter('price')}
                    selectedPrice={price}
                    setSelectedPrice={setPrice}
                />
                <SizeFilterDropdown
                    isOpen={openFilter === 'size'}
                    toggle={() => toggleFilter('size')}
                    selectedSize={size}
                    setSelectedSize={setSize}
                />
                <RoomsFilterDropdown
                    isOpen={openFilter === 'rooms'}
                    toggle={() => toggleFilter('rooms')}
                    selectedRooms={rooms}
                    setSelectedRooms={setRooms}
                />
                <BathroomsFilterDropdown
                    isOpen={openFilter === 'bathrooms'}
                    toggle={() => toggleFilter('bathrooms')}
                    selectedBathrooms={bathrooms}
                    setSelectedBathrooms={setBathrooms}
                />
                <FloorFilterDropdown
                    isOpen={openFilter === 'floor'}
                    toggle={() => toggleFilter('floor')}
                    selectedFloor={floor}
                    setSelectedFloor={setFloor}
                />
                <ExtrasFilterDropdown
                    isOpen={openFilter === 'extras'}
                    toggle={() => toggleFilter('extras')}
                    selectedExtras={extras}
                    setSelectedExtras={setExtras}
                />

            </div>
            

            {/* Mobile Filters Button */}
            <div className="flex xl:hidden justify-center mb-4">
                <button
                    className="px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600 active:bg-primary-700"
                    onClick={toggleModal}
                >
                    Filtra Annunci
                </button>
            </div>

            {/* Mobile Filters Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 p-4 py-14 bg-gray-800 bg-opacity-90 z-[100] flex items-center justify-center">
                    <div className="bg-white h-full flex flex-col gap-6 relative justify-between items-center p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <div className="flex justify-between items-center mb-4">

                            <button
                                className="text-xl px-4 py-2 absolute top-5 right-5 text-white bg-red-500 rounded-lg shadow hover:bg-red-600 active:bg-red-700"
                                onClick={toggleModal}
                            >
                                &times;
                            </button>
                        </div>
                        <div className='flex flex-col gap-4 overflow-hidden'>
                            <h2 className="text-2xl mb-4 text-center">Trova l'immobile perfetto per te</h2>
                            <ContractFilterDropdown
                                isOpen={openModalFilters.contract}
                                toggle={() => toggleModalFilter('contract')}
                                selectedContract={contract}
                                setSelectedContract={setContract}
                            />
                            <TipologyFilterDropdown
                                isOpen={openModalFilters.tipology}
                                toggle={() => toggleModalFilter('tipology')}
                                selectedTipology={tipology}
                                setSelectedTipology={setTipology}
                            />
                            <PriceFilterDropdown
                                isOpen={openModalFilters.price}
                                toggle={() => toggleModalFilter('price')}
                                selectedPrice={price}
                                setSelectedPrice={setPrice}
                            />
                            <SizeFilterDropdown
                                isOpen={openModalFilters.size}
                                toggle={() => toggleModalFilter('size')}
                                selectedSize={size}
                                setSelectedSize={setSize}
                            />
                            <RoomsFilterDropdown
                                isOpen={openModalFilters.rooms}
                                toggle={() => toggleModalFilter('rooms')}
                                selectedRooms={rooms}
                                setSelectedRooms={setRooms}
                            />
                            <BathroomsFilterDropdown
                                isOpen={openModalFilters.bathrooms}
                                toggle={() => toggleModalFilter('bathrooms')}
                                selectedBathrooms={bathrooms}
                                setSelectedBathrooms={setBathrooms}
                            />
                            <FloorFilterDropdown
                                isOpen={openModalFilters.floor}
                                toggle={() => toggleModalFilter('floor')}
                                selectedFloor={floor}
                                setSelectedFloor={setFloor}
                            />
                            <ExtrasFilterDropdown
                                isOpen={openModalFilters.extras}
                                toggle={() => toggleModalFilter('extras')}
                                selectedExtras={extras}
                                setSelectedExtras={setExtras}
                            />
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
                                onClick={toggleModal}
                            >
                                Applica filtri
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 active:bg-red-700"
                                onClick={cleanFilters}
                            >
                                Pulisci filtri
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Filters;
