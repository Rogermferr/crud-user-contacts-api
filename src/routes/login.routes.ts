import { Router } from "express";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middleware";
import { createLoginUsersController } from "../controllers/login.controllers";
import { loginSchema } from "../schemas/login.schemas";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureBodyIsValidMiddleware(loginSchema),
  createLoginUsersController
);

export default loginRoutes;
