import express from "express"
import { addFood, foodList ,removeFood} from "../controllers/foodController.js"
import multer from "multer"


//create express router

const foodRouter=express.Router();






const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)

    }

})

const upload=multer({storage:storage})


foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",foodList)
foodRouter.post("/remove",removeFood)


// Image Storage Engine









export default foodRouter;