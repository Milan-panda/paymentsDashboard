import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './pages/Navbar/Navbar'
import RightArrow from "./assets/icons/right-arrow.svg"
import { useState } from 'react'

function App() {
  const isMobile = window.innerWidth <= 768;

  const [navView, setNavView] = useState(!isMobile);

  const handleNavbar = ()=>{
    setNavView(!navView)
  }

  return (
    <>
      <div className='main'>
        <div className={`navbar ${navView ? "" : "display-none"}`}>
          <Navbar />
        </div>
        <div className="arrow">
          {navView ? <img className='left' onClick={handleNavbar} src={RightArrow} alt="" /> : <img onClick={handleNavbar} src={RightArrow} alt="" />}
        </div>
        <div className='dashboard'>
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App
