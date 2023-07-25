import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entity";
import {
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/users.interfaces";
import { userResponseSchema } from "../../schemas/users.schemas";
import { AppError } from "../../errors/errors";

const updateUserService = async (
  id: string,
  data: TUserUpdateRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldData: User | null = await userRepository.findOneBy({ id: id });

  if (!oldData) {
    throw new AppError("User not found", 404);
  }

  const newUserData: User = userRepository.create({
    ...oldData,
    ...data,
  });
  await userRepository.save(newUserData);

  const userReturn: TUserResponse = userResponseSchema.parse(newUserData);

  return userReturn;
};

export default updateUserService;
