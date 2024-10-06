import React from 'react'
import { Route,Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
const Router = () => {
  return (
    <>
    
    <Routes>
   
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    
    </Routes>
      
    </>
  )
}

export default Router;