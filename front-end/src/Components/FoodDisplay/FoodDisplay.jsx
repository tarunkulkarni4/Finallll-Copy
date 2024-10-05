import React from 'react'
import './FoodDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../StoreContext/StoreContext'
import Fooditems from '../FoodItems/Fooditems'

const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext);
  return (
    <div className='food-display' id="food-display">
        <h2>Top dishes Near You</h2>
        <div className="food-display-items">
            {food_list.map((item,index)=>{
              if(category==="All" || category===item.category)
              {
              return (<Fooditems key={index} id={item._id} name={item.name} description={item.description} price={item.price}  image={item.image}/>
                )  
              }
                
               
                 
            })}
        </div>

    </div>
  )
}

export default FoodDisplay