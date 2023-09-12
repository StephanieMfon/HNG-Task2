//External dependencies
import { connect } from "mongoose";
import { appConfig } from "./app.config";
require("dotenv").config();

export const connectDB = async () => {
	try {
		const mongoURI: string = appConfig.mongoUri;
		await connect(mongoURI);
		console.log("MongoDB Connected...");
	} catch (error) {
		console.log(error);
		//Exit process
		process.exit(1);
	}
};
