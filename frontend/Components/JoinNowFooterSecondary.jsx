
import React from 'react'
import { Link } from 'react-router-dom'

export default function JoinNowFooterPrimary({
  title ,
  destination
}) {
  return (
    <section className='bg-white py-20' id='joinNow footer'>
      <div className='container mx-auto p-5'>
        <div className='flex text-center flex-col space-y-10 items-center'>
            <p dangerouslySetInnerHTML={{ __html: title }} className='text-heading-md text-teal font-bold md:text-heading-lg max-w-6xl'></p>
            <Link to={destination}><button className='btn-primary' style={{width : "250px"}}>Join Now</button></Link>
        </div>
      </div>
    </section>
  )
}


