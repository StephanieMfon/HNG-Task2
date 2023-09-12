//External Dependencies
require("dotenv").config();

//Global types
type IAppConfig = Record<string, any>;

//Configure Application
export const appConfig: IAppConfig = {
	mongoUri: process.env.MONGO_URI,
};
