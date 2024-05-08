import { useState } from 'react';
import PriceFilterDropdown from './PriceFilterDropdown';
import TipologyFilterDropdown from './TipologyFilterDropdown';
import ContractFilterDropdown from './ContractFilterDropdown';
import SizeFilterDropdown from './SizeFilterDropdown';
import RoomsFilterDropdown from './RoomsFilterDropdown';
import BathroomsFilterDropdown from './BathroomsFilterDropdown';

const Filters = () => {
    const [openFilter, setOpenFilter] = useState(null);

    const toggleFilter = (filterName) => {
        setOpenFilter((prevFilter) => (prevFilter === filterName ? null : filterName));
    };

    return (
        <div className="border p-4 w-full gap-6 flex justify-center">
            <ContractFilterDropdown
                isOpen={openFilter === 'contract'}
                toggle={() => toggleFilter('contract')}
            />
            <TipologyFilterDropdown
                isOpen={openFilter === 'tipology'}
                toggle={() => toggleFilter('tipology')}
            />
            <PriceFilterDropdown
                isOpen={openFilter === 'price'}
                toggle={() => toggleFilter('price')}
            />
            <SizeFilterDropdown
                isOpen={openFilter === 'size'}
                toggle={() => toggleFilter('size')}
            />
            <RoomsFilterDropdown
                isOpen={openFilter === 'rooms'}
                toggle={() => toggleFilter('rooms')}
            />
           <BathroomsFilterDropdown
                isOpen={openFilter === 'bathrooms'}
                toggle={() => toggleFilter('bathrooms')}
            /> 
        </div>
    );
};

export default Filters;
