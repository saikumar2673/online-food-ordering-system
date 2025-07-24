import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from "../../components/Context/StoreContext"
import { useNavigate } from 'react-router-dom'
const Cart = () => {

   const {food_list,cartitems,removeFromCart,getTotalCartAmount}=useContext(StoreContext)

   const navigate=useNavigate();
  return (
    <div className="cart">
      <div className="cartitems">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {/* <p>{food_list}</p> */}
        {
          food_list.map((item,index)=>{
            if(cartitems[item._id]>0)
            {
              return (
                <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitems[item._id]}</p>
                  <p>${item.price*cartitems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)}className='cross'>X</p>
                </div>
                <hr/>
                </div>
              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
              <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
              <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
              <hr/>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
          <div className="cart-promo-code">
            <div>
              <p>If you have a promo code ,Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='promocode' />
                <button>Submit</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart