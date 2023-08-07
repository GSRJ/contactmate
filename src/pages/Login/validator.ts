import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().nonempty("Insira uma senha"),
});

export const RegisterSchema = z.object({
  name: z.string().nonempty("Insira um nome"),
  surname: z.string().nonempty("Insira um sobrenome"),
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().nonempty("Insira uma senha"),
});

export type TRegisterData = z.infer<typeof RegisterSchema>;
export type TLoginData = z.infer<typeof LoginSchema>;
