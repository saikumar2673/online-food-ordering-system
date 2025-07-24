import React, { useState } from 'react'

import Navbar from './components/Navbar/Temp'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
const App = () => {

  const [showlogin,setShowlogin]=useState(false);
  return (
    <>
    {showlogin?<Loginpopup setShowlogin={setShowlogin}/>:<></>}
    <div class="app">
      <Navbar setShowlogin={setShowlogin}/>
      
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/order" element={<Placeorder/>}/> 
      </Routes>

      </div>
      <Footer/>
      </>
  )
}

export default App