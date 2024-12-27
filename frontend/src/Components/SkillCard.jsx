

import React from 'react'

export default function SkillCard({title , infoList}) {
  return (
    <section id='skillCard' className='bg-white rounded-2xl p-5'>
      <div className='flex flex-col h-[340px] space-y-10 items-center '>
            <p className='text-heading-md text-teal font-bold'>{title}</p>
            <div className='flex flex-col space-y-10'>
                {infoList.map(content => <div className='flex space-x-5'>
                    <img className='w-[32px] h-[32px]' src={require('../imgs/check-mark 1.png')} />
                    <span className=' text-caption text-darkGrey'>{content}</span>
                </div>)}
            </div>
          
      </div>
    </section>
  )
}
