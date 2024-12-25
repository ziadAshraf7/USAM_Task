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

function App() {
  return (
    <>
      <NavBar />
    </>
  )
}

export default App
