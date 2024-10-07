import { createContext, useEffect, useState } from "react";
import axios from 'axios'




 export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState({});

    const url="https://food-del-back-end-neee.onrender.com";
    const [token,setToken]=useState("");

    const [food_list,setFoodList]=useState([]);


    const addToCart=async(item)=>{
        if(!cartItems[item])
        {
            setCartItems((prev)=>({...prev,[item]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[item]:prev[item]+1}))
        }
        if (token) {
            await axios.post(url+"/api/cart/add",{item},{headers:{token}})
            
        }

    }
    const removeFromCart=async(item)=>
    {
        setCartItems((prev)=>({...prev,[item]:prev[item]-1}))
        if (token) {
            await axios.post(url+"/api/cart/remove",{item},{headers:{token}})
            
        }
    }

    const getTotalAmount=()=>{
        let totalamount=0;
       
          for(const item in cartItems)
        {
            if(cartItems[item]>0)
                {
            let itemInfo=food_list.find((product)=>product._id===item);
            totalamount +=itemInfo.price*cartItems[item];

        }  
       
        }
       
        return totalamount;
    }
    const fetchFoodList=async()=>{
        const response=await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }

    const loadCartData=async(token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }




    useEffect(()=>{
      
        async function loaddata()
        {
         await fetchFoodList();
         if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
            
        }
        }
        loaddata();
    },[])











    



    const ContextVakue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        url,
        token,
        setToken

    }


    
    return(
        <StoreContext.Provider value={ContextVakue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;
