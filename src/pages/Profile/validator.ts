import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  phone: z.string(),
  createdAt: z.string(),
});

export const UpdatePartialUserSchema = UserSchema.extend({
  password: z.string(),
})
  .omit({
    createdAt: true,
  })
  .partial();

export type TUserData = z.infer<typeof UserSchema>;
export type TUpdateUserData = z.infer<typeof UpdatePartialUserSchema>;
