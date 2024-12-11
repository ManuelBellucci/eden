import { useCallback } from 'react'
import PriceFilterDropdown from './PriceFilterDropdown'
import TipologyFilterDropdown from './TipologyFilterDropdown'
import ContractFilterDropdown from './ContractFilterDropdown'
import SizeFilterDropdown from './SizeFilterDropdown'
import RoomsFilterDropdown from './RoomsFilterDropdown'
import BathroomsFilterDropdown from './BathroomsFilterDropdown'
import FloorFilterDropdown from './FloorFilterDropdown'
import ExtrasFilterDropdown from './ExtrasFilterDropdown'
import useFilters from '../../../hooks/useFilters'

// Componente principale per la gestione dei filtri di ricerca immobili. Contiene una versione desktop e una mobile dei filtri.
const Filters = () => {
  // Destrutturazione delle proprietà e metodi dal custom hook useFilters
  const {
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
    setExtras,
    cleanFilters,
    openFilter,
    isModalOpen,
    openModalFilters,
    handleFilterChange,
    toggleFilter,
    toggleModalFilter,
    toggleModal
  } = useFilters()

  // Funzione per pulire i filtri e chiudere il modal
  const handleCleanFilters = useCallback(() => {
    cleanFilters()
    toggleModal()
  }, [cleanFilters, toggleModal])

  /**
  * Verifica se qualche filtro è attualmente impostato.
  * @returns {boolean} - True se almeno un filtro è impostato, False altrimenti.
  */
  const areFiltersSet = () => {
    return contract || tipology || price.from || price.to || size.from || size.to || rooms.from || rooms.to || bathrooms || floor || (Array.isArray(extras) && extras.some(extra => extra))
  }

  return (
    <div className='h-full p-10 flex flex-col gap-6 justify-center items-center'>
      <h2 className='text-4xl   text-center text-nowrap leading-none text-primary-50 md:text-6xl uppercase xl:text-7xl'>I nostri immobili</h2>

      {/* Bottone per pulire i filtri (versione desktop) */}
      {areFiltersSet() && (
        <button
          aria-label='Clean filters'
          className='px-4 py-2 hidden xl:block bg-red-500 text-primary-50 rounded-lg shadow hover:bg-red-600 active:bg-red-700'
          onClick={cleanFilters}
        >
          Pulisci filtri
        </button>
      )}

      {/* Dropdown dei filtri (versione desktop) */}
      <div className='hidden xl:flex w-full gap-6 justify-center'>
        {/* Dropdown filtro contratto */}
        <ContractFilterDropdown
          isOpen={openFilter === 'contract'}
          toggle={() => toggleFilter('contract')}
          selectedContract={contract}
          setSelectedContract={(value) => handleFilterChange(setContract, value)}
        />
        {/* Dropdown filtro tipologia */}
        <TipologyFilterDropdown
          isOpen={openFilter === 'tipology'}
          toggle={() => toggleFilter('tipology')}
          selectedTipology={tipology}
          setSelectedTipology={(value) => handleFilterChange(setTipology, value)}
        />
        {/* Dropdown filtro prezzo */}
        <PriceFilterDropdown
          isOpen={openFilter === 'price'}
          toggle={() => toggleFilter('price')}
          selectedPrice={price}
          setSelectedPrice={(value) => handleFilterChange(setPrice, value)}
        />
        {/* Dropdown filtro dimensioni */}
        <SizeFilterDropdown
          isOpen={openFilter === 'size'}
          toggle={() => toggleFilter('size')}
          selectedSize={size}
          setSelectedSize={(value) => handleFilterChange(setSize, value)}
        />
        {/* Dropdown filtro locali */}
        <RoomsFilterDropdown
          isOpen={openFilter === 'rooms'}
          toggle={() => toggleFilter('rooms')}
          selectedRooms={rooms}
          setSelectedRooms={(value) => handleFilterChange(setRooms, value)}
        />
        {/* Dropdown filtro bagni */}
        <BathroomsFilterDropdown
          isOpen={openFilter === 'bathrooms'}
          toggle={() => toggleFilter('bathrooms')}
          selectedBathrooms={bathrooms}
          setSelectedBathrooms={(value) => handleFilterChange(setBathrooms, value)}
        />
        {/* Dropdown filtro piano */}
        <FloorFilterDropdown
          isOpen={openFilter === 'floor'}
          toggle={() => toggleFilter('floor')}
          selectedFloor={floor}
          setSelectedFloor={(value) => handleFilterChange(setFloor, value)}
        />
        {/* Dropdown filtro extra */}
        <ExtrasFilterDropdown
          isOpen={openFilter === 'extras'}
          toggle={() => toggleFilter('extras')}
          selectedExtras={extras}
          setSelectedExtras={(value) => handleFilterChange(setExtras, value)}
        />
      </div>

      {/* Bottone per aprire il modal dei filtri (versione mobile) */}
      <div className='flex xl:hidden justify-center mb-4'>
        <button
          className='px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 active:bg-primary-700'
          onClick={toggleModal}
        >
          Filtra Annunci
        </button>
      </div>

      {/* Modal dei filtri (versione mobile) */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-primary-800 bg-opacity-90 z-[100] flex items-center justify-center'>
          <div className='bg-primary-50 h-full max-h-full flex flex-col relative pt-10 p-6 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto'>
            <div className='flex justify-between items-center mb-4'>
              <button
                className='text-5xl px-4 py-2 absolute top-5 right-5 text-primary-950'
                onClick={toggleModal} // Chiude il modal
              >
                &times;
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-2xl mb-4 text-center'>Trova l'immobile perfetto per te</h2>

              {/* Dropdown filtro contratto */}
              <ContractFilterDropdown
                isOpen={openModalFilters.contract}
                toggle={() => toggleModalFilter('contract')}
                selectedContract={contract}
                setSelectedContract={(value) => handleFilterChange(setContract, value)}
              />
              {/* Dropdown filtro tipologia */}
              <TipologyFilterDropdown
                isOpen={openModalFilters.tipology}
                toggle={() => toggleModalFilter('tipology')}
                selectedTipology={tipology}
                setSelectedTipology={(value) => handleFilterChange(setTipology, value)}
              />
              {/* Dropdown filtro prezzo */}
              <PriceFilterDropdown
                isOpen={openModalFilters.price}
                toggle={() => toggleModalFilter('price')}
                selectedPrice={price}
                setSelectedPrice={(value) => handleFilterChange(setPrice, value)}
              />
              {/* Dropdown filtro dimensioni */}
              <SizeFilterDropdown
                isOpen={openModalFilters.size}
                toggle={() => toggleModalFilter('size')}
                selectedSize={size}
                setSelectedSize={(value) => handleFilterChange(setSize, value)}
              />
              {/* Dropdown filtro locali */}
              <RoomsFilterDropdown
                isOpen={openModalFilters.rooms}
                toggle={() => toggleModalFilter('rooms')}
                selectedRooms={rooms}
                setSelectedRooms={(value) => handleFilterChange(setRooms, value)}
              />
              {/* Dropdown filtro bagni */}
              <BathroomsFilterDropdown
                isOpen={openModalFilters.bathrooms}
                toggle={() => toggleModalFilter('bathrooms')}
                selectedBathrooms={bathrooms}
                setSelectedBathrooms={(value) => handleFilterChange(setBathrooms, value)}
              />
              {/* Dropdown filtro piano */}
              <FloorFilterDropdown
                isOpen={openModalFilters.floor}
                toggle={() => toggleModalFilter('floor')}
                selectedFloor={floor}
                setSelectedFloor={(value) => handleFilterChange(setFloor, value)}
              />
              {/* Dropdown filtro extra */}
              <ExtrasFilterDropdown
                isOpen={openModalFilters.extras}
                toggle={() => toggleModalFilter('extras')}
                selectedExtras={extras}
                setSelectedExtras={(value) => handleFilterChange(setExtras, value)}
              />
            </div>
            <div className='flex gap-4 mt-4 mx-auto'>
              <button
                className='px-4 py-2 bg-green-500 text-primary-50 rounded-lg shadow hover:bg-green-600'
                onClick={toggleModal} // Chiude il modal
              >
                Applica filtri
              </button>
              {/* Bottone per pulire i filtri (versione mobile) */}
              {areFiltersSet() && (
                <button
                  className='px-4 py-2 bg-red-500 text-primary-50 rounded-lg shadow hover:bg-red-600 active:bg-red-700'
                  onClick={handleCleanFilters}
                >
                  Pulisci filtri
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Filters
