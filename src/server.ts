//External Dependencies
import express from "express";
import { connectDB } from "../config/database.connection";
import { router as userRouter } from "./route/user.router";

//Global config
const app = express();
const PORT = process.env.PORT || 4000;

//Connect Database
connectDB();

//Middleware
app.use(express.json());
app.use("/api", userRouter);

//Server
app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
