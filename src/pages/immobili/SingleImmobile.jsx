import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useListing from '../../hooks/useListing'

const SingleImmobile = () => {
  const { id } = useParams()
  const { listing, loading, error } = useListing(id)
  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading listing: {error.message}</div>
  if (!listing) return <div>No listing found</div>

  const isFormFilled = userName.trim() !== '' && userSurname.trim() !== ''

  return (
    <>
      <div className='2xl:grid 2xl:grid-cols-4 px-20 pt-10'>
        <div className='grid gap-4 col-span-2'>
          <div className='relative max-w-2xl mx-auto'>
            <img className='h-auto max-w-2xl mx-auto w-full rounded-lg' src={listing.images[0]} alt='' />
            <span className='absolute text-primary-100 font-bold hover:text-black bottom-0 right-0 p-2 m-2 lg:p-4 lg:m-4 text-xs border border-primary-300 hover:bg-primary-300 active:bg-primary-200 cursor-pointer rounded-lg transition-all ease-in'>
              Guarda {listing.images.length} foto
            </span>
          </div>
          <div className='grid grid-cols-4 gap-4 max-w-2xl mx-auto'>
            {listing.images.slice(1, 5).map((image, index) => (
              <div key={index}>
                <img className='h-auto max-w-full w-full rounded-lg' src={image} alt='' />
              </div>
            ))}
          </div>
        </div>
        <div className='hidden 2xl:flex w-full h-full items-center justify-center col-span-2 bg-white rounded-lg'>
          <div className='flex flex-col items-center pb-10'>
            <img className='w-24 h-24 mb-3 rounded-full shadow-lg' src='/logotemp.png' alt='logo' />
            <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>Eden House</h5>
            <span className='text-sm text-gray-500'>Via Saragozza 112/O, Bologna (BO)</span>
            <span className='text-sm text-gray-500 font-bold'>051 541 541</span>
            <form className='mt-10'>
              <h3 className='text-2xl text-center mb-2'>Ti interessa?</h3>
              <div className='flex gap-2'>
                <input className='rounded-lg' type='text' name='name' id='name' placeholder='Nome' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input className='rounded-lg' type='text' name='surname' id='surname' placeholder='Cognome' value={userSurname} onChange={(e) => setUserSurname(e.target.value)} />
              </div>
              <div className='flex flex-col mt-4 gap-2'>
                <a
                  href={`https://wa.me/393517404147?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+chiedere+un+informazione+in+merito+all'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
                  className={`inline-flex w-full items-center px-4 py-2 text-sm font-medium text-center text-black bg-primary-300 rounded-lg hover:bg-primary-400 focus:outline-none ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
                  disabled={!isFormFilled}
                  onClick={(e) => !isFormFilled && e.preventDefault()}
                >
                  Richiedi informazioni
                </a>
                <a
                  href={`https://wa.me/393517404147?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+prenotare+una+visione+per+l'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
                  className={`py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-white rounded-lg border w-full border-gray-200 hover:bg-gray-100 hover:text-primary-70 ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
                  disabled={!isFormFilled}
                  onClick={(e) => !isFormFilled && e.preventDefault()}
                >
                  Richiedi una visita
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='my-10'>
        <h1 className='text-center text-3xl'>{listing.title}</h1>
        <p className='text-center text-gray-400'>{listing.address}, {listing.municipality}</p>
        <p className='text-center'>{listing.description}</p>
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
          <p className='border'>Riscaldamento</p>
          <p className='border'>Ascensore</p>
          <p className='border'>Arredato</p>
        </div>
      </div>

      {/* MOBILE SCHEDA AGENZIA */}
      <div className='2xl:hidden flex w-full h-full items-center justify-center col-span-2 bg-white rounded-lg'>
        <div className='flex flex-col items-center pb-10'>
          <img className='w-24 h-24 mb-3 rounded-full shadow-lg' src='/logotemp.png' alt='logo' />
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>Eden House</h5>
          <span className='text-sm text-gray-500'>Via Saragozza 112/O, Bologna (BO)</span>
          <span className='text-sm text-gray-500 font-bold'>051 541 541</span>
          <form className='mt-10'>
            <h3 className='text-2xl text-center mb-2'>Ti interessa?</h3>
            <div className='flex gap-2'>
              <input className='rounded-lg' type='text' name='name' id='name' placeholder='Nome' value={userName} onChange={(e) => setUserName(e.target.value)} />
              <input className='rounded-lg' type='text' name='surname' id='surname' placeholder='Cognome' value={userSurname} onChange={(e) => setUserSurname(e.target.value)} />
            </div>
            <div className='flex flex-col mt-4 gap-2'>
              <a
                href={`https://wa.me/393517404147?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+chiedere+un+informazione+in+merito+all'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
                className={`inline-flex w-full items-center px-4 py-2 text-sm font-medium text-center text-black bg-primary-300 rounded-lg hover:bg-primary-400 focus:outline-none ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
                disabled={!isFormFilled}
                onClick={(e) => !isFormFilled && e.preventDefault()}
              >
                Richiedi informazioni
              </a>
              <a
                href={`https://wa.me/393517404147?text=Salve,+sono+${encodeURIComponent(userName)}+${encodeURIComponent(userSurname)}+e+vorrei+prenotare+una+visione+per+l'immobile+con+riferimento+${listing._id},+che+ho+visto+sul+vostro+sito.`}
                className={`py-2 px-4 text-sm font-medium text-primary-900 focus:outline-none bg-white rounded-lg border w-full border-gray-200 hover:bg-gray-100 hover:text-primary-70 ${isFormFilled ? '' : 'opacity-50 cursor-not-allowed'}`}
                disabled={!isFormFilled}
                onClick={(e) => !isFormFilled && e.preventDefault()}>
                Richiedi una visita
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SingleImmobile
