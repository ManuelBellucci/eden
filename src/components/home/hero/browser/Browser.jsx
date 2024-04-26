const Browser = () => {
    return (
        <form>
            <div className="flex gap-16 text-xl font-bold justify-center mb-4 text-white">
                <div>Vendita</div>
                <div>Affitto</div>
            </div>
            <div className="h-full w-full flex flex-col md:flex-row gap-4 rounded-lg md:rounded-full bg-white py-4 px-6">
                <select className="rounded-full w-full py-4 border border-primary-200 px-4">
                    <optgroup label="Tipologia" disabled>
                        <option selected hidden>Tipologia</option>
                    </optgroup>
                    <option>Appartamenti</option>
                    <option>Ville e villini</option>
                    <option>Uffici</option>
                    <option>Magazzini, depositi e box</option>
                </select>
                <select className="rounded-full w-full py-4 border border-primary-200 px-4">
                    <optgroup label="Zona" disabled>
                        <option selected hidden>Zona</option>
                    </optgroup>
                    <option>Zona A</option>
                    <option>Zona B</option>
                    <option>Zona C</option>
                    <option>Zona D</option>
                </select>
                <select className="rounded-full w-full py-4 border border-primary-200 px-4">
                    <optgroup label="Filtri" disabled>
                        <option selected hidden>Filtri</option>
                    </optgroup>
                    
                </select>
            
                <button className="bg-primary-500 hover:bg-primary-600 active:bg-primary-700 rounded-full py-4 md:py-0 px-8 text-primary-950  font-bold transition-all">
                    Cercare
                </button>
            </div>
        </form>
    )
}

export default Browser