

import React from 'react'

export default function ErrorComponent({
    errorMessage
}) {
  return (
    <section id='error'>
      <p className='text-center bg-red-700 text-white min-w-[200px] p-2 w-fit h-fit'>
        {errorMessage}
      </p>
    </section>
  )
}
