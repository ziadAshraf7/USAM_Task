

import React from 'react'
import IntroSection from '../Components/IntroSection'
import ProgramDetails from '../Components/ProgramDetails'
import JoinNowFooterPrimary from '../Components/JoinNowFooterPrimary'
import { useEffect } from 'react'
import {registerationFormsPath} from "../utils"

const programDetails = {
    wisePage : {
       title : "Wise Core and value" , 
       list : [{
         title : "Skill Development" , 
         iconImagePath : require('../imgs/skill/Frame 1261154690.png')
       } , 
       {
         title : "Career Readiness" , 
         iconImagePath : require('../imgs/career/Frame 1261154690.png')
       } ,
       {
         title : "Entrepreneurial Mindset" , 
         iconImagePath : require('../imgs/mindset/USAM Programs/Frame 1261154690.png')
       } ,
       {
         title : "Interactive Learning" , 
         iconImagePath : require('../imgs/learning/USAM Programs/Frame 1261154690.png')
       } , 
       {
        title : 'Personalized Mentorship' ,
        iconImagePath : require('../imgs/mentorship/USAM Programs/Frame 1261154690.png')
       }
     ] ,
       backgroundIconPath : require('../imgs/wise.png')
     }
   }

   const content = {
    wisePage: {
      title:
        "<span class='text-amber'>WISE</span> equips learners with skills through gamification, courses, and mentorship.",
  
      paragraph: 'The WISE Program empowers learners with skills for careers, freelancing, and entrepreneurship.',
  
      buttonContent: 'Join Now',
  
      imagePath: require('../imgs/Collab-bro.png'),
       
      destination : registerationFormsPath["wiseProgram"]
    },
  }

export default function WiseProgramPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id='wiseProgramPage'>
      <IntroSection {...content['wisePage']}/>
      <ProgramDetails {...programDetails['wisePage']} />
      <JoinNowFooterPrimary destination={registerationFormsPath["wiseProgram"]} />
    </section>
  )
}
