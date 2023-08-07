import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(2).nonempty("Insira um nome"),
  surname: z.string().min(2).nonempty("Insira um sobrenome"),
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().nonempty("Insira uma senha"),
});

export type TRegisterData = z.infer<typeof RegisterSchema>;
