import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../StoreContext/StoreContext';

const Navbar = ({setShowLogin}) => {

  const {getTotalAmount,token,setToken}=useContext(StoreContext)
  const [menu,setMenu]=useState("home");
  const navigate=useNavigate();


  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    useNavigate("/")

  }
  return (
    <div className='navbar'>
        <  img src={assets.logo} alt="" className='logo'/>
        <ul className="navbar-menu">
            <Link to='/'  onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""} >menu</a>
            <a href='#footer' onClick={()=>setMenu("my-contact")} className={menu==="my-contact"?"active":""} >my-contact</a>
            <a href='#app-download' onClick={()=>setMenu("application")} className={menu==="application"?"active":""} >application</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalAmount()===0?"":"dot"}></div>
            </div>
            {
            !token?<button onClick={()=>setShowLogin(true)}>Sign In</button>
            :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className='nav-profile-dropdown'>
                <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li  onClick={logout} ><img src={assets.logout_icon} alt="" /><p>Logout</p></li>

                
              </ul>
            </div>
            }
        
        </div>




    </div>
  )
}

export default Navbar