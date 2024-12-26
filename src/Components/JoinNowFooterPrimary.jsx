
import React from 'react'
import PrimaryButton from './custom buttons/PrimaryButton'
import { Link } from 'react-router-dom'

export default function JoinNowFooterPrimary({
  destination
}) {
  return (
    <section className='bg-teal py-10' id='joinNow footer'>
      <div className='container mx-auto p-5'>
        <div className='flex text-center flex-col space-y-5 items-center'>
            <p className='text-heading-md text-white font-bold md:text-heading-lg'>Don’t miss the opportunity and start with <span className='text-amber'>WISE</span>  now!</p>
            <Link to={destination}><button className='btn-primary'>Join Now</button></Link>
        </div>
      </div>
    </section>
  )
}


