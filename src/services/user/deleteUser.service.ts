import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entity";
import { AppError } from "../../errors/errors";

const deleteUserService = async (id: string): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError("User not found", 404);
  }
  await userRepository.remove(user);
};

export default deleteUserService;
