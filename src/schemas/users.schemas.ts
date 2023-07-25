import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  fullName: z.string().max(150),
  email: z.string().max(150).email(),
  password: z.string().max(127),
  telephone: z.string().max(15),
  createdAt: z.string(),
});

const userRequestSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

const userResponseSchema = userSchema.omit({ password: true });

const userUpdateRequestSchema = userRequestSchema.partial();

export {
  userSchema,
  userRequestSchema,
  userResponseSchema,
  userUpdateRequestSchema,
};
