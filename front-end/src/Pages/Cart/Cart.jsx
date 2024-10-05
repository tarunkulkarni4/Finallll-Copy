import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Components/StoreContext/StoreContext';
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const {cartItems,food_list,removeFromCart, getTotalAmount,url}=useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-items">
          <p>Item</p>
          <p>title</p>
          <p>Price</p>
          <p>Qunatity</p>
          <p>Total Amount</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return(
              <div>
            <div className="cart-items cart-list">
              <img src={url+"/images/"+item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
             </div>
             <hr />
            </div>
          )
          }
          
        })}
        
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub total</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalAmount()===0?0:getTotalAmount()+2}
              </b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to check out</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have promo code ,Enter here</p>
            <div className='cart-promo-code-input'>
            <input type="text"  placeholder='Enter promo code'/>
            <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart