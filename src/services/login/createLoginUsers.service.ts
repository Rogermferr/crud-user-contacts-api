import { Repository } from "typeorm";
import { TLogin } from "../../interfaces/login.interfaces";
import { AppDataSource } from "../../data-source";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import User from "../../entities/users.entity";
import { AppError } from "../../errors/errors";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { userResponseSchema } from "../../schemas/users.schemas";

const createLoginUsersService = async (data: TLogin): Promise<any> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: data.email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const comparePass: boolean = await compare(data.password, user.password);

  if (!comparePass) {
    throw new AppError("Invalid credentials", 401);
  }

  const userReturn: TUserResponse = userResponseSchema.parse(user);

  const token: string = sign(
    {
      email: user.email,
    },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return {
    token: token,
    user: userReturn,
  };
};

export default createLoginUsersService;
