const ListingDetails = ({ listing }) => {
  if (listing.tipology === 'Garage e posti auto') {
    // Render the specific content for garage
    return (
      <div className='mt-10 '>
        <div className='mb-5 pb-5 text-center h-full bg-white rounded-lg p-4 shadow-md'>
          <h3 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-primary-700 md:text-3xl lg:text-4xl uppercase'>Specifiche del garage</h3>
          <div className='flex flex-col'>
            <p className='text-xl lg:text-2xl text-black font-extrabold'>Superficie /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.garageSqm} m²
              </small>
            </p>
            <p className='text-xl lg:text-2xl text-black font-extrabold'>Bocca /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.numGarage}
              </small>
            </p>
            <p className='text-xl lg:text-2xl text-black font-extrabold'>Altezza /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.numGarage}
              </small>
            </p>
            <p className='text-xl lg:text-2xl text-black font-extrabold'>Larghezza porta /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.numGarage}
              </small>
            </p>
            <p className='text-xl lg:text-2xl text-black font-extrabold'>Piano /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.floor}
              </small>
            </p>
            {/* Add any other garage-specific details here */}
          </div>
        </div>
      </div>
    )
  }

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
        <h3 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-primary-700 md:text-3xl lg:text-4xl uppercase'>Caratteristiche</h3>
        <div className='flex flex-col'>
          {/* <p className='text-xl lg:text-2xl  font-extrabold'>
            Contratto /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.type !== null && listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}
            </small>
          </p> */}

          <p className='text-xl lg:text-2xl  font-extrabold'>Tipologia /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.tipology !== null && listing.tipology.charAt(0).toUpperCase() + listing.tipology.slice(1)}
            </small>
          </p>

          <p className='text-xl lg:text-2xl  font-extrabold'>Superficie /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.commercialSqm} m² comm. | {listing.walkableSqm} m² calp.
            </small>
          </p>

          <p className='text-xl lg:text-2xl  font-extrabold'>Locali /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.rooms} ({listing.singleBedrooms + listing.doubleBedrooms} camere da letto, {(listing.rooms - (listing.singleBedrooms + listing.doubleBedrooms))} altro)
            </small>
          </p>

          <p className='text-xl lg:text-2xl  font-extrabold'>Piano /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.floor === 0 ? 'T' : listing.floor} di {listing.buildingFloors} {listing.elevator ? 'con ascensore' : 'senza ascensore'}
            </small>
          </p>

          {listing.expositions && (
            <p className='text-xl lg:text-2xl  font-extrabold'>Esposizioni /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.expositions}
              </small>
            </p>
          )}

          <p className='text-xl lg:text-2xl  font-extrabold'>Disponibilità /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.rented ? 'Affittato' : listing.empty ? 'Libero subito' : 'Libero a rogito'}
              {listing.rented && (
                <div className='flex flex-col'>
                  <p className='text-xl lg:text-2xl  text-black font-extrabold'>Rendita /
                    <small className='ms-2 font-semibold text-primary-700'>
                      € {listing.annualRent ? listing.annualRent.toLocaleString() : 'N/A'},00
                    </small>
                  </p>

                  <p className='text-xl lg:text-2xl  text-black font-extrabold'>Contratto /
                    <small className='ms-2 font-semibold text-primary-700'>
                      {listing.rentContract !== null && listing.rentContract.charAt(0).toUpperCase() + listing.rentContract.slice(1)}
                    </small>
                  </p>

                  <p className='text-xl lg:text-2xl  text-black font-extrabold'>Scadenza /
                    <small className='ms-2 font-semibold text-primary-700'>
                      {new Date(listing.rentedUntil).toLocaleDateString('it-IT')}
                    </small>
                  </p>
                </div>
              )}
            </small>
          </p>

          <p className='text-xl lg:text-2xl text-black font-extrabold'>Bagni /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.windowedBathrooms > 0 && listing.nonWindowedBathrooms > 0
                ? (
                  <>
                    {listing.windowedBathrooms} {listing.windowedBathrooms !== 1 ? 'finestrati' : 'finestrato'}, {listing.nonWindowedBathrooms} {listing.nonWindowedBathrooms !== 1 ? 'non finestrati' : 'non finestrato'}
                  </>
                  )
                : (
                  <>
                    {listing.windowedBathrooms > 0 && (
                      <>
                        {listing.windowedBathrooms} {listing.windowedBathrooms !== 1 ? 'finestrati' : 'finestrato'}
                      </>
                    )}
                    {listing.nonWindowedBathrooms > 0 && (
                      <>
                        {listing.nonWindowedBathrooms} {listing.nonWindowedBathrooms !== 1 ? 'non finestrati' : 'non finestrato'}
                      </>
                    )}
                  </>
                  )}
            </small>
          </p>

        </div>
      </div>

      <div className='mb-5 pb-5 h-full bg-white rounded-lg p-4 shadow-md'>
        <h3 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-primary-700 md:text-3xl lg:text-4xl uppercase'>Pertinenze</h3>
        <div className='flex flex-col'>
          <p className='text-xl lg:text-2xl  text-black font-extrabold'>Rispostiglio /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.closet ? 'Si' : 'No'}
            </small>
          </p>

          <p className='text-xl lg:text-2xl  text-black font-extrabold'>Cantina /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.cellar ? 'Si' : 'No'}
              {listing.cellar && listing.cellarSqm.length > 1 && <span> ({listing.cellarSqm.length})</span>}
            </small>
          </p>
          {listing.cellar && listing.cellarSqm.length > 1 && (
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Metrature cantine /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.cellarSqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.cellarSqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}
          {listing.cellar && listing.cellarSqm.length === 1 && (
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Metratura cantina /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.cellarSqm}m²
              </small>
            </p>
          )}

          <p className='text-xl lg:text-2xl  text-black font-extrabold'>Garage /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.garage ? 'Si' : 'No'}
              {listing.garage && listing.numGarage > 1 && <span> ({listing.numGarage})</span>}
            </small>
          </p>
          {listing.garage && listing.numGarage > 1 && (
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Superficie garage /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.garageSqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.garageSqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}
          {listing.garage && listing.numGarage === 1 && (
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Superficie garage /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.garageSqm}m²
              </small>
            </p>
          )}

          <p className='text-xl lg:text-2xl  text-black font-extrabold'>Posto auto /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.parkingSpace ? 'Si' : 'No'}
              {listing.parkingSpace && listing.numParkingSpace > 1 && <span> ({listing.numParkingSpace})</span>}
            </small>
          </p>
          {listing.parkingSpace && listing.numParkingSpace > 1 && (
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Tipologia posti auto /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.parkingSpaceType.map((type, index) => (<span key={index}>{type !== null && type.charAt(0).toUpperCase() + type.slice(1)}{index < listing.parkingSpaceType.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}
          {listing.parkingSpace && listing.numParkingSpace === 1 && (
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Tipologia posto auto /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.parkingSpaceType.map((type, index) => (<span key={index}>{type !== null && type.charAt(0).toUpperCase() + type.slice(1)}{index < listing.parkingSpaceType.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}

          <p className='text-xl lg:text-2xl  text-black font-extrabold'>Giardino /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.privateGarden ? 'Si' : 'No'}
              {listing.privateGarden && <span> ({listing.gardenSqm}m²)</span>}
            </small>
          </p>

          <p className='text-xl lg:text-2xl  text-black font-extrabold'>Giardino condominiale /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.condGarden ? 'Si' : 'No'}
            </small>
          </p>

          <p className='text-xl lg:text-2xl  text-black font-extrabold'>Terrazzo /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.terrace ? 'Si' : 'No'}
              {listing.terrace && listing.numTerrace > 1 && <span> ({listing.numTerrace})</span>}
            </small>
          </p>
          {listing.terrace && listing.numTerrace > 1 && (
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Superficie terrazzi /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.terraceSqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.terraceSqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}
          {listing.terrace && listing.numTerrace === 1 && (
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Superficie terrazzo /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.terraceSqm}m²
              </small>
            </p>
          )}

          <p className='text-xl lg:text-2xl  text-black font-extrabold'>Balcone /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.balcony ? 'Si' : 'No'}
              {listing.balcony && listing.numBalcony > 1 && <span> ({listing.numBalcony})</span>}
            </small>
          </p>
          {listing.balcony && listing.numBalcony > 1 && (
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Superficie balconi /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.balconySqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.balconySqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </p>
          )}
          {listing.balcony && listing.numBalcony === 1 && (
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Superficie balcone /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.balconySqm}m²
              </small>
            </p>
          )}
        </div>
      </div>

      {/* Costs Information */}
      <div className='text-start h-full pb-5 mb-5 bg-white rounded-lg p-4 shadow-md'>
        <h3 className='mb-4 text-2xl font-extrabold text-start leading-none tracking-tight text-primary-700 md:text-3xl lg:text-4xl uppercase'>Costi</h3>
        <div className='flex flex-col items-start'>
          <p className='text-xl lg:text-2xl  text-black font-extrabold'>Prezzo /
            <small className='ms-2 font-semibold text-primary-700'>
              € {listing.pubPrice.toLocaleString()},00
            </small>
          </p>
          <p className='text-xl lg:text-2xl  text-black font-extrabold'>Prezzo al m² /
            <small className='ms-2 font-semibold text-primary-700'>
              € {((listing.pubPrice / listing.commercialSqm) || 0).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / m²
            </small>
          </p>
          <p className='text-xl lg:text-2xl  text-black font-extrabold'>Spese condominiali /
            <small className='ms-2 font-semibold text-primary-700'>
              {listing.monthlyCondominiumFees === null || listing.monthlyCondominiumFees === 0 ? 'Assente' : `€ ${listing.monthlyCondominiumFees},00 / mese`}
            </small>
          </p>
        </div>

        <h3 className='my-4 text-2xl font-extrabold text-start leading-none tracking-tight text-primary-700 md:text-3xl lg:text-4xl uppercase'>Extra</h3>
        <div className='flex justify-center'>
          <div className='flex flex-wrap gap-2 mr-auto max-w-sm'>
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
          <h3 className='mb-4 text-2xl font-extrabold text-start leading-none tracking-tight text-primary-700 md:text-3xl lg:text-4xl uppercase'>Efficienza energetica</h3>
          <div className='flex flex-col items-start'>
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Riscaldamento /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.heating !== null && listing.heating.charAt(0).toUpperCase() + listing.heating.slice(1)}, {listing.heatingType}
              </small>
            </p>
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Classe energetica (APE) /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.APE ? 'Presente' + (listing.APEClass ? ` (classe ${listing.APEClass})` : '') : 'In corso'}
              </small>
            </p>
            <p className='text-xl lg:text-2xl  text-black font-extrabold'>RTI /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.RTI ? 'Presente' : 'In corso'}
              </small>
            </p>
            {listing.yearOfConstruction && (
              <p className='text-xl lg:text-2xl  text-black font-extrabold'>Anno di costruzione /
                <small className='ms-2 font-semibold text-primary-700'>
                  {listing.yearOfConstruction}
                </small>
              </p>
            )}

            <p className='text-xl lg:text-2xl  text-black font-extrabold'>Stato interno /
              <small className='ms-2 font-semibold text-primary-700'>
                {listing.internalState !== null && listing.internalState.charAt(0).toUpperCase() + listing.internalState.slice(1)}
              </small>
            </p>
            {listing.internalState === 'ristrutturato' && (
              <p className='text-xl lg:text-2xl  text-black font-extrabold'>Anno di ristrutturazione /
                <small className='ms-2 font-semibold text-primary-700'>
                  {listing.yearOfRenovation}
                </small>
              </p>
            )}
            {listing.fixtures && (
              <p className='text-xl lg:text-2xl  text-black font-extrabold'>Infissi /
                <small className='ms-2 font-semibold text-primary-700'>
                  {listing.fixtures}
                </small>
              </p>
            )}
            {listing.deliberatedCondominiumWorks && (
              <p className='text-xl lg:text-2xl  text-black font-extrabold'>Lavori condominiali deliberati /
                <small className='ms-2 font-semibold text-primary-700'>
                  {listing.deliberatedCondominiumWorks}
                </small>
              </p>
            )}
            {listing.lastCondominiumWorks && (
              <p className='text-xl lg:text-2xl  text-black font-extrabold'>Ultimi lavori condominiali /
                <small className='ms-2 font-semibold text-primary-700'>
                  {listing.lastCondominiumWorks}
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
