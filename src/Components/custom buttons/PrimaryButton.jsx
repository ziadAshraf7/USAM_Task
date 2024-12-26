import React from 'react'

export default function CustomButton({ children, width , isRounded}) {
  return (
    <button
      className={`${isRounded && 'rounded-l-3xl rounded-r-3xl'} hover:bg-teal transition duration-150 text-center text-caption md:text-body-text h-[50px] px-4 bg-darkCyan text-offWhite`}
    >
      {children}
    </button>
  )
}
