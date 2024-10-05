import React, {  useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../StoreContext/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {

    const {url,setToken}=useContext(StoreContext)

    const [currstate,setCurrstate]=useState("Login")

    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const onChangehandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))

    }


    const onLogin=async(event)=>{
        event.preventDefault();
        let newUrl=url;
        if(currstate==="Login"){
            newUrl +="/api/user/login"
        }
        else{
            newUrl +="/api/user/register"
        }
        const response=await axios.post(newUrl,data)
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
          
        }
        else{
            alert(response.data.message);
        }


    }




  return (
    <div className='login'>
        <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-title">
            <p>{currstate}</p>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {
                currstate==="Login"?<></>:<input type="text" name='name' onChange={onChangehandler} value={data.name} placeholder='Enter your name' required />
            }
       
            <input name='email' onChange={onChangehandler} value={data.email} type="email" placeholder='Enter email' required />
            <input name='password' onChange={onChangehandler} value={data.password} type="password" placeholder='Enter password' required />
        </div>
        <button type='submit'>{currstate==="Sign up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox"  required/>
            <p>By this agreeing you want to continue</p>
        </div>
        {
            currstate==="Login"
            ?  <p>Create an Account ? <span onClick={()=>setCurrstate("Sign up")}>Click here</span></p>
            :    <p>Already have an  Account? <span onClick={()=>setCurrstate("Login")} >Login</span></p>
        }
        
      
    
        </form>
    </div>
  )
}

export default LoginPopup