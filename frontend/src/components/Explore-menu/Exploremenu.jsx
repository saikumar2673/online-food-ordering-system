import React from 'react'
import './Exploremenu.css'

import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,setcat}) => {
  return (
      <div className="exploremenu" id="exploremenu">
        <h1>explore our menu</h1>
        <p className="explore-menu-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum voluptatibus placeat et blanditiis. Similique nostrum quae corrupti veniam eligendi?</p>
        <div className="explore-menu-list">
          {
            menu_list.map((item,index)=>{
              return (
                <div onClick={()=>{setcat(prev=>prev===item.menu_name?"all":item.menu_name)}} key={index} className="explore-menu-list-item">
                  <img className={category===item.menu_name?"active":""}src={item.menu_image}/>
                  <p>{item.menu_name}</p>
                </div>
              )
            })
          }
          </div>
          <hr/>
      </div>
  )
}

export default Exploremenu