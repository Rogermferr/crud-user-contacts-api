import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middleware";
import {
  userRequestSchema,
  userUpdateRequestSchema,
} from "../schemas/users.schemas";
import ensureEmailExistsMiddleware from "../middlewares/ensureEmailExists.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureTelephoneExistsMiddleware from "../middlewares/ensureTelephoneExists.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureBodyIsValidMiddleware(userRequestSchema),
  ensureEmailExistsMiddleware,
  ensureTelephoneExistsMiddleware,
  createUserController
);

userRoutes.get("", ensureTokenIsValidMiddleware, getUserController);

userRoutes.patch(
  "",
  ensureBodyIsValidMiddleware(userUpdateRequestSchema),
  ensureTokenIsValidMiddleware,
  ensureEmailExistsMiddleware,
  ensureTelephoneExistsMiddleware,
  updateUserController
);

userRoutes.delete("", ensureTokenIsValidMiddleware, deleteUserController);

export default userRoutes;
