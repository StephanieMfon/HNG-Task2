//External Dependencies
import express from "express";
import { connectDB } from "../config/database.connection";
import { router as userRouter } from "./route/user.router";
import globalErrorHandler from "./utils/errorHandler";
//Global config
const app = express();
const PORT = process.env.PORT || 4000;

//Connect Database
connectDB();

//Middleware
app.use(express.json());
app.use("/api", userRouter);
app.use(globalErrorHandler);

//Server
app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
