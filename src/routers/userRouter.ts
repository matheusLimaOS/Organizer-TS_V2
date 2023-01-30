import { Router } from "express";
import { insertUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/", insertUser);

export default userRouter;
