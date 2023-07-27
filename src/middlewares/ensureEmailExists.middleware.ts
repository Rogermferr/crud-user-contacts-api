import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/errors";
import User from "../entities/users.entity";

const ensureEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const email: string = req.body.email;
  const userEmail: string = res.locals.userEmail;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({ email: email });

  if (user && userEmail === email) {
    return next();
  }

  if (user && email) throw new AppError("Email already exists", 409);

  return next();
};

export default ensureEmailExistsMiddleware;
