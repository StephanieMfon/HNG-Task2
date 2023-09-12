//Global Interfaces
export interface ValidationError {
	message: string;
	type: string;
}

export interface JoiError {
	status: string;
	error: {
		original: undefined;
		details: ValidationError[];
	};
}

interface CustomError {
	status: string;
	error: string;
}

export const customError: CustomError = {
	status: "failed",
	error: "Invalid request. Please review request and try Again",
};

//CUSTOM ERRORS
//Resource Not Found Error
export class NotFoundError extends Error {
	status: number;
	errorType: string;
	constructor(message: string) {
		super(message);
		this.status = 404;
		this.errorType = "NotFoundError";
		Object.setPrototypeOf(this, NotFoundError.prototype);
	}
}

//Bad User Request Error
export class BadUserRequestError extends Error {
	status: number;
	errorType: string;
	constructor(message: string) {
		super(message);
		this.status = 400;
		this.errorType = "BadUserRequestError";
		Object.setPrototypeOf(this, BadUserRequestError.prototype);
	}
}

//Confilict Error
export class ConflictError extends Error {
	status: number;
	errorType: string;
	constructor(message: string) {
		super(message);
		this.status = 409;
		this.errorType = "ConflictError";
		// Object.setPrototypeOf(this, ConflictError.prototype);
	}
}
