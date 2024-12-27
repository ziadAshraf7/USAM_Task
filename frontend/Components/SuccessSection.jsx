

import React from 'react'

export default function SuccessSection() {
  return (
    <section id='success'>
      <div className='container mx-auto p-20'>
        <div className='flex items-center text-center space-y-5 flex-col p-2'>
            <img className='w-[100px] h-[100px] md:w-[138px] md:h-[138px]' src={require("../imgs/check markk.png")} />
            <div className='text-subtitle-lg md:text-heading-sm text-teal'>Submitted Successfully !</div>
            <p className='text-caption md:text-body-text text-emeraldGreen max-w-sm'>please check your email for more details.</p>
        </div>
      </div>
    </section>
  )
}
