import React, { useContext,useEffect,useState} from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Components/StoreContext/StoreContext'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Placeorder = () => {
  const {getTotalAmount,token,food_list,cartItems,url}=useContext(StoreContext)

const [data,setData]=useState({
  firstName:"",
  lastName:"",
  email:"",
  street:"",
  city:"",
  state:"",
  zipcode:"",
  country:"",
  phone:""

})


const onchangeHandler=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  setData(data=>({...data,[name]:value}))
}


const placeOrder=async(event)=>{
  event.preventDefault();
  let orderItems=[];
  food_list.map((item)=>{
    if (cartItems[item._id]) {
      let itemInfo=item;
      itemInfo["quantity"]=cartItems[item._id];
      orderItems.push(itemInfo)
      
    }

  })
let orderData={
  address:data,
  items:orderItems,
  amount:getTotalAmount()+2,
}
let response=await axios.post(url+"/api/order/placeorder",orderData,{headers:{token}})
if (response.data.success) {
  const {session_url}=response.data;
  window.location.replace(session_url);
}
else{
  alert("error")
}
}

const navigate=useNavigate()


useEffect(()=>{
  if (!token) {
    navigate('/cart')
    
  }
  else if(getTotalAmount()===0)
  {
    navigate('/cart')
  }
},[token])



  return (
    <form onSubmit={placeOrder}  className='place-order'>
      <div className="place-order-left">
        <p className='place-order-title'>Delivery Information</p>
        <div className="multifields">
          <input required name='firstName' onChange={onchangeHandler} value={data.firstName} type="text" placeholder='Enter your first Name'/>
          <input required  name='lastName' onChange={onchangeHandler} value={data.lastName} type="text" placeholder='Enter your Last Name' />
        </div>
        <input required  name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='Enter your email' />
        <input required  name='street' onChange={onchangeHandler} value={data.street} type="text" placeholder='street' />
        <div className="multifields">
          <input required  name='city' onChange={onchangeHandler} value={data.city} type="text" placeholder='City'/>
          <input required  name='state' onChange={onchangeHandler} value={data.state} type="text" placeholder='State'/>
        </div>
        <div className="multifields">
          <input required  name='zipcode' onChange={onchangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
          <input required  name='country' onChange={onchangeHandler} value={data.country} type="text"  placeholder='Country'/>

        </div>
        <input required  name='phone' onChange={onchangeHandler} value={data.phone} type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
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
              <b>Total</b><b>
                ${getTotalAmount()===0?0:getTotalAmount()+2}
              </b>
            </div>
          </div>
          <button type='submit' >Proceed to Payment</button>
        </div>
      </div>


    </form>
  )
}

export default Placeorder