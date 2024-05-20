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

const SingleImmobile = () => {
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

  return (
    <>
      <div className='2xl:grid 2xl:grid-cols-4 px-4 xl:px-40 pt-10 gap-4'>
        <ImageGallery listing={listing} />
        <AgencyInfo
          isMobile={isMobile}
          isFormFilled={isFormFilled}
          listing={listing}
          setIsModalVisible={setIsModalVisible}
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

      <div className='my-4 bg-gray-100 px-4 py-6 mx-4 xl:mx-40 rounded-lg'>
        <h1 className='text-center font-bold text-3xl lg:text-5xl'>{listing.title} </h1>
        <p className='text-center text-md lg:text-lg font-bold text-gray-400'>{listing.address}, {listing.municipality}</p>
        <p className='text-justify text-sm md:text-md lg:text-lg p-8'>{listing.description}</p>
        <hr className='my-6' />
        <ListingDetails listing={listing} />
      </div>

      {listing.plan && <Plan listing={listing} />}

      <AgencyInfoMobile
        isMobile={isMobile}
        isFormFilled={isFormFilled}
        listing={listing}
        setIsModalVisible={setIsModalVisible}
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
        onClose={() => setIsModalVisible(false)}
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
    </>
  )
}

export default SingleImmobile
