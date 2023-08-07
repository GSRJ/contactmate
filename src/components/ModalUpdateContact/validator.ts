import { z } from "zod";

export const schema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  surname: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
});

export type TUpdateContact = z.infer<typeof schema>;
