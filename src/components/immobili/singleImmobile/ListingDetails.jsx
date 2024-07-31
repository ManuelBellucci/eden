const ListingDetails = ({ listing }) => {
  if (listing.tipology === 'Garage e posti auto') {
    // Render the specific content for garage
    return (
      <div className='mt-10 '>
        <div className='mb-5 pb-5 text-center h-full bg-primary-50 rounded-lg p-4 shadow-md'>
          <h3 className='mb-4 text-2xl font-extrabold leading-none text-primary-950 md:text-3xl lg:text-4xl uppercase'>Specifiche del garage</h3>
          <div className='flex flex-col'>
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Superficie
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.garageSqm} m²
              </small>
            </div>
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Bocca
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.numGarage}
              </small>
            </div>
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Altezza
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.numGarage}
              </small>
            </div>
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Larghezza porta
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.numGarage}
              </small>
            </div>
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Piano
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.floor}
              </small>
            </div>
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
      <div className='mb-5 pb-5 h-full bg-primary-50 rounded-lg p-4 shadow-md'>
        <h3 className='mb-4 text-2xl font-extrabold leading-none text-primary-500 md:text-3xl lg:text-4xl uppercase'>Caratteristiche</h3>
        <div className='flex flex-col'>
          {listing.type && (
            <div className='text-xl lg:text-2xl font-extrabold'>
              Contratto
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.type !== null && listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}
              </small>
            </div>
          )}
          {listing.tipology && (
            <div className='text-xl lg:text-2xl font-extrabold'>Tipologia
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.tipology !== null && listing.tipology.charAt(0).toUpperCase() + listing.tipology.slice(1)}
              </small>
            </div>
          )}
          {listing.commercialSqm && (
            <div className='text-xl lg:text-2xl font-extrabold'>Superficie
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.commercialSqm} m² comm. | {listing.walkableSqm} m² calp.
              </small>
            </div>
          )}
          {listing.rooms && (
            <div className='text-xl lg:text-2xl font-extrabold'>Locali
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.rooms} ({listing.singleBedrooms + listing.doubleBedrooms} camere da letto, {(listing.rooms - (listing.singleBedrooms + listing.doubleBedrooms))} altro)
              </small>
            </div>
          )}
          {(listing.floor !== undefined && listing.floor !== null) && listing.buildingFloors && listing.elevator !== null && (
            <div className='text-xl lg:text-2xl font-extrabold'>Piano
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.floor === 0 ? 'T' : listing.floor} di {listing.buildingFloors} {listing.elevator ? 'con ascensore' : 'senza ascensore'}
              </small>
            </div>
          )}
          {listing.expositions && (
            <div className='text-xl lg:text-2xl font-extrabold'>Esposizioni
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.expositions}
              </small>
            </div>
          )}

          <div className='text-xl lg:text-2xl font-extrabold'>Disponibilità
            <small className='italic ms-2 font-semibold text-primary-800'>
              {listing.rented ? 'Affittato' : listing.empty ? 'Libero subito' : 'Libero a rogito'}
              {listing.rented && (
                <div className='flex flex-col'>
                  {listing.annualRent && (
                    <div className='not-italic text-xl lg:text-2xl text-primary-950 font-extrabold'>Rendita
                      <small className='italic ms-2 font-semibold text-primary-800'>
                        € {listing.annualRent ? listing.annualRent.toLocaleString() : 'N/A'},00
                      </small>
                    </div>
                  )}
                  {listing.rentContract && listing.rentedUntil && (
                    <>
                      <div className='not-italic text-xl lg:text-2xl text-primary-950 font-extrabold'>Contratto
                        <small className='italic ms-2 font-semibold text-primary-800'>
                          {listing.rentContract !== null && listing.rentContract.charAt(0).toUpperCase() + listing.rentContract.slice(1)}
                        </small>
                      </div>

                      <div className='not-italic text-xl lg:text-2xl text-primary-950 font-extrabold'>Scadenza
                        <small className='italic ms-2 font-semibold text-primary-800'>
                          {new Date(listing.rentedUntil).toLocaleDateString('it-IT')}
                        </small>
                      </div>
                    </>
                  )}
                </div>
              )}
            </small>
          </div>

          <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Bagni
            <small className='italic ms-2 font-semibold text-primary-800'>
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
          </div>

        </div>
      </div>

      <div className='mb-5 pb-5 h-full bg-primary-50 rounded-lg p-4 shadow-md'>
        <h3 className='mb-4 text-2xl font-extrabold leading-none text-primary-500 md:text-3xl lg:text-4xl uppercase'>Pertinenze</h3>
        <div className='flex flex-col'>
          {listing.closet && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Rispostiglio
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.closet ? 'Si' : 'No'}
              </small>
            </div>
          )}
          {listing.cellar && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Cantina
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.cellar ? 'Si' : 'No'}
                {listing.cellar && listing.cellarSqm.length > 1 && <span> ({listing.cellarSqm.length})</span>}
              </small>
            </div>
          )}
          {listing.cellar && listing.cellarSqm.length > 1 && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Metrature cantine
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.cellarSqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.cellarSqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </div>
          )}
          {listing.cellar && listing.cellarSqm.length === 1 && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Metratura cantina
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.cellarSqm}m²
              </small>
            </div>
          )}

          {listing.garage && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Garage
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.garage ? 'Si' : 'No'}
                {listing.garage && listing.numGarage > 1 && <span> ({listing.numGarage})</span>}
              </small>
            </div>
          )}
          {listing.garage && listing.numGarage > 1 && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Superficie garage
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.garageSqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.garageSqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </div>
          )}
          {listing.garage && listing.numGarage === 1 && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Superficie garage
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.garageSqm}m²
              </small>
            </div>
          )}

          {listing.parkingSpace && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Posto auto
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.parkingSpace ? 'Si' : 'No'}
                {listing.parkingSpace && listing.numParkingSpace > 1 && <span> ({listing.numParkingSpace})</span>}
              </small>
            </div>
          )}
          {listing.parkingSpace && listing.numParkingSpace > 1 && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Tipologia posti auto
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.parkingSpaceType.map((type, index) => (<span key={index}>{type !== null && type.charAt(0).toUpperCase() + type.slice(1)}{index < listing.parkingSpaceType.length - 1 ? ', ' : ''}</span>))}
              </small>
            </div>
          )}
          {listing.parkingSpace && listing.numParkingSpace === 1 && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Tipologia posto auto
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.parkingSpaceType.map((type, index) => (<span key={index}>{type !== null && type.charAt(0).toUpperCase() + type.slice(1)}{index < listing.parkingSpaceType.length - 1 ? ', ' : ''}</span>))}
              </small>
            </div>
          )}

          {listing.privateGarden && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Giardino
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.privateGarden ? 'Si' : 'No'}
                {listing.privateGarden && <span> ({listing.gardenSqm}m²)</span>}
              </small>
            </div>
          )}
          {listing.condGarden && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Giardino condominiale
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.condGarden ? 'Si' : 'No'}
              </small>
            </div>
          )}
          {listing.terrace && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Terrazzo
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.terrace ? 'Si' : 'No'}
                {listing.terrace && listing.numTerrace > 1 && <span> ({listing.numTerrace})</span>}
              </small>
            </div>
          )}
          {listing.terrace && listing.numTerrace > 1 && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Superficie terrazzi
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.terraceSqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.terraceSqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </div>
          )}
          {listing.terrace && listing.numTerrace === 1 && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Superficie terrazzo
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.terraceSqm}m²
              </small>
            </div>
          )}

          {listing.balcony && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Balcone
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.balcony ? 'Si' : 'No'}
                {listing.balcony && listing.numBalcony > 1 && <span> ({listing.numBalcony})</span>}
              </small>
            </div>
          )}
          {listing.balcony && listing.numBalcony > 1 && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Superficie balconi
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.balconySqm.map((sqm, index) => (<span key={index}>{sqm}m²{index < listing.balconySqm.length - 1 ? ', ' : ''}</span>))}
              </small>
            </div>
          )}
          {listing.balcony && listing.numBalcony === 1 && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Superficie balcone
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.balconySqm}m²
              </small>
            </div>
          )}
        </div>
      </div>

      {/* Costs Information */}
      <div className='text-start h-full pb-5 mb-5 bg-primary-50 rounded-lg p-4 shadow-md'>
        <h3 className='mb-4 text-2xl font-extrabold text-start leading-none text-primary-500 md:text-3xl lg:text-4xl uppercase'>Costi</h3>
        <div className='flex flex-col items-start'>
          <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Prezzo
            <small className='italic ms-2 font-semibold text-primary-800'>
              € {listing.pubPrice.toLocaleString()},00
            </small>
          </div>
          <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Prezzo al m²
            <small className='italic ms-2 font-semibold text-primary-800'>
              € {((listing.pubPrice / listing.commercialSqm) || 0).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / m²
            </small>
          </div>
          {listing.monthlyCondominiumFees !== null && (
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Spese condominiali
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.monthlyCondominiumFees === null || listing.monthlyCondominiumFees === 0 ? 'Assente' : `€ ${listing.monthlyCondominiumFees},00 / mese`}
              </small>
            </div>
          )}
        </div>

        <h3 className='my-4 text-2xl font-extrabold text-start leading-none text-primary-500 md:text-3xl lg:text-4xl uppercase'>Extra</h3>
        <div className='flex justify-center'>
          <div className='flex flex-wrap gap-2 mr-auto max-w-sm'>
            {extraFeatures.map((feature, index) => (
              feature.value && <span key={index} className='px-3 py-1 border rounded-lg bg-primary-500'>{feature.label}</span>
            ))}
            {exposureTag && <span className='px-3 py-1 border rounded-lg bg-primary-500'>{exposureTag}</span>}
          </div>
        </div>
      </div>
      {/* efficienza energetica */}
      <div>
        <div className='text-start pb-5 h-full bg-primary-50 rounded-lg p-4 shadow-md'>
          <h3 className='mb-4 text-2xl font-extrabold text-start leading-none text-primary-500 md:text-3xl lg:text-4xl uppercase'>Efficienza energetica</h3>
          <div className='flex flex-col items-start'>
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Riscaldamento
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.heating !== null && listing.heating.charAt(0).toUpperCase() + listing.heating.slice(1)}, {listing.heatingType}
              </small>
            </div>

            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Classe energetica (APE)
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.APE ? 'Presente' + (listing.APEClass ? ` (classe ${listing.APEClass})` : '') : 'In corso'}
              </small>
            </div>
            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>RTI
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.RTI ? 'Presente' : 'In corso'}
              </small>
            </div>
            {listing.yearOfConstruction && (
              <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Anno di costruzione
                <small className='italic ms-2 font-semibold text-primary-800'>
                  {listing.yearOfConstruction}
                </small>
              </div>
            )}

            <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Stato interno
              <small className='italic ms-2 font-semibold text-primary-800'>
                {listing.internalState !== null && listing.internalState.charAt(0).toUpperCase() + listing.internalState.slice(1)}
              </small>
            </div>
            {listing.internalState === 'ristrutturato' && (
              <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Anno di ristrutturazione
                <small className='italic ms-2 font-semibold text-primary-800'>
                  {listing.yearOfRenovation}
                </small>
              </div>
            )}
            {listing.fixtures && (
              <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Infissi
                <small className='italic ms-2 font-semibold text-primary-800'>
                  {listing.fixtures}
                </small>
              </div>
            )}
            {listing.deliberatedCondominiumWorks && (
              <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Lavori condominiali deliberati
                <small className='italic ms-2 font-semibold text-primary-800'>
                  {listing.deliberatedCondominiumWorks}
                </small>
              </div>
            )}
            {listing.lastCondominiumWorks && (
              <div className='text-xl lg:text-2xl text-primary-950 font-extrabold'>Ultimi lavori condominiali
                <small className='italic ms-2 font-semibold text-primary-800'>
                  {listing.lastCondominiumWorks}
                </small>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingDetails
