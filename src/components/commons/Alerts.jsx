import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ type, children, extraClassNames }) => {
  const baseClasses = 'p-4 mb-4 text-sm rounded-lg role="alert"'
  const typeClasses = {
    info: 'text-blue-800 bg-blue-50',
    danger: 'text-red-800 bg-red-50',
    success: 'text-green-800 bg-green-50',
    warning: 'text-yellow-800 bg-yellow-50',
    dark: 'text-gray-800 bg-primary-50/75'
  }

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${extraClassNames}`}>
      {children}
    </div>
  )
}
Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'danger', 'success', 'warning', 'dark']).isRequired,
  children: PropTypes.node.isRequired,
  extraClassNames: PropTypes.string
}
Alert.defaultProps = {
  extraClassNames: ''
}

export const InfoAlert = ({ bold, text, extraClassNames }) => {
  return (
    <Alert type='info' extraClassNames={extraClassNames}>
      <span className='mx-2'> &#8505; </span> <b> {bold} </b> {text}
    </Alert>
  )
}
InfoAlert.propTypes = {
  bold: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export const DangerAlert = ({ bold, text, extraClassNames }) => {
  return (
    <Alert type='danger' extraClassNames={extraClassNames}>
      <span className='mx-2'> &#9888; </span> <b> {bold} </b> {text}
    </Alert>
  )
}
DangerAlert.propTypes = {
  bold: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export const SuccessAlert = ({ bold, text, extraClassNames }) => {
  return (
    <Alert type='success' extraClassNames={extraClassNames}>
      <span className='mx-2'> &#10003; </span> <b> {bold} </b> {text}
    </Alert>
  )
}
SuccessAlert.propTypes = {
  bold: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export const WarningAlert = ({ bold, text, extraClassNames }) => {
  return (
    <Alert type='warning' extraClassNames={extraClassNames}>
      <span className='mx-2'> &#9888; </span> <b> {bold} </b> {text}
    </Alert>
  )
}
WarningAlert.propTypes = {
  bold: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export const DarkAlert = ({ bold, text, extraClassNames }) => {
  return (
    <Alert type='dark' extraClassNames={extraClassNames}>
      <span className='mx-2'> &#9888; </span> <b> {bold} </b> {text}
    </Alert>
  )
}
DarkAlert.propTypes = {
  bold: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
