import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useListing from '../../hooks/useListing'
import useMobileDetect from '../../hooks/useMobileDetect'
import VisitModal from '../../components/immobili/singleImmobile/VisitModal'
import { generateNextNDays, times } from '../../helpers/dateHelpers'
import ImageGallery from '../../components/immobili/singleImmobile/ImageGallery'
import AgencyInfo from '../../components/immobili/singleImmobile/AgencyInfo'
import ListingDetails from '../../components/immobili/singleImmobile/ListingDetails'
import AgencyInfoMobile from '../../components/immobili/singleImmobile/AgencyInfoMobile'
import Plan from '../../components/immobili/singleImmobile/Plan'
import VirtualTour from '../../components/immobili/singleImmobile/VirtualTour'

const SingleImmobile = ({ setIsNavbarVisible }) => {
  const { id } = useParams()
  const { listing, loading, error } = useListing(id)
  const isMobile = useMobileDetect()

  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [visitType, setVisitType] = useState('in-person')
  const [selectedDates, setSelectedDates] = useState([])
  const [selectedTimes, setSelectedTimes] = useState([])

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isTourModalVisible, setIsTourModalVisible] = useState(false)
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading listing: {error.message}</div>
  if (!listing) return <div>No listing found</div>

  const isFormFilled = userName.trim() !== '' && userSurname.trim() !== '' && userPhone.trim() !== '' && userEmail.trim() !== ''
  const dates = generateNextNDays(15)

  const handleDateChange = (date) => {
    setSelectedDates((prevSelectedDates) =>
      prevSelectedDates.includes(date)
        ? prevSelectedDates.filter((d) => d !== date)
        : [...prevSelectedDates, date]
    )
  }

  const handleTimeChange = (time) => {
    setSelectedTimes((prevSelectedTimes) =>
      prevSelectedTimes.includes(time)
        ? prevSelectedTimes.filter((t) => t !== time)
        : [...prevSelectedTimes, time]
    )
  }

  const handleModalVisibility = (isVisible) => {
    setIsModalVisible(isVisible)
    setIsNavbarVisible(!isVisible)
  }

  const handleTourModalVisibility = (isVisible) => {
    setIsTourModalVisible(isVisible)
    setIsNavbarVisible(!isVisible)
  }

  return (
    <>
      <div className='2xl:grid 2xl:grid-cols-4 px-4 xl:px-40 pt-10 gap-4'>
        <ImageGallery listing={listing} />
        <AgencyInfo
          isMobile={isMobile}
          isFormFilled={isFormFilled}
          listing={listing}
          setIsModalVisible={() => handleModalVisibility(true)}
          setUserEmail={setUserEmail}
          setUserName={setUserName}
          setUserPhone={setUserPhone}
          setUserSurname={setUserSurname}
          userEmail={userEmail}
          userName={userName}
          userPhone={userPhone}
          userSurname={userSurname}
        />
      </div>

      <div className='my-4 bg-gray-100 shadow-md p-6 mx-4 xl:mx-40 rounded-lg'>
        <h1 className='text-center font-bold text-3xl lg:text-5xl'>{listing.title} </h1>
        <p className='text-center text-md lg:text-lg font-bold text-gray-400'>{listing.address}, {listing.municipality}</p>
        <p className='text-center text-sm md:text-md break-words lg:text-lg p-8'>{listing.description}</p>
        <hr className='my-6' />
        <ListingDetails listing={listing} />
      </div>

      <div className={`my-4 rounded-lg ${listing.video ? 'grid grid-cols-1 md:grid-cols-2' : 'flex justify-center'} gap-0 md:gap-4 mx-4 xl:mx-40 bg-gray-100 shadow-md`}>
        <div className={`${listing.video ? '' : 'w-full flex justify-center'}`}>
          {listing.plan.length >= 1 && <Plan listing={listing} />}
        </div>
        {listing.video && (
          <div className='pt-0 pb-6 md:pt-6 px-6 md:pl-0 rounded-lg'>
            <div className='flex justify-center h-full rounded-lg shadow-md bg-white p-4'>
              <iframe
                className='rounded-lg w-full aspect-video shadow-md'
                src={`${listing.video}?&mute=1&controls=0`}
                title='Video immobile'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
      {/* verify virtualTour is not an empty array */}
      {listing.virtualTour.length > 0 && (
        <div className='my-4 bg-gray-100 shadow-md px-4 py-4 mx-4 xl:mx-40 rounded-lg'>
          <button className='text-3xl font-extrabold leading-none tracking-tight shadow-md bg-white p-4 w-full mx-auto rounded-lg text-primary-700 md:text-4xl lg:text-5xl uppercase' onClick={() => handleTourModalVisibility(true)}>Clicca qui per vedere il Virtual Tour</button>
        </div>
      )}
      <AgencyInfoMobile
        isMobile={isMobile}
        isFormFilled={isFormFilled}
        listing={listing}
        setIsModalVisible={() => handleModalVisibility(true)}
        setUserEmail={setUserEmail}
        setUserName={setUserName}
        setUserPhone={setUserPhone}
        setUserSurname={setUserSurname}
        userEmail={userEmail}
        userName={userName}
        userPhone={userPhone}
        userSurname={userSurname}
      />
      <VisitModal
        isVisible={isModalVisible}
        onClose={() => handleModalVisibility(false)}
        userName={userName}
        setUserName={setUserName}
        userSurname={userSurname}
        setUserSurname={setUserSurname}
        userPhone={userPhone}
        setUserPhone={setUserPhone}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        visitType={visitType}
        setVisitType={setVisitType}
        dates={dates}
        selectedDates={selectedDates}
        handleDateChange={handleDateChange}
        times={times}
        selectedTimes={selectedTimes}
        handleTimeChange={handleTimeChange}
        isFormFilled={isFormFilled}
      />
      <VirtualTour
        isVisible={isTourModalVisible}
        onClose={() => handleTourModalVisibility(false)}
        images={listing.virtualTour}
        currentSceneIndex={currentSceneIndex}
        setCurrentSceneIndex={setCurrentSceneIndex}
      />
    </>
  )
}

export default SingleImmobile
