//External Dependencies
import { ErrorRequestHandler } from "express";
import { ValidationError } from "joi"; // Assuming you're using Joi for validation

//Global Error Handler
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
	if (err instanceof ValidationError) {
		return res.status(400).json({
			message: err.details[0].message,
			status: "Failed",
			errorType: "ValidationError",
		});
	}

	return res.status(err.status || 404).json({
		message: err.message,
		status: "Failed",
	});
};

export default globalErrorHandler;
