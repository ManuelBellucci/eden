const ListingDetails = ({ listing }) => {
  return (
    <div className='mt-10 grid grid-cols-4'>
      <p className='border'>Contratto: {listing.type}</p>
      <p className='border'>Piano: {listing.floor === 0 ? 'T' : listing.floor} di {listing.buildingFloors}</p>
      <p className='border'>N° di esposizioni: {listing.expositions}</p>
      <div className='border'>
        <p>Ripostiglio: {listing.closet ? 'Si' : 'No'} </p>
        {listing.closet && (
          <p>N° di rispostigli: {listing.numClosets}</p>
        )}
      </div>
      <div className='border'>
        <p>Cantina: {listing.cellar ? 'Si' : 'No'}</p>
        {listing.cellar && (
          <p>Metratura cantina: {listing.cellarSqm}m² </p>
        )}
      </div>
      <p className='border'>Locali: {listing.rooms}</p>
      <p className='border'>Metratura commerciale: {listing.commercialSqm}</p>
      <p className='border'>Prezzo: {listing.pubPrice.toLocaleString()},00€</p>
      <p className='border'>N° di camere: {listing.singleBedrooms + listing.doubleBedrooms} </p>
      <p className='border'>N° di bagni: {listing.bathrooms}</p>
      <div className='border'>
        <p>Garage: {listing.garage ? 'Si' : 'No'}</p>
        {listing.garage && (
          listing.numGarage > 1 ? <p>N° di garage: {listing.numGarage}</p> : ''
        )}
        {listing.garage && (
          listing.numGarage > 1
            ? <p>Metrature dei garage: {listing.garageSqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.garageSqm.length - 1 ? ', ' : ''}</span>))} </p>
            : <p>Metratura del garage: {listing.garageSqm}m²</p>
        )}
      </div>
      <p>Posto auto: {listing.parkingSpace ? 'Si' : 'No'}</p>
      <div className='border'>
        {listing.parkingSpace && (
          listing.numParkingSpace > 1 ? <p>N° di posti auto: {listing.numParkingSpace}</p> : ''
        )}
        {listing.parkingSpace && (
          <p>Tipologia posto auto: {listing.parkingSpaceType}</p>
        )}
      </div>
      <div className='border'>
        {listing.privateGarden && (
          <p>Giardino privato di {listing.gardenSqm}m²</p>
        )}
        <p>Giardino condominiale: {listing.condGarden ? 'Si' : 'No'}</p>
      </div>
      <div className='border'>
        <p>Terrazzo: {listing.terrace ? 'Si' : 'No'}</p>
        {listing.terrace && (
          listing.numTerrace > 1 ? <p>N° di terrazzi: {listing.numTerrace}</p> : ''
        )}
        {listing.terrace && (
          listing.numTerrace > 1
            ? <p>Metrature dei terrazzi: {listing.terraceSqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.terraceSqm.length - 1 ? ', ' : ''}</span>))} </p>
            : <p>Metratura del terrazzo: {listing.terraceSqm}m²</p>
        )}
      </div>
      <div className='border'>
        <p>Balcone: {listing.balcony ? 'Si' : 'No'}</p>
        {listing.balcony && (
          listing.numBalcony > 1 ? <p>N° di balconi: {listing.numBalcony}</p> : ''
        )}
        {listing.balcony && (
          listing.numBalcony > 1
            ? <p>Metrature dei balconi: {listing.balconySqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.balconySqm.length - 1 ? ', ' : ''}</span>))} </p>
            : <p>Metratura del balcone: {listing.balconySqm}m²</p>
        )}
      </div>
      <p className='border'>Spese condominiali mensili: {listing.monthlyCondominiumFees === null || listing.monthlyCondominiumFees === 0 ? 'Assente' : listing.monthlyCondominiumFees}</p>
      <div className='border'>
        <p>Stato interno: {listing.internalState}</p>
        {listing.internalState === 'ristrutturato' && (
          <p>Anno di ristrutturazione: {listing.yearOfRenovation}</p>
        )}
        {listing.internalState === 'nuovo' && (
          <p>Anno di costruzione: {listing.yearOfRenovation}</p>
        )}
      </div>
      <div className='border'>
        <p>APE: {listing.APE ? 'Presente (classe G)' : 'In corso'} </p>
        <p>RTI: {listing.RTI ? 'Presente' : 'In corso'} </p>
      </div>
      <div className='border'>
        {listing.rented ? 'Affittato' : listing.empty ? 'Libero subito' : 'Libero a rogito'}
        {listing.rented && (
          <>
            <p>Rendita annua: {listing.annualRent.toLocaleString()},00€</p>
            <p>Contratto affitto: {listing.rentContract}</p>
            <p>Affittato fino il: {new Date(listing.rentedUntil).toLocaleDateString('en-US')}</p>
          </>
        )}
      </div>
      <p className='border'>Riscaldamento: {listing.heating}</p>
      <p className='border'>Ascensore: {listing.elevator ? 'Si' : 'No'}</p>
      <p className='border'>Arredato: {listing.furnished ? 'Si' : 'No'}</p>
    </div>
  )
}

export default ListingDetails
