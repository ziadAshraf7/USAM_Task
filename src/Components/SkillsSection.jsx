

import React from 'react'
import SkillCard from './SkillCard'

const skillsList = [
    {title : "Academic Year Timeline" , infoList : 
        ["Semester 1 (Months 1-3): Focus on AI, coding, and language skills." , 
            "Semester 2 (Months 4-6): Emphasis on entrepreneurship and marketing strategies." 
        ]}
   , {title : "Activities and Events" , infoList : ["Organize workshops, bootcamps, and training sessions." , 
    "Host competitions, networking events, and guest lectures." , 
   "Facilitate language practice and career support activities." ]}
   , {title : "Success Measurement" , infoList : ["Monitor participation levels and feedback." , 
    "Track internships, job placements, and project outcomes." ,
"Conduct annual evaluations and reviews to improve program effectiveness." ]}

]

export default function SkillsSection() {
  return (
    <section id='skills' className='bg-teal py-10'>
        <div className='flex flex-col items-center space-y-10'>
            <p className='text-heading-md md:text-heading-xl text-white font-bold'>USAM Skills Club (USC) Plan</p>

            <div className='mx-10 grid grid-cold-1 md:grid-cols-3 gap-5'>
                {skillsList.map((s) => {
                    return <SkillCard  {...s} />
                })}
            </div>

        </div>
    </section>
  )
}
