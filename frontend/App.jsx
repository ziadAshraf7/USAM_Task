import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import NotFoundPage from "./Components/NotFound"

import SparkProgramPage from './Pages/SparkProgramPage'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import WiseProgramPage from './Pages/WiseProgramPage'
import AmbassadorsProgramPage from './Pages/AmbassadorsProgramPage'
import UscProgramPage from './Pages/UscProgramPage'
import UscProgramRegisterationPage from './Pages/UscProgramRegisterationPage'
import WiseProgramRegisterationPage from './Pages/WiseProgramRegisterationPage'
import SparkProgramRegisterationPage from './Pages/SparkProgramRegisterationPage'
import AmbassadorProgramRegisterationPage from './Pages/AmbassadorProgramRegisterationPage'
import SuccessSection from './Components/SuccessSection'

function App() {
  return (
    <>
   <Router>
     <Navbar />
        <Routes>
          <Route path='/' element= {<HomePage />} />
          <Route path='/USAMWise' element = {<WiseProgramPage />} />
          <Route path='/USAMSPark' element = {<SparkProgramPage />} />
          <Route  path='/USAMAmbassador' element = {<AmbassadorsProgramPage />} />
          <Route  path='/USAMUsc' element = {<UscProgramPage />} />
          <Route  path='/AmbassadorProgramRegisteration' element = {<AmbassadorProgramRegisterationPage />} />
          <Route  path='/SparkProgramRegisteration' element = {<SparkProgramRegisterationPage />} />
          <Route  path='/WiseProgramRegisteration' element = {<WiseProgramRegisterationPage />} />
          <Route  path='/UscProgramRegisteration' element = {<UscProgramRegisterationPage />} />
          <Route path='/success' element = {<SuccessSection />} />
          <Route path='*' element= {<NotFoundPage />} />
        </Routes>
      <Footer />
    </Router>

    </>
  )
}

export default App
