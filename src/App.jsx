import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from 'react-router-dom'

import NavBar from './Components/Navbar'
import { useEffect } from 'react'
import IntroSection from './Components/IntroSection'

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

function App() {
  return (
    <>
      <NavBar />
      <IntroSection {...content['homePage']} />
    </>
  )
}

export default App
