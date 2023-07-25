import { Request, Response } from "express";
import { TloginResponse } from "../interfaces/login.interfaces";
import createLoginUsersService from "../services/login/createLoginUsers.service";

const createLoginUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginResponse: TloginResponse = await createLoginUsersService(req.body);

  return res.json(loginResponse);
};

export { createLoginUsersController };
