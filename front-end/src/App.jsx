import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Verify from './Pages/Verify/Verify'
import Myorders from './Pages/Myorders/Myorders'



const App = () => {

  const [showlogin,setShowLogin]=useState(false)
  return (
    <>  
    {
      showlogin?<LoginPopup setShowLogin={setShowLogin}/>:<> </>
    }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<Myorders/>}/>

      
      </Routes>

      
    </div>
    <Footer/>

    </>
  
  )
}

export default App
