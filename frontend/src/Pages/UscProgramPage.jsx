

import React from 'react'
import IntroSection from '../Components/IntroSection'
import ProgramDetails from '../Components/ProgramDetails'
import JoinNowFooterSecondary from '../Components/JoinNowFooterSecondary'
import SkillsSection from '../Components/SkillsSection'
import { useEffect } from 'react'
import {registerationFormsPath} from "../utils"


const programDetails = {
    UscProgram : {
       title : "Requirements for USAM Skills Club(USC)" , 
       list : [{
         title : " License Application" , 
         iconImagePath : require('../imgs/license.png')
       } , 
       {
         title : "Initial Training" , 
         iconImagePath : require('../imgs/training.png')
       } ,
       {
         title : "Ongoing Support" , 
         iconImagePath : require('../imgs/ongoing.png')
       } ,
       {
         title : "Evaluation and Feedback" , 
         iconImagePath : require('../imgs/eval.png')
       } , 
     ] ,
       backgroundIconPath : require('../imgs/Usc.png')
     }
   }


   const content = {
    UscProgram: {
      title:
        "Bridging education and employment with workforce-ready skills with USC <span class='text-amber'>USC</span>.",
  
      paragraphList: ["Bridging the gap between education and employment through tailored programs and career support services." ,
        "Empowering students with skills in entrepreneurship, marketing, AI, coding, and languages to prepare for the workforce." ,
        "Creating a seamless transition from education to meaningful employment opportunities."
      ],
  
      buttonContent: 'Join Now',
  
      imagePath: require('../imgs/Time management-amico 1.png'),
  
      destination : registerationFormsPath["uscProgram"]
    },
  }

export default function UscProgramPage() {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <section id='UscProgram'>
      <IntroSection {...content['UscProgram']}/>
      <ProgramDetails {...programDetails['UscProgram']} />
      <SkillsSection />
         <JoinNowFooterSecondary 
            destination={registerationFormsPath["uscProgram"]}
            title = {"Don’t miss the opportunity and join to <span class ='text-amber'>USC</span>  Program now!"}
            />
    </section>
  )
}
