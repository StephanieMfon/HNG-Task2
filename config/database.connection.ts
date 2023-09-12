//External dependencies
import config from "config";
import { connect } from "mongoose";

export const connectDB = async () => {
	try {
		const mongoURI: string = config.get("MONGO_URI");
		await connect(mongoURI);
		console.log("MongoDB Connected...");
	} catch (error) {
		console.log(error);
		//Exit process
		process.exit(1);
	}
};
