import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/errors";
import User from "../entities/users.entity";
import Contact from "../entities/contacts.entity";

const ensureTelephoneExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const telephone: string = req.body.telephone;
  const userTel: string = res.locals.userTel;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const user: User | null = await userRepository.findOneBy({
    telephone: telephone,
  });

  const contact: Contact | null = await contactRepository.findOneBy({
    telephone: telephone,
  });

  if (user && userTel === telephone) {
    return next();
  }

  if (contact && contact.telephone === telephone) {
    return next();
  }

  console.log(userTel);

  if (user && telephone) throw new AppError("Telephone already exists", 409);

  if (contact && telephone) throw new AppError("Telephone already exists", 409);

  return next();
};

export default ensureTelephoneExistsMiddleware;
