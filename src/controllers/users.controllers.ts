import { Request, Response } from "express";
import { TUserResponse } from "../interfaces/users.interfaces";
import createUserService from "../services/user/createUser.service";
import getUserService from "../services/user/getUser.service";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser: TUserResponse = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;

  const user: TUserResponse = await getUserService(userId);

  return res.json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;

  const user: TUserResponse = await updateUserService(userId, req.body);

  return res.json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;

  await deleteUserService(userId);

  return res.status(204).send();
};

export {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
};
