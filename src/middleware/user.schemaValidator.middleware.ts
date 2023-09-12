//External Dependencies
import { RequestHandler } from "express";
import schemas from "../utils/user.ValidatorSchema";
import { JoiError, customError, ValidationError } from "../error/error";
//Global Config

const supportedMethods = ["post", "put", "patch", "delete"];

const validationOptions = {
	abortEarly: false,
	allowUnknown: false,
	stripUnknown: false,
};

// Validate Schema
export const schemaValidator = (
	path: string,
	useJoiError = true
): RequestHandler => {
	const schema = schemas[path];

	if (!schema) {
		throw new Error(`Schema not found for path: ${path}`);
	}

	return (req, res, next) => {
		const method = req.method.toLowerCase();

		if (!supportedMethods.includes(method)) {
			return next();
		}

		let { error, value } = schema.validate(req.body, validationOptions);

		if (error) {
			const joiError: JoiError = {
				status: "failed",
				error: {
					original: error?._original,
					details: error?.details.map(({ message, type }: ValidationError) => ({
						message: message.replace(/['"]/g, ""),
						type,
					})),
				},
			};
			return res.status(422).json(useJoiError ? joiError : customError);
		}
		if (!req.body.name) throw error;
		req.body = value;

		return next();
	};
};
