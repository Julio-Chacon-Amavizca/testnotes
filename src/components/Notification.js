import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <label className="block">
      <p class="mt-2 text-pink-600 text-sm">
        {message}
      </p>
    </label>
  )
}

export default Notification