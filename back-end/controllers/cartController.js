import UserModel from "../models/userModels.js";


// add items to user cart
const addToCart=async(req,res)=>{
    try {
        
        let userData=await UserModel.findOne({_id:req.body.userId});
        let cartData=await userData.cartData;
        if (!cartData[req.body.item]) {
            cartData[req.body.item]=1;
        }
        else{
            cartData[req.body.item] +=1;
        }
        // to update new cart data
        await UserModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Added to the cart"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
        
    }


}

// remove items from usercart

const removeFromCart=async(req,res)=>{
try {
    let userData=await UserModel.findById(req.body.userId);
    let cartData=await userData.cartData;
    if(cartData[req.body.item]>0)
    {
        cartData[req.body.item] -=1; 

    }
    await UserModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({success:true,message:"removed from the cart"})
    
} catch (error) {
    console.log(error);
    res.json({success:false,message:"error"})
    
    
}



}

// fetch user cart data
const getcart=async(req,res)=>{
    try {
        let userData=await UserModel.findOne({_id:req.body.userId});
        let cartData=await userData.cartData;
        res.json({success:true,cartData})

        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
        
        
    }



}

export {addToCart,removeFromCart,getcart};
