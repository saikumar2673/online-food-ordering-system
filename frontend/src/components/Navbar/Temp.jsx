import React, { useContext, useState } from 'react'
import './Temp.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'
const Temp= ({setShowlogin}) => {

    const [menu,setMenu]=useState("home")
    const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className="navbar">
        <Link to="/cart"><img src={assets.logo} alt="logo"/></Link>
        <ul className="navbar-menu">
            <Link to="/"onClick={()=>setMenu('home')}className={menu==='home'? "active":""}>home</Link>
            <a href="#exploremenu" onClick={()=>setMenu('menu')}className={menu==='menu'? "active":""}>menu</a>
            <a href="#appdownload" onClick={()=>setMenu('mobile-app')}className={menu==='mobile-app'? "active":""}>mobile-app</a>
            <a href="#footer" onClick={()=>setMenu('contact-us')}className={menu==='contact-us'? "active":""}>contact-us</a>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon}/>
            <div className="navbar-search-icon">
                <Link to="/cart"><img src={assets.basket_icon}/></Link> 
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowlogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Temp