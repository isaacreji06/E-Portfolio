import React from 'react'
import About from './Components/About'
import { Route, Routes } from 'react-router-dom'
import Resume from './Components/Resume'
import LinkedIn from './Components/LinkedIn'
import WorkValues from './Components/WorkValues'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Contact from './Components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/linkedin' element={<LinkedIn />} />
        <Route path="/work-values" element={<WorkValues />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App