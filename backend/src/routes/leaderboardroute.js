import express from "express";
import { get_leaderboard } from "../controller/leaderboardcontroller.js";
const leaderboardRouter = express.Router();

leaderboardRouter.get("/leaderboard", get_leaderboard);
export default leaderboardRouter;
