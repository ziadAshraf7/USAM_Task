import React from 'react'

export default function CustomButton({ children, width }) {
  return (
    <button
      className={`text-center text-[14px] md:text-[16px] h-[50px] w-[${width}px] bg-darkCyan text-offWhite`}
    >
      {children}
    </button>
  )
}
