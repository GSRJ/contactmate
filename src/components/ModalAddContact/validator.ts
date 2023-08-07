import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .max(45)
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .nonempty("Insira um nome"),
  surname: z
    .string()
    .max(45)
    .min(2, "Sobrenome deve ter pelo menos 2 caracteres")
    .nonempty("Insira um sobrenome"),
  email: z.string().email("Insira um e-mail válido").max(45).min(3),
  phone: z
    .string()
    .max(15)
    .regex(/^[0-9]+$/)
    .default("000"),
});

export type TContact = z.infer<typeof schema>;
