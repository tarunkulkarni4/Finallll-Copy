import React, { useContext} from 'react'
import './FoodItems.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../StoreContext/StoreContext'

const Fooditems = ({id,name,price,description,image}) => {
     const {addToCart,removeFromCart,cartItems,url}=useContext(StoreContext)
  return (
    <div className='food-items'>
        <div className='food-img '> 
            <img className='food-imaage' src={url+"/images/"+image} alt="" />
            {
              !cartItems[id]
              ?<img  className='add'  onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
              : <div  className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }


              </div>
            
          
           
            <div className="food-item-info">
                <div className="rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="description">{description}</p>
                <p className='price'>${price}</p>
            </div>
       
    </div>
  )
}

export default Fooditems