//External Dependencies
import express from "express";
import { connectDB } from "../config/database.connection";
import { router as userRouter } from "./route/user.router";
const app = express();

connectDB();

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use("/api", userRouter);

const server = app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
