import { z } from "zod";

export const schema = z.object({
  name: z.string().optional(),
  surname: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  password: z.string().optional(),
});

export type TUpdateUserData = z.infer<typeof schema>;
