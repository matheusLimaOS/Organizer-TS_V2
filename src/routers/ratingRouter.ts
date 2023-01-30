import { Router } from "express";
import { insertRating, getRatingByMovieId, getRatingByUserId } from "../controllers/ratingController.js";

const ratingRouter = Router();

ratingRouter.post("/",insertRating)
ratingRouter.get("/movie/:movieId",getRatingByMovieId);
ratingRouter.get("/user/:userId",getRatingByUserId)


export default ratingRouter;