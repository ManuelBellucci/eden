import React, { useState, Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
import useListing from '../../hooks/useListing'
import useMobileDetect from '../../hooks/useMobileDetect'
import { generateNextNDays, times } from '../../helpers/dateHelpers'

const VisitModal = lazy(() => import('../../components/immobili/singleImmobile/VisitModal'))
const ImageGallery = lazy(() => import('../../components/immobili/singleImmobile/ImageGallery'))
const AgencyInfo = lazy(() => import('../../components/immobili/singleImmobile/AgencyInfo'))
const ListingDetails = lazy(() => import('../../components/immobili/singleImmobile/ListingDetails'))
const AgencyInfoMobile = lazy(() => import('../../components/immobili/singleImmobile/AgencyInfoMobile'))
const Plan = lazy(() => import('../../components/immobili/singleImmobile/Plan'))
const VirtualTour = lazy(() => import('../../components/immobili/singleImmobile/VirtualTour'))

const SingleImmobile = ({ setIsNavbarVisible }) => {
  const { id } = useParams()
  const { listing, loading, error } = useListing(id)
  const isMobile = useMobileDetect()

  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [visitType, setVisitType] = useState('visita fisica')
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
        <Suspense fallback={<div>Loading...</div>}>
          <ImageGallery listing={listing} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </div>

      <div className='my-4 bg-primary-900 shadow-md p-6 mx-4 xl:mx-40 rounded-lg'>
        <h2 className='text-primary-50 text-center font-bold text-3xl lg:text-5xl'>{listing.title} </h2>
        <p className='text-primary-50 text-center text-base lg:text-lg font-bold '>{listing.address}, {listing.municipality}</p>
        <p className='text-primary-50 text-center text-sm md:text-base break-words lg:text-lg p-8'>{listing.description}</p>
        <hr className='my-6' />
        <Suspense fallback={<div>Loading...</div>}>
          <ListingDetails listing={listing} />
        </Suspense>
      </div>

      <div className={`my-4 rounded-lg ${listing.video ? 'grid grid-cols-1 md:grid-cols-2' : 'flex justify-center'} gap-0 md:gap-4 mx-4 xl:mx-40 bg-primary-900 shadow-md`}>
        <div className={`${listing.plan.length >= 1 ? '' : 'w-full flex justify-center'}`}>
          {listing.plan.length >= 1 && (
            <Suspense fallback={<div>Loading...</div>}>
              <Plan listing={listing} />
            </Suspense>
          )}
        </div>
        {listing.video && (
          <div className='pt-0 pb-6 md:pt-6 px-6 md:pl-0 rounded-lg'>
            <div className='flex justify-center h-full rounded-lg shadow-md bg-primary-50 p-4'>
              <video
                className='rounded-lg w-full shadow-md'
                controls
                muted
                autoPlay
                loop
              >
                <source src={listing.video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
      {listing.virtualTour.length > 0 && (
        <div className='my-4 bg-primary-900 shadow-md px-2 py-2 mx-4 xl:mx-40 rounded-lg'>
          <button
            aria-label='Open virtual tour'
            className='text-3xl font-extrabold leading-none shadow-md bg-primary-50 p-4 w-full mx-auto rounded-lg text-primary-950 md:text-4xl lg:text-5xl uppercase'
            onClick={() => handleTourModalVisibility(true)}
          >Clicca qui per vedere il Virtual Tour
          </button>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <Suspense fallback={<div>Loading Virtual Tour...</div>}>
        <VirtualTour
          isVisible={isTourModalVisible}
          onClose={() => handleTourModalVisibility(false)}
          images={listing.virtualTour}
          currentSceneIndex={currentSceneIndex}
          setCurrentSceneIndex={setCurrentSceneIndex}
        />
      </Suspense>
    </>
  )
}

export default SingleImmobile
