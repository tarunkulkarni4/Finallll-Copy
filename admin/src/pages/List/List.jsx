import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import {toast} from "react-toastify"

const List = ({url}) => {
  // store all data from database so create one state empty function


  const [list, setList] = useState([]);
  const fetch = async () => {
    const response = await axios.get(`${url}/api/food/list`);


    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("error");
    }
  };

  useEffect(() => {
    fetch();
  });

  const removeList=async(foodId)=>{
    console.log(foodId)
    const response=await axios.post(`${url}/api/food/remove`,{id:foodId})
     await fetch();
     if(response.data.success)
     {
      toast.success(response.data.message)
     }
     else{
      toast.error("error")
     }

  }




  return (
  <div className="list add flex-col">
    <p>All foods</p>
    <div className="list-table">
      <div className="list-table-format title">
        <b>Image</b><b>Name</b><b>Category</b><b>Price</b><b>Actions</b>
      </div>
      {
        list.map((item,index)=>{
          return(
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeList(item._id)} className="cross">x</p>

            </div>
          )

        })
      }
    </div>

  </div>

  )
  
};

export default List;
