import express from "express";
import cors from "cors";
import userRouter from "./routes/userroute.js";
import leaderboardRouter from "./routes/leaderboardroute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", leaderboardRouter);
export default app;
