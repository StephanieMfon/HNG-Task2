//External Dependencies
import { Document, model, Schema } from "mongoose";

/**
 * Type to model Schema for Typescript.
 *
 * User
 * @param name:string
 */

export type TUser = {
	name: string;
};

/**
 * Mongoose Document based on User for Tyepescript.
 *
 * User
 * @param name:string
 */

export interface IUser extends TUser, Document {}

const userSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);

/**
 * Mongoose Model based on User for Typescript
 *
 * User
 * @param name:string
 */

const User = model<IUser>("User", userSchema);

export default User;
