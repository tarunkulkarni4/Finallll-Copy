import express from 'express'
import cors from 'cors'
import { ConnectDb } from './config/Db.js'
import foodRouter from './routes/foodRoute.js'
import useRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

//app config
 const app=express()
 const port=process.env.PORT || 4000

 //middlewaee
 app.use(express.json())
 app.use(cors())

 ConnectDb()

 // api endpoints

 app.use("/api/food",foodRouter)

 app.use('/images',express.static('uploads'))

 app.use('/api/user',useRouter)
 app.use('/api/cart',cartRouter)
 app.use('/api/order',orderRouter)

 app.get('/',(req,res)=>{
    res.send("Api Working")

 })
 app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
    
 })

 // mongodb+srv://tarunkulakarni2:Y0e5oGFtSYHTzMN3@cluster0.ln6dqya.mongodb.net/?