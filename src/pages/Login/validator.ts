import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().nonempty("Insira uma senha"),
});

export type TLoginData = z.infer<typeof LoginSchema>;
