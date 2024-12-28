
import React from 'react'
import IntroSection from '../Components/IntroSection'
import ProgramDetails from '../Components/ProgramDetails'
import JoinNowFooterPrimary from '../Components/JoinNowFooterPrimary'
import { useEffect } from 'react'
import {registerationFormsPath} from "../utils"

const programDetails = {
    sparkProgram : {
       title : "Spark Core and value" , 
       paragraph : "Empower entrepreneurs at various stages of their start up journey." ,
       list : [{
         title : "Entrepreneurial Empowerment" , 
         iconImagePath : require('../imgs/skill/Frame 1261154690.png')
       } , 
       {
         title : "Practical Learning" , 
         iconImagePath : require('../imgs/Practical learning/USAM Programs/Group 447.png')
       } ,
       {
         title : "Growth-Oriented Focus" , 
         iconImagePath : require('../imgs/Growth/USAM Programs/Group 447.png')
       } ,
       {
         title : "Scalability" , 
         iconImagePath : require('../imgs/scalabillity/USAM Programs/Group 447.png')
       } , 
       {
        title : 'Support Network' ,
        iconImagePath : require('../imgs/support/USAM Programs/Group 447.png')
       } ,
       {
        title : 'Investor Readiness' ,
        iconImagePath : require('../imgs/investor/USAM Programs/Group 447.png')
       }
     ] ,
       backgroundIconPath : require('../imgs/Personal goals-pana.png')
     }
   }

   const content = {
    sparkProgram: {
      title:
        "<span class='text-amber'>SPARK</span> empowers entrepreneurs with tools, mentorship, simulations, funding, and growth.",
  
      paragraph: 'The WISE Program empowers learners with skills for careers, freelancing, and entrepreneurship..',
  
      buttonContent: 'Join Now',
  
      imagePath: require('../imgs/Learning-bro.png'),
      destination : registerationFormsPath["sparkProgram"]
  
    },
  }

export default function SparkProgramPage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section id='sparkProgram'>
      <IntroSection {...content['sparkProgram']}/>
      <ProgramDetails {...programDetails['sparkProgram']} />
      <JoinNowFooterPrimary  destination={registerationFormsPath["sparkProgram"]}/>
    </section>
  )
}
