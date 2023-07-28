import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/errors";
import User from "../entities/users.entity";
import Contact from "../entities/contacts.entity";

const ensureEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const email: string = req.body.email;
  const userEmail: string = res.locals.userEmail;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const user: User | null = await userRepository.findOneBy({ email: email });

  const contact: Contact | null = await contactRepository.findOneBy({
    email: email,
  });

  console.log("AQUI", contact);

  if (contact && email) throw new AppError("Email already exists", 409);

  if (user && userEmail === email && !contact) {
    return next();
  }

  if (user && email) throw new AppError("Email already exists", 409);

  return next();
};

export default ensureEmailExistsMiddleware;
