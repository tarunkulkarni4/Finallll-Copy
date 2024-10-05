import React, { useContext, useEffect } from 'react'
import './Verify.css'
 import {useNavigate, useSearchParams} from 'react-router-dom'
 import { StoreContext } from '../../Components/StoreContext/StoreContext'
import axios from 'axios'

const Verify = () => {
 const [searchParams,setSearchParams]=useSearchParams()
 const success=searchParams.get('success')
 const orederId=searchParams.get("orderId")
 console.log(success,orederId);
 const {url}=useContext(StoreContext);
 const navigate=useNavigate()


 const verifyPayment=async()=>{
  const response=await axios.post(url+"/api/order/verify",{success,orederId})
  if (response.data.success) {
    navigate("/myorders")
  }
  else{
    navigate("/home")
  }
 }

 useEffect(()=>{
  verifyPayment()

 },[])


  return (
    <div className='verify'>
      <div className="spinner"></div>


    </div>
  )
}

export default Verify