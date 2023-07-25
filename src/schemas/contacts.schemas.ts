import { z } from "zod";
import { userSchema } from "./users.schemas";

const contactSchema = z.object({
  id: z.string(),
  fullName: z.string().max(150),
  telephone: z.string().max(15),
  createdAt: z.union([z.string(), z.date()]),
});

const contactRequestSchema = contactSchema.omit({
  id: true,
  createdAt: true,
});

const contactUpdateRequestSchema = contactRequestSchema.partial();

export { contactSchema, contactRequestSchema, contactUpdateRequestSchema };
