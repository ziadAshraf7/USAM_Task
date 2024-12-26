

import React from 'react'
import PrimaryInput from './Custom Inputs/PrimaryInput'
import PrimaryButton from './custom buttons/PrimaryButton'

export default function Footer() {
  return (
    <section id='footer' className='bg-aqua h-[593px]'>
      <div className='container h-full mx-auto p-10  text-center '>
        <div className='flex h-full flex-col justify-between items-center '>
            {/* upper section */}

                <div className='flex items-center space-x-10'>
                    <div><img className='w-[100px] h-[100px] md:w-[111px] md:h-[111px]' src={require("../imgs/Ellipse.png")} /></div>
                    <div className='bg-darkGrey h-[83px] w-[1px] text-staleBlue'></div>
                    <span className='text-teal font-bold text-subtitle-md md:text-subtitle-lg'>Your Best <br/> Platform</span>
                </div>

            {/* middle section */}
            <div className='flex flex-col items-center space-y-5'>
                <p className='text-gray text-subtitle-lg md:text-heading-sm '>Subscribe to get our Newsletter</p>
                <div className='flex space-x-5 items-center'>
                    <PrimaryInput />
                    <PrimaryButton isRounded={true} >Subscripe</PrimaryButton>
                </div>
            </div>

            {/* bottom section */}
            <div className='flex flex-col text-body-text md:text-subtitle-lg items-center space-y-5 '>
                <div className='flex space-x-5 text-lavenderGray'>
                    <span>Education</span>
                    <span>|</span>
                    <span>Career</span>
                    <span>|</span>
                    <span>Freelancing</span>
                </div>
                <div className='text-lavenderGray '>© 2024-2025 Class Technologies Inc. </div>
            </div>
        </div>
      </div>
    </section>
  )
}
