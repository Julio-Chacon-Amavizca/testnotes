import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <label className="block">
      <p className="mt-2 text-pink-600 text-sm">
        {message}
      </p>
    </label>
  )
}

export default Notification