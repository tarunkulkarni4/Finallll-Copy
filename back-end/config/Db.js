import mongoose  from "mongoose";

export const ConnectDb=async()=>{
    await mongoose.connect('mongodb+srv://tarunkulakarni2:Y0e5oGFtSYHTzMN3@cluster0.ln6dqya.mongodb.net/FINALLLL').then(()=>{console.log("DB Connected");
    })
}