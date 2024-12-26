import React from 'react'
import Navbar from '../Components/Navbar'
import IntroSection from '../Components/IntroSection'
import OurPrograms from '../Components/OurPrograms'
import Footer from '../Components/Footer'


const content = {
    homePage: {
      title:
        "Explore <span class='text-amber'> USAM's Unique Programs </span>  Empowering Skills, Leadership, <br/> and Professional Growth.",
  
      paragraph:
        'With WISE, SPARK, USAM Scales Club, and USAM Ambassador, unlock your potential to excel in learning, working, and leading.',
  
      buttonContent: 'Explore Our Programs',
  
      imagePath: require('../imgs/Happy student.png'),
  
      buttonWidth: '263',
    },
  }
  

export default function HomePage() {
  return (
    <section id='homePage'>
      <IntroSection {...content['homePage']} />
      <OurPrograms />
    </section>
  )
}
