// FiltersContext.js
import { createContext, useContext, useState } from 'react';

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
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

    const contextValue = {
        contract,
        setContract,
        tipology,
        setTipology,
        price,
        setPrice,
        size,
        setSize,
        rooms,
        setRooms,
        bathrooms,
        setBathrooms,
        floor,
        setFloor,
        extras,
        setExtras
    };

    return <FiltersContext.Provider value={contextValue}>{children}</FiltersContext.Provider>;
};

export const useFilters = () => useContext(FiltersContext);
