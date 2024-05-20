const ListingDetails = ({ listing }) => {
  const extraFeatures = [
    { label: 'Aria condizionata', value: listing.airConditioning },
    { label: 'Arredato', value: listing.furnished },
    { label: 'Porta blindata', value: listing.armouredDoor },
    { label: 'Armadio a muro', value: listing.builtinWardrobe },
    { label: 'Portineria', value: listing.concierge },
    { label: 'Caminetto', value: listing.chimney },
    { label: 'Videocitofono', value: listing.videoIntercom }
  ]
  let exposureTag = null
  if (listing.internalExposure && listing.externalExposure) {
    exposureTag = 'Esposizione mista'
  } else if (listing.internalExposure) {
    exposureTag = 'Esposizione interna'
  } else if (listing.externalExposure) {
    exposureTag = 'Esposizione esterna'
  }

  return (
    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
      {/* Main Information */}
      <div className='mb-5 pb-5 h-full bg-white rounded-lg p-4 shadow-md'>
        <h3 class='mb-4 text-3xl font-extrabold leading-none tracking-tight text-primary-700 md:text-4xl lg:text-5xl uppercase'>Caratteristiche</h3>
        <div className='flex flex-col'>
          <p className='text-xl lg:text-2xl  font-extrabold'>
            Contratto /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}
            </small>
          </p>

          <p class='text-xl lg:text-2xl  font-extrabold'>Tipologia /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.tipology.charAt(0).toUpperCase() + listing.tipology.slice(1)}
            </small>
          </p>

          <p class='text-xl lg:text-2xl  font-extrabold'>Superficie /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.commercialSqm} m² comm. | {listing.walkableSqm} m² calp.
            </small>
          </p>

          <p class='text-xl lg:text-2xl  font-extrabold'>Locali /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.rooms} ({listing.singleBedrooms + listing.doubleBedrooms} camere da letto, {(listing.rooms - (listing.singleBedrooms + listing.doubleBedrooms))} altro)
            </small>
          </p>

          <p class='text-xl lg:text-2xl  font-extrabold'>Piano /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.floor === 0 ? 'T' : listing.floor} di {listing.buildingFloors} {listing.elevator ? 'con ascensore' : 'senza ascensore'}
            </small>
          </p>

          {listing.expositions && (
            <p class='text-xl lg:text-2xl  font-extrabold'>Esposizioni /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.expositions}
              </small>
            </p>
          )}

          <p class='text-xl lg:text-2xl  font-extrabold'>Disponibilità /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.rented ? 'Affittato' : listing.empty ? 'Libero subito' : 'Libero a rogito'}
              {listing.rented && (
                <div className='flex flex-col'>
                  <p class='text-xl lg:text-2xl  text-black font-extrabold'>Rendita /
                    <small class='ms-2 font-semibold text-primary-700'>
                      € {listing.annualRent.toLocaleString()},00
                    </small>
                  </p>

                  <p class='text-xl lg:text-2xl  text-black font-extrabold'>Contratto /
                    <small class='ms-2 font-semibold text-primary-700'>
                      {listing.rentContract.charAt(0).toUpperCase() + listing.rentContract.slice(1)}
                    </small>
                  </p>

                  <p class='text-xl lg:text-2xl  text-black font-extrabold'>Scadenza /
                    <small class='ms-2 font-semibold text-primary-700'>
                      {new Date(listing.rentedUntil).toLocaleDateString('it-IT')}
                    </small>
                  </p>
                </div>
              )}
            </small>
          </p>

          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Bagni /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.bathrooms} ({listing.windowedBathrooms} {listing.windowedBathrooms !== 1 ? 'finestrati' : 'finestrato'}, {listing.nonWindowedBathrooms} {listing.nonWindowedBathrooms !== 1 ? 'non finestrati' : 'non finestrato'})
            </small>
          </p>

        </div>
      </div>

      <div className='mb-5 pb-5 h-full bg-white rounded-lg p-4 shadow-md'>
        <h3 class='mb-4 text-3xl font-extrabold leading-none tracking-tight text-primary-700 md:text-4xl lg:text-5xl uppercase'>Pertinenze</h3>
        <div className='flex flex-col'>
          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Rispostiglio /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.closet ? 'Si' : 'No'}
            </small>
          </p>

          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Cantina /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.cellar ? 'Si' : 'No'}
              {listing.cellar && listing.cellarSqm.length > 1 && <span> ({listing.cellarSqm.length})</span>}
            </small>
          </p>
          {listing.cellar && listing.cellarSqm.length > 1 && (
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Metrature cantine /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.cellarSqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.cellarSqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}
          {listing.cellar && listing.cellarSqm.length === 1 && (
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Metratura cantina /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.cellarSqm}m²
              </small>
            </p>
          )}

          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Garage /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.garage ? 'Si' : 'No'}
              {listing.garage && listing.numGarage > 1 && <span> ({listing.numGarage})</span>}
            </small>
          </p>
          {listing.garage && listing.numGarage > 1 && (
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Superficie garage /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.garageSqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.garageSqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}
          {listing.garage && listing.numGarage === 1 && (
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Superficie garage /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.garageSqm}m²
              </small>
            </p>
          )}

          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Posto auto /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.parkingSpace ? 'Si' : 'No'}
              {listing.parkingSpace && listing.numParkingSpace > 1 && <span> ({listing.numParkingSpace})</span>}
            </small>
          </p>
          {listing.parkingSpace && listing.numParkingSpace > 1 && (
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Tipologia posti auto /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.parkingSpaceType.map((type, index) => (<span key={index}>{type.charAt(0).toUpperCase() + type.slice(1)}{index < listing.parkingSpaceType.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}
          {listing.parkingSpace && listing.numParkingSpace === 1 && (
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Tipologia posto auto /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.parkingSpaceType.map((type, index) => (<span key={index}>{type.charAt(0).toUpperCase() + type.slice(1)}{index < listing.parkingSpaceType.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}

          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Giardino /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.privateGarden ? 'Si' : 'No'}
              {listing.privateGarden && <span> ({listing.gardenSqm}m²)</span>}
            </small>
          </p>

          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Giardino condominiale /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.condGarden ? 'Si' : 'No'}
            </small>
          </p>

          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Terrazzo /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.terrace ? 'Si' : 'No'}
              {listing.terrace && listing.numTerrace > 1 && <span> ({listing.numTerrace})</span>}
            </small>
          </p>
          {listing.terrace && listing.numTerrace > 1 && (
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Superficie terrazzi /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.terraceSqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.terraceSqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}
          {listing.terrace && listing.numTerrace === 1 && (
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Superficie terrazzo /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.terraceSqm}m²
              </small>
            </p>
          )}

          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Balcone /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.balcony ? 'Si' : 'No'}
              {listing.balcony && listing.numBalcony > 1 && <span> ({listing.numBalcony})</span>}
            </small>
          </p>
          {listing.balcony && listing.numBalcony > 1 && (
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Superficie balconi /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.balconySqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.balconySqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}
          {listing.balcony && listing.numBalcony === 1 && (
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Superficie balcone /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.balconySqm}m²
              </small>
            </p>
          )}
        </div>
      </div>

      {/* Costs Information */}
      <div className='text-start h-full pb-5 mb-5 bg-white rounded-lg p-4 shadow-md'>
        <h3 class='mb-4 text-3xl font-extrabold text-start leading-none tracking-tight text-primary-700 md:text-4xl lg:text-5xl uppercase'>Costi</h3>
        <div className='flex flex-col items-start'>
          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Prezzo /
            <small class='ms-2 font-semibold text-primary-700'>
              € {listing.pubPrice.toLocaleString()},00
            </small>
          </p>
          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Prezzo al m² /
            <small class='ms-2 font-semibold text-primary-700'>
              € {(listing.pubPrice / listing.commercialSqm).toLocaleString()} / m²
            </small>
          </p>
          <p class='text-xl lg:text-2xl  text-black font-extrabold'>Spese condominiali /
            <small class='ms-2 font-semibold text-primary-700'>
              {listing.monthlyCondominiumFees === null || listing.monthlyCondominiumFees === 0 ? 'Assente' : `€ ${listing.monthlyCondominiumFees}/mese`}
            </small>
          </p>
        </div>

        <h3 className='my-4 text-3xl font-extrabold text-start leading-none tracking-tight text-primary-700 md:text-4xl lg:text-5xl uppercase'>Extra</h3>
        <div className='flex justify-center'>
          <div className='flex flex-wrap gap-2'>
            {extraFeatures.map((feature, index) => (
              feature.value && <span key={index} className='px-3 py-1 border rounded-lg bg-gray-100'>{feature.label}</span>
            ))}
            {exposureTag && <span className='px-3 py-1 border rounded-lg bg-gray-100'>{exposureTag}</span>}
          </div>
        </div>
      </div>
      {/* efficienza energetica */}
      <div>
        <div className='text-start pb-5 h-full bg-white rounded-lg p-4 shadow-md'>
          <h3 class='mb-4 text-3xl font-extrabold text-start leading-none tracking-tight text-primary-700 md:text-4xl lg:text-5xl uppercase'>Efficienza energetica</h3>
          <div className='flex flex-col items-start'>
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Riscaldamento /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.heating.charAt(0).toUpperCase() + listing.heating.slice(1)}, {listing.heatingType}
              </small>
            </p>
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Classe energetica /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.APE ? 'Presente' + (listing.APEClass ? ` (classe ${listing.APEClass})` : '') : 'In corso'}
              </small>
            </p>
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>RTI /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.RTI ? 'Presente' : 'In corso'}
              </small>
            </p>
            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Anno di costruzione /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.yearOfConstruction}
              </small>
            </p>

            <p class='text-xl lg:text-2xl  text-black font-extrabold'>Stato interno /
              <small class='ms-2 font-semibold text-primary-700'>
                {listing.internalState.charAt(0).toUpperCase() + listing.internalState.slice(1)}
              </small>
            </p>
            {listing.internalState === 'ristrutturato' &&
                (
                  <p class='text-xl lg:text-2xl  text-black font-extrabold'>Anno di ristrutturazione /
                    <small class='ms-2 font-semibold text-primary-700'>
                      {listing.yearOfRenovation}
                    </small>
                  </p>
                )}

          </div>
        </div>
      </div>

    </div>
  )
}

export default ListingDetails
