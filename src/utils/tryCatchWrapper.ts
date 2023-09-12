//External Dependencies
import { RequestHandler, Request, Response, NextFunction } from "express";

//Manage Controller Asynchronity
export default function (handler: RequestHandler) {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await handler(req, res, next);
		} catch (error) {
			next(error);
		}
	};
}
