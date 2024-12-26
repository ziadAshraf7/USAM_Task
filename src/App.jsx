import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from 'react-router-dom'

import Footer from './Components/Footer'
import NavBar from './Components/Navbar'
import IntroSection from './Components/IntroSection'
import OurPrograms from './Components/OurPrograms'
import ProgramDetails from './Components/ProgramDetails'
import OverView from './Components/OverView'
import SkillSection from './Components/SkillsSection'
import JoinNowFooterPrimary from './Components/JoinNowFooterPrimary'
import Registeration from './Components/Registeration'

const content = {
  homePage: {
    title:
      "Explore <span class='text-amber'> USAM's Unique Programs </span>  Empowering Skills, Leadership, <br/> and Professional Growth.",

    paragraph:
      'With WISE, SPARK, USAM Scales Club, and USAM Ambassador, unlock your potential to excel in learning, working, and leading.',

    buttonContent: 'Explore Our Programs',

    imagePath: require('./imgs/Happy student.png'),

    buttonWidth: '263',
  },
}


const programDetails = {
 wisePage : {
    title : "Wise Core and value" , 
    list : [{
      title : "Skill Development" , 
      iconImagePath : require('./imgs/skill/Frame 1261154690.png')
    } , 
    {
      title : "Skill Development" , 
      iconImagePath : require('./imgs/skill/Frame 1261154690.png')
    } ,
    {
      title : "Skill Development" , 
      iconImagePath : require('./imgs/skill/Frame 1261154690.png')
    } ,
    {
      title : "Skill Development" , 
      iconImagePath : require('./imgs/skill/Frame 1261154690.png')
    } 
  ] ,
    backgroundIconPath : require('./imgs/wise.png')
  }
}


function App() {
  return (
    <>
      <NavBar />
      <IntroSection {...content['homePage']} />
      <OurPrograms />
      <ProgramDetails {...programDetails['wisePage']} />
      <OverView />
      <SkillSection />
      <Registeration />
      <JoinNowFooterPrimary />
      <Footer />
    </>
  )
}

export default App
