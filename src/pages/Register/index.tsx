import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Paper } from "@mui/material";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";
import { RegisterSchema, TRegisterData } from "./validator";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(RegisterSchema),
  });
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string>("");
  const [succesMsg, setSuccesMsg] = useState<string>("");

  const toRegister = async (data: TRegisterData): Promise<void> => {
    try {
      await api.post("/user", data);
      setSuccesMsg("Usuário cadastrado com sucesso!");
      setTimeout(() => {
        setSuccesMsg("");
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMsg = error.response!.data.message;
        setApiError(errorMsg);
      }
    }
  };

  return (
    <main>
      <Container>
        <Paper>
          <h2>Cadastre-se:</h2>
          {succesMsg && <p>{succesMsg}</p>}
          {apiError && <p>{apiError}</p>}
          <form onSubmit={handleSubmit(toRegister)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              {...register("name")}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <label htmlFor="surname">Sobrenome</label>
            <input
              type="text"
              id="surname"
              {...register("surname")}
            />
            {errors.surname && <p>{errors.surname.message}</p>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <Button
              variant="contained"
              type="submit"
            >
              Cadastrar
            </Button>
          </form>
        </Paper>
      </Container>
    </main>
  );
};
