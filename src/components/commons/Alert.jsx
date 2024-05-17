import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ type, children, extraClassNames }) => {
  const baseClasses = 'p-4 mb-4 text-sm rounded-lg role="alert"'
  const typeClasses = {
    info: 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400',
    danger: 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400',
    success: 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400',
    warning: 'text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300',
    dark: 'text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300'
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

export default Alert
