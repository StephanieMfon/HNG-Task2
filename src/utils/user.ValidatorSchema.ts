//External Dependencies
import Joi, { ObjectSchema } from "joi";

const userSchema = Joi.object().keys({
	name: Joi.string().required(),
});

export default {
	"/": userSchema,
	"/:id": userSchema,
} as { [key: string]: ObjectSchema };
