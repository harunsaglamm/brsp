import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./routes/Home"
import About from "./routes/About"
import Service from "./routes/Service"
import Contact from "./routes/Contact"
import Wifi from "./routes/Wifi"

function App() {
 
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/wifi' element={<Wifi/>}/>
      </Routes>


       
    
    </div>
  )
}

export default App
