import React from 'react'

export default function SecondaryButton({ children }) {
  return (
    <button className="text-body-text hover:text-teal transition-colors duration-200 text-darkCyan flex space-x-2">
      {children}{' '}
      <span>
        <img src={require('../../imgs/arrow.png')} />
      </span>
    </button>
  )
}
