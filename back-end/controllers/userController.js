import UserModel from "../models/userModels.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


// lets create two functions 1) login user function and 2)regsiter function

//1)login user


const loginuser=async(req,res)=>{

    const {email,password}=req.body;
    try {
        const user=await UserModel.findOne({email});
        if(!user)
        {
            return res.json({success:false,message:"User Doesn't Exist"})
        }
        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }
        const token=createToken(user._id);
        res.json({success:true,token});

        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
        
    }
}

// create token
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//2)register function

const registerUser=async(req,res)=>{
    // destrutucre the body reg 

    const {name,email,password}=req.body;
    try {
        // checking if user exists
        const exists=await UserModel.findOne({email});
        if (exists) {
            return  res.json({success:false,message:"User already exists"})
            
        }


        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter a valid email"})  
        }

        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"})
        }  


        //hashing user password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)


        const newUser=new UserModel({
            name:name,
            email:email,
            password:hashedPassword,
          
        })

        // to save the data in data base 

        const user=await newUser.save()
        const token=createToken(user._id)
        res.json({success:true,token});

        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
        
    }






}

export {loginuser,registerUser};