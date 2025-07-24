import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../components/Context/StoreContext'
const Placeorder = () => {

  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form  className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multifields">
          <input type="text" placeholder='firstname' />
          <input type="text" placeholder='Lastname' />
        </div>
          <input type="email" placeholder='email address' />
          <input type="text" placeholder='Street' />
        <div className="multifields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multifields">
          <input type="text" placeholder='Zipcode' />
          <input type="text" placeholder='Country' />
        </div>
          <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
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
            <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
          </div>
        </div>
        </div>

      </div>
    </form>
  )
}

export default Placeorder