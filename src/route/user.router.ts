//External Dependencies
import { Router } from "express";
import { schemaValidator } from "../middleware/user.schemaValidator.middleware";
import UserController from "../controller/user.controller";
import tryCatchWrapper from "../utils/tryCatchWrapper";

//Global Config
const router = Router();

//POST
router.post(
	"/",
	schemaValidator("/"),
	tryCatchWrapper(UserController.createUser)
);

//GET
router.get("/:user_id", tryCatchWrapper(UserController.getUsersDetails));

//PATCH
router.patch(
	"/:user_id",
	schemaValidator("/:user_id"),
	tryCatchWrapper(UserController.updateUsersName)
);

//DELETE
router.delete("/:user_id", tryCatchWrapper(UserController.deleteUser));

export { router };
