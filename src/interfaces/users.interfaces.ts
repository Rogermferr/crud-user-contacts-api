import { z } from "zod";
import {
  userRequestSchema,
  userResponseSchema,
} from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

type TUserRequest = z.infer<typeof userRequestSchema>;

type TUserResponse = z.infer<typeof userResponseSchema>;

type TUserUpdateRequest = DeepPartial<TUserRequest>;

export { TUserRequest, TUserResponse, TUserUpdateRequest };
