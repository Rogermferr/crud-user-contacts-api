import { Repository } from "typeorm";
import User from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { userResponseSchema } from "../../schemas/users.schemas";
import { AppError } from "../../errors/errors";

const getUserService = async (id: string): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const user: TUserResponse = userResponseSchema.parse(findUser);

  const userReturn: TUserResponse = userResponseSchema.parse(user);

  return userReturn;
};

export default getUserService;
