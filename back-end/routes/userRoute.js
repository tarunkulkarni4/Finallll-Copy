import express from "express"
import { loginuser,registerUser } from "../controllers/userController.js"

const useRouter=express.Router();

useRouter.post("/register",registerUser)
useRouter.post("/login",loginuser)

export default useRouter;



