//External dependencies
import { Request, Response } from "express";
import User, { TUser } from "../models/users";
import {
	NotFoundError,
	BadUserRequestError,
	ConflictError,
} from "../error/error";
import mongoose from "mongoose";

//Global User Controller
export default class UserController {
	/**
	 * createUser - Creates a new User in Database
	 * @param req
	 * @param res
	 * @returns A new user or an existing User.
	 */
	static async createUser(req: Request, res: Response) {
		const { name } = req?.body;

		let user = await User.findOne({ name });

		if (user) throw new ConflictError("User already Exists");

		const userFields: TUser = {
			name,
		};
		const newUser = await User.create(userFields);

		return res.status(200).json({
			status: "success",
			message: "User created",
			data: {
				name: newUser.name,
				id: newUser._id,
			},
		});
	}
	/**
	 * getUsersName - gets name and Id attribute for a single user
	 * @param req
	 * @param res
	 * @returns: The User's details
	 */
	static async getUsersDetails(req: Request, res: Response) {
		const id = req?.params?.id;

		if (!mongoose.Types.ObjectId.isValid(req.params.id))
			throw new BadUserRequestError("Invalid Id");
		const user = await User.findOne({ _id: id });

		if (!user) throw new NotFoundError("User does not exist");

		return res.status(200).json({
			staus: "success",
			data: {
				name: user.name,
				_id: user._id,
			},
		});
	}
	/**
	 * updateUsersName - Updates name of user with given Id in Database
	 * @param req
	 * @param res
	 * @returns: The updated User's details
	 */
	static async updateUsersName(req: Request, res: Response) {
		const id = req?.params?.id;

		if (!mongoose.Types.ObjectId.isValid(req.params.id))
			throw new BadUserRequestError("Invalid Object Id");

		const user = await User.findOneAndUpdate(
			{ _id: id },
			{ name: req.body.name },
			{ new: true }
		);

		if (!user) throw new NotFoundError("User does not exist");

		res.status(200).json({
			status: "success",
			message: "Name Successfully Updated",
			data: {
				name: user.name,
				id: user._id,
			},
		});
	}
	/**
	 * deleteUser: Deletes User's details from database
	 * @param req
	 * @param res
	 * @returns: message confirming User has been deleted
	 */
	static async deleteUser(req: Request, res: Response) {
		const id = req?.params?.id;

		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			return res.status(400).json({
				status: "Fail",
				message: "Invalid Object Id",
			});
		}
		await User.findByIdAndDelete(id);
		return res.status(200).json({
			status: "success",
			messages: `Resource with id ${id} successfully deleted.`,
		});
	}
}
