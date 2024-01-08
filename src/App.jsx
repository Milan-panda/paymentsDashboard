import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './pages/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='main'>
        <div className="navbar">
          <Navbar />
        </div>
        <div className='dashboard'>
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App
