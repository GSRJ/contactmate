import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./style";
import {
  LoginSchema,
  RegisterSchema,
  TLoginData,
  TRegisterData,
} from "./validator";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData | TRegisterData>({
    resolver: zodResolver(LoginSchema || RegisterSchema),
  });

  const { signIn, errorMsg } = useAuth();
  return (
    <Container>
      <Paper>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(signIn)}>
          {errorMsg && <p>{errorMsg}</p>}
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor="emailLogin">Email</label>
          <input
            type="email"
            id="emailLogin"
            {...register("email")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <label htmlFor="passwordLogin">Senha</label>
          <input
            type="password"
            id="passwordLogin"
            {...register("password")}
          />
          <Button
            variant="contained"
            type="submit"
          >
            Entrar
          </Button>
          <Button onClick={() => navigate("/register")}>Cadastar</Button>
        </form>
      </Paper>
    </Container>
  );
};
