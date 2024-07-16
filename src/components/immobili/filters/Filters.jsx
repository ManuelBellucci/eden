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

const Filters = () => {
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

  const handleCleanFilters = useCallback(() => {
    cleanFilters()
    toggleModal()
  }, [cleanFilters, toggleModal])

  return (
    <div className='h-full p-10 flex flex-col gap-6 justify-center items-center'>
      <h2 className='text-4xl font-extrabold text-center text-nowrap leading-none   text-primary-50 md:text-6xl uppercase xl:text-7xl'>I nostri immobili</h2>
      {/* Desktop Filters */}
      <button
        className='px-4 py-2 hidden xl:block bg-red-500 text-primary-50 rounded-lg shadow hover:bg-red-600 active:bg-red-700'
        onClick={cleanFilters}
      >
        Pulisci filtri
      </button>
      <div className='hidden xl:flex w-full gap-6 justify-center'>
        <ContractFilterDropdown
          isOpen={openFilter === 'contract'}
          toggle={() => toggleFilter('contract')}
          selectedContract={contract}
          setSelectedContract={(value) => handleFilterChange(setContract, value)}
        />
        <TipologyFilterDropdown
          isOpen={openFilter === 'tipology'}
          toggle={() => toggleFilter('tipology')}
          selectedTipology={tipology}
          setSelectedTipology={(value) => handleFilterChange(setTipology, value)}
        />
        <PriceFilterDropdown
          isOpen={openFilter === 'price'}
          toggle={() => toggleFilter('price')}
          selectedPrice={price}
          setSelectedPrice={(value) => handleFilterChange(setPrice, value)}
        />
        <SizeFilterDropdown
          isOpen={openFilter === 'size'}
          toggle={() => toggleFilter('size')}
          selectedSize={size}
          setSelectedSize={(value) => handleFilterChange(setSize, value)}
        />
        <RoomsFilterDropdown
          isOpen={openFilter === 'rooms'}
          toggle={() => toggleFilter('rooms')}
          selectedRooms={rooms}
          setSelectedRooms={(value) => handleFilterChange(setRooms, value)}
        />
        <BathroomsFilterDropdown
          isOpen={openFilter === 'bathrooms'}
          toggle={() => toggleFilter('bathrooms')}
          selectedBathrooms={bathrooms}
          setSelectedBathrooms={(value) => handleFilterChange(setBathrooms, value)}
        />
        <FloorFilterDropdown
          isOpen={openFilter === 'floor'}
          toggle={() => toggleFilter('floor')}
          selectedFloor={floor}
          setSelectedFloor={(value) => handleFilterChange(setFloor, value)}
        />
        <ExtrasFilterDropdown
          isOpen={openFilter === 'extras'}
          toggle={() => toggleFilter('extras')}
          selectedExtras={extras}
          setSelectedExtras={(value) => handleFilterChange(setExtras, value)}
        />
      </div>

      {/* Mobile Filters Button */}
      <div className='flex xl:hidden justify-center mb-4'>
        <button
          className='px-4 py-2 bg-primary-500 text-primary-50 rounded-lg shadow hover:bg-primary-600 active:bg-primary-700'
          onClick={toggleModal}
        >
          Filtra Annunci
        </button>
      </div>

      {/* Mobile Filters Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 p-4 py-14 bg-primary-800 bg-opacity-90 z-[100] flex items-center justify-center'>
          <div className='bg-primary-50 h-full flex flex-col relative justify-between items-center p-6 rounded-lg shadow-lg w-full max-w-lg'>
            <div className='flex justify-between items-center mb-4'>
              <button
                className='text-xl px-4 py-2 absolute top-5 right-5 text-primary-50 bg-red-500 rounded-lg shadow hover:bg-red-600 active:bg-red-700'
                onClick={toggleModal}
              >
                &times;
              </button>
            </div>
            <div className='flex flex-col gap-4 overflow-hidden'>
              <h2 className='text-2xl mb-4 text-center'>Trova l'immobile perfetto per te</h2>

              <ContractFilterDropdown
                isOpen={openModalFilters.contract}
                toggle={() => toggleModalFilter('contract')}
                selectedContract={contract}
                setSelectedContract={(value) => handleFilterChange(setContract, value)}
              />
              <TipologyFilterDropdown
                isOpen={openModalFilters.tipology}
                toggle={() => toggleModalFilter('tipology')}
                selectedTipology={tipology}
                setSelectedTipology={(value) => handleFilterChange(setTipology, value)}
              />
              <PriceFilterDropdown
                isOpen={openModalFilters.price}
                toggle={() => toggleModalFilter('price')}
                selectedPrice={price}
                setSelectedPrice={(value) => handleFilterChange(setPrice, value)}
              />
              <SizeFilterDropdown
                isOpen={openModalFilters.size}
                toggle={() => toggleModalFilter('size')}
                selectedSize={size}
                setSelectedSize={(value) => handleFilterChange(setSize, value)}
              />
              <RoomsFilterDropdown
                isOpen={openModalFilters.rooms}
                toggle={() => toggleModalFilter('rooms')}
                selectedRooms={rooms}
                setSelectedRooms={(value) => handleFilterChange(setRooms, value)}
              />
              <BathroomsFilterDropdown
                isOpen={openModalFilters.bathrooms}
                toggle={() => toggleModalFilter('bathrooms')}
                selectedBathrooms={bathrooms}
                setSelectedBathrooms={(value) => handleFilterChange(setBathrooms, value)}
              />
              <FloorFilterDropdown
                isOpen={openModalFilters.floor}
                toggle={() => toggleModalFilter('floor')}
                selectedFloor={floor}
                setSelectedFloor={(value) => handleFilterChange(setFloor, value)}
              />
              <ExtrasFilterDropdown
                isOpen={openModalFilters.extras}
                toggle={() => toggleModalFilter('extras')}
                selectedExtras={extras}
                setSelectedExtras={(value) => handleFilterChange(setExtras, value)}
              />
            </div>
            <div className='flex gap-4'>
              <button
                className='px-4 py-2 bg-green-500 text-primary-50 rounded-lg shadow hover:bg-green-600'
                onClick={toggleModal}
              >
                Applica filtri
              </button>
              <button
                className='px-4 py-2 bg-red-500 text-primary-50 rounded-lg shadow hover:bg-red-600 active:bg-red-700'
                onClick={handleCleanFilters}
              >
                Pulisci filtri
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Filters
