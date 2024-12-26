
import React from 'react'
import PrimaryButton from './custom buttons/PrimaryButton'

export default function JoinNowFooterPrimary() {
  return (
    <section className='bg-teal' id='joinNow footer'>
      <div className='container mx-auto p-5'>
        <div className='flex text-center flex-col space-y-5 items-center'>
            <p className='text-heading-md text-white font-bold md:text-heading-lg'>Don’t miss the opportunity and start with <span className='text-amber'>WISE</span>  now!</p>
            <PrimaryButton>Join Now</PrimaryButton>
        </div>
      </div>
    </section>
  )
}


