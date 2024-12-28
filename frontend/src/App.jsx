import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import NotFoundPage from "./Components/NotFound"
import {appPaths} from "./utils"
import SparkProgramPage from './Pages/SparkProgramPage'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import WiseProgramPage from './Pages/WiseProgramPage'
import AmbassadorsProgramPage from './Pages/AmbassadorsProgramPage'
import UscProgramPage from './Pages/UscProgramPage'
import UsamProgramRegisterationPage from './Pages/UsamProgramRegisterationPage'
import SuccessSection from './Components/SuccessSection'

function App() {
  return (
    <>
   <Router>
     <Navbar />
        <Routes>
          <Route path={`${appPaths["homePage"]}`} element= {<HomePage />} />
          <Route path={`${appPaths["wiseProgram"]}`} element = {<WiseProgramPage />} />
          <Route path={`${appPaths["sparkProgram"]}`} element = {<SparkProgramPage />} />
          <Route path={`${appPaths["ambassadorsProgram"]}`} element = {<AmbassadorsProgramPage />} />
          <Route path={`${appPaths["uscProgram"]}`} element = {<UscProgramPage />} />
          <Route path={`${appPaths["programRegisterationPage"]}`} element = {<UsamProgramRegisterationPage />} />
          <Route path={`${appPaths["successPage"]}`} element = {<SuccessSection />} />
          <Route path='*' element= {<NotFoundPage />} />
        </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
