import { z } from "zod";
import { userResponseSchema } from "./users.schemas";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const loginResponseSchema = z.object({
  token: z.string(),
  user: userResponseSchema,
});

export { loginSchema, loginResponseSchema };
