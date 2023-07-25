import { z } from "zod";
import { loginResponseSchema, loginSchema } from "../schemas/login.schemas";

type TLogin = z.infer<typeof loginSchema>;

type TloginResponse = z.infer<typeof loginResponseSchema>;

export { TLogin, TloginResponse };
