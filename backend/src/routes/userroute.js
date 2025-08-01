import express from "express";
import { get_user } from "../controller/usercontroller.js";
const userRouter = express.Router();

userRouter.get("/user", get_user);
export default userRouter;
