

import React from 'react'
import CustomListItem from './CustomListItem'

export default function ProgramDetails({
    title ,
    list ,
    paragraph,
    backgroundIconPath
}) {
  return (
    <section id='programDetails'>
        <div className=' py-10 '>
            <div className='flex flex-col items-center space-y-20'>

                {/* upper section */}
                    <div className='flex flex-col items-center text-center'>
                        <p className='text-teal text-center text-heading-md md:text-heading-xl font-bold'>{title}</p>
                        <p className='text-caption md:text-subtitle-md max-w-5xl text-darkGrey'>{paragraph}</p>
                    </div>
                {/* bottom section */}
                <div className='flex container flex-col items-center md:flex-row md:space-x-5 md:justify-between md:items-center '>
                    {/* left section */}
                    <div className='w-[320px] sm:w-[600px] md:w-2/3 flex flex-col space-y-5 '>
                        {list.map((li) => <CustomListItem {...li} />)}
                    </div>
                    {/* right section */}
                    <div className='md:w-1/3 flex justify-center'>
                        <img className='w-[200px] h-[200px] md:w-[500px] md:h-[500px]' src={backgroundIconPath} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
