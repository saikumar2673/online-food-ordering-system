import React, { useState } from 'react'

import "./Loginpopup.css"
import { assets } from '../../assets/assets'
const Loginpopup = ({setShowlogin}) => {

    const [currstate,setCurrstate]=useState("Sign Up")
  return (
    <div className="login-popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currstate}</h2>
                <img onClick={()=>setShowlogin(false)}src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currstate==='login'?<></>:<input type="text" placeholder='Your name' required />}
                
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Your password' required />
            </div>
        <button>{currstate==="Sign Up"?"Create Account":"login"}</button>

        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
        {currstate==="login"?<p>Create a new Account? <span onClick={()=>setCurrstate("Sign Up")}>Click here</span></p>:
        <p>Already have an Account? <span onClick={()=>setCurrstate("login")}>Click here</span></p>}
        
        
        </form>
    </div>
  )
}

export default Loginpopup