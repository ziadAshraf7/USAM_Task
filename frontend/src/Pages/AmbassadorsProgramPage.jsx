

import React from 'react'
import IntroSection from '../Components/IntroSection'
import ProgramDetails from '../Components/ProgramDetails'
import JoinNowFooterSecondary from '../Components/JoinNowFooterSecondary'
import Overview from '../Components/OverView'
import { useEffect } from 'react'
import {registerationFormsPath} from "../utils"


const programDetails = {
    AmbassadorsProgram : {
       title : "Responsibilities of USAM Ambassadors" , 
       paragraph : "USAM Ambassadors promote events, create content, engage communities, represent USAM at events, and provide feedback.",
       list : [{
         title : "Community Engagement" , 
         iconImagePath : require('../imgs/Community.png')
       } , 
       {
         title : "Event Representation" , 
         iconImagePath : require('../imgs/Event.png')
       } ,
       {
         title : "Feedback and Reporting" , 
         iconImagePath : require('../imgs/feedback.png')
       } ,
       {
         title : "Suggested Activities" , 
         iconImagePath : require('../imgs/activities.png')
       } , 
     ] ,
       backgroundIconPath : require('../imgs/ambassador.png')
     }
   }


   const content = {
    AmbassadorsProgram: {
      title:
        "USAM <span class='text-amber'>Ambassadors</span> recruits passionate individuals enthusiastic about education and technology.",
  
      paragraph: 'The WISE Program empowers learners with skills for careers, freelancing, and entrepreneurship..',
  
      buttonContent: 'Join Now',
  
      imagePath: require('../imgs/Ambassador-pana 1.png'),
      
      destination : registerationFormsPath["ambassadorsProgram"]
    },
  }

export default function AmbassadorsProgramPage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section id='AmbassadorsProgramPage'>
      <IntroSection {...content['AmbassadorsProgram']}/>
      <ProgramDetails {...programDetails['AmbassadorsProgram']} />
      <Overview />
      <JoinNowFooterSecondary 
      destination={registerationFormsPath["ambassadorsProgram"]}
      title = {"Don’t miss the opportunity and join to <span class ='text-amber'>Ambassadors</span>  Program now!"}
      />
    </section>
  )
}
