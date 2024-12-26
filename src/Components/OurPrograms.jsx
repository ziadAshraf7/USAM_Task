import React from 'react'
import ProgramCard from './ProgramCard'
const programInfoList = [
  {
    title: 'Wise Program',
    paragraph:
      'WISE equips learners with skills through gamification, courses, and mentorship',
    imageIconPath: require('../imgs/Group 1.png'),
    joinNowDestinationUrl: '',
  },
  {
    title: 'USC Program',
    paragraph:
      'USAM Skills Club Bridging education and employment through skills, guidance, and career support.',
    imageIconPath: require('../imgs/Group 2.png'),
    joinNowDestinationUrl: '',
  },
  {
    title: 'Spark Program',
    paragraph:
      'USAM SPARK empowers entrepreneurs with tools, mentorship, and sustainable growth strategies.',
    imageIconPath: require('../imgs/Group 3.png'),

    joinNowDestinationUrl: '',
  },
  {
    title: 'Ambassadors Program',
    paragraph:
      'USAM SPARK empowers entrepreneurs with tools, mentorship, and sustainable growth strategies.',
    imageIconPath: require('../imgs/Group 4.png'),

    joinNowDestinationUrl: '',
  },
]

export default function OurPrograms() {
  return (
    <section id="OurPrograms">
      <div className="container mx-auto p-10">
        <div className="flex flex-col items-center space-y-20">
          {/* Top Section */}
          <div className="text-center">
            <span className="text-teal text-heading-lg md:text-heading-xl font-bold">Our Programs</span>
            <p className="text-darkGrey  text-caption md:text-subtitle-md max-w-4xl">
              With WISE, SPARK, USAM Scales Club, and USAM Ambassador, unlock
              your potential to excel in learning, working, and leading.
            </p>
          </div>

          {/* bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[95%]">
            {programInfoList.map((pi, indx) => (
              <ProgramCard key={indx} {...pi} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
