

import React from 'react'
import CustomListItem from './CustomListItem'

const list = [{
    title : "Skill Development" , 
    iconImagePath : require('../imgs/skill/Frame 1261154690.png')
  } , 
  {
    title : "Networking Opportunities" , 
    iconImagePath : require('../imgs/ongoing.png')
  } ,
  {
    title : "Exclusive Training" , 
    iconImagePath : require('../imgs/ex-training.png')
  } ,
  {
    title : "Recognition and Experience" , 
    iconImagePath : require('../imgs/experience.png')
  } ,
  {
    title : "Support and Resources" , 
    iconImagePath : require('../imgs/support and resources .png')
  } ,
  {
    title : "Career Advancement" , 
    iconImagePath : require('../imgs/career.png')
  } 
]

export default function OverView() {
  return (
   <section id='programDetails' className='bg-teal py-10'>
                {/* container */}
               <div className='flex flex-col items-center text-center space-y-20'>
                   {/* upper section */}
                       <div className='flex flex-col space-y-3 items-center'>
                       <span className='text-heading-md md:text-heading-xl font-bold text-white'>Benefits of Joining USAM <span className='text-amber'>Ambassadors</span>  Program</span>                       
                       <p className='text-caption  max-w-xl md:max-w-3xl md:text-subtitle-md text-darkGrey'>USAM Ambassadors promote events, create content, engage communities, represent USAM at events, and provide feedback</p>
                       </div>
                  
                   {/* bottom section */}
                 
                   <div className='container  flex flex-col-reverse space-y-5 md:space-y-0 items-center md:flex-row md:space-x-5 md:justify-between md:items-center '>
                            {/* left section */}
                            <div className='md:w-1/2 flex justify-center'>
                                <img className='w-[200px] h-[200px] md:w-[500px] md:h-[500px]' src={require('../imgs/benifits.png')} />
                            </div>

                            {/* right section */}
                            <div className='w-[320px] sm:w-[600px] md:w-1/2 flex flex-col space-y-5 '>
                                {list.map((li) => <CustomListItem {...li} />)}
                            </div>
                   </div>
               </div>
       </section>
  )
}
