

import React from 'react'

export default function CustomListItem({
  title , 
  iconImagePath
}) {
  return (
    <section id='listItem' className='flex items-center p-1 md:w-[350px]  lg:w-[584px] md:h-[103px] space-x-5  md:pl-10 bg-white border rounded-2xl border-softMint'>
        <div> <img className='w-[40px] h-[40px] md:w-[64px] md:h-[64px]' src={iconImagePath}  alt=''/> </div>
        <li className='flex   text-[16px] md:text-[18px] lg:text-[24px] text-teal font-bold '>{title}</li>
    </section>
  )
}
