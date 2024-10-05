import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets';


const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu">
        <h2>ExploreMenu</h2>
        <p className='explore-menu text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse praesentium, in molestias nulla ipsam debitis molestiae harum provident repellat. Dolorem nemo blanditiis, accusantium magni optio laborum reprehenderit quisquam voluptatibus totam!</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                     <div onClick={()=>setCategory(prev=>prev===item.menu_name?"active":item.menu_name)} key={index} className='explore-menu-items'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                         
                     </div>

                )
               
            })}


        </div>
        <hr />
        
        </div>
  )
}

export default ExploreMenu