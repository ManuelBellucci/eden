import { useState } from 'react';
import Filters from "../../components/immobili/filters/Filters";
import ListingGrid from "../../components/immobili/listingsGrid/ListingGrid";

const Immobili = () => {
    // Filter States
    const [contract, setContract] = useState('');
    const [tipology, setTipology] = useState('');
    const [price, setPrice] = useState({ from: '', to: '' });
    const [size, setSize] = useState({ from: '', to: '' });
    const [rooms, setRooms] = useState({ from: '', to: '' });
    const [bathrooms, setBathrooms] = useState('');
    const [floor, setFloor] = useState('');
    const [extras, setExtras] = useState({
        terrace: false,
        balcony: false,
        elevator: false,
        furnished: false,
        cellar: false,
        airConditioning: false,
        rented: false,
        closet: false
    });

    // Combine all filter states into a single object
    const filters = {
        contract,
        tipology,
        priceFrom: price.from,
        priceTo: price.to,
        sizeFrom: size.from,
        sizeTo: size.to,
        roomsFrom: rooms.from,
        roomsTo: rooms.to,
        bathrooms,
        floor,
        ...extras
    };

    const cleanFilters = () => {
        setContract('');
        setTipology('');
        setPrice({ from: '', to: '' });
        setSize({ from: '', to: '' });
        setRooms({ from: '', to: '' });
        setBathrooms('');
        setFloor('');
        setExtras({
            terrace: false,
            balcony: false,
            elevator: false,
            furnished: false,
            cellar: false,
            airConditioning: false,
            rented: false,
            closet: false
        });
    };

    return (
        <div className='mx-14 mb-14'>
            <Filters
                contract={contract}
                setContract={setContract}
                tipology={tipology}
                setTipology={setTipology}
                price={price}
                setPrice={setPrice}
                size={size}
                setSize={setSize}
                rooms={rooms}
                setRooms={setRooms}
                bathrooms={bathrooms}
                setBathrooms={setBathrooms}
                floor={floor}
                setFloor={setFloor}
                extras={extras}
                setExtras={setExtras}
                cleanFilters={cleanFilters}
            />
            <ListingGrid filters={filters} />
        </div>
    );
};

export default Immobili;
