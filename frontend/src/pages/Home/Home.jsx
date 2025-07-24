import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Explore-menu/Exploremenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
import Footer from '../../components/Footer/Footer'
import Appdownload from '../../components/Appdownload/Appdownload'
// import Food from '../../components/Context/Food/Food'

const Home = () => {

    const [category,setcat]=useState("all")
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setcat={setcat}/>
        <Fooddisplay category={category}/>
        <Appdownload/>
        
    </div>
  )
}

export default Home