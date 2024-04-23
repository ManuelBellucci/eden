const Browser = () => {
    return (
        <>
            <div className="flex gap-16 text-xl font-bold text-white">
                <div>Vendita</div>
                <div>Affitto</div>
            </div>
            <div className="h-full w-full flex flex-col md:flex-row gap-4 rounded-lg md:rounded-full bg-white py-4 px-6">
                <select className="rounded-full w-full py-4 border border-gray-200 px-4">
                    <optgroup label="Tipologia" disabled>
                        <option selected hidden>Tipologia</option>
                    </optgroup>
                    <option>Appartamenti</option>
                    <option>Ville e villini</option>
                    <option>Uffici</option>
                    <option>Magazzini, depositi e box</option>
                </select>
                <select className="rounded-full w-full py-4 border border-gray-200 px-4">
                    <optgroup label="Tipologia" disabled>
                        <option selected hidden>Zona</option>
                    </optgroup>
                    <option>Zona A</option>
                    <option>Zona B</option>
                    <option>Zona C</option>
                    <option>Zona D</option>
                </select>
                <select className="rounded-full w-full py-4 border border-gray-200 px-4">
                    <optgroup label="Tipologia" disabled>
                        <option selected hidden>Filtri</option>
                    </optgroup>
                    
                </select>
            
                <button className="bg-sky-500 hover:bg-sky-600 rounded-full py-4 md:py-0 px-8 text-white font-bold transition-all">
                    Cercare
                </button>
            </div>
        </>
    )
}

export default Browser