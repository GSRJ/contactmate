import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { TUpdateUserData } from "../../pages/Profile/validator";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import { schema } from "./validator";

interface ModalUpdateUserProps {
  toggleModal: () => void;
  setUser: React.Dispatch<React.SetStateAction<TUpdateUserData | undefined>>;
}

export const ModalUpdateUser = ({
  toggleModal,
  setUser,
}: ModalUpdateUserProps) => {
  const { register, handleSubmit, getValues } = useForm<TUpdateUserData>({
    resolver: zodResolver(schema),
  });

  const updateUser = async () => {
    try {
      const data = getValues();
      const filledData = Object.fromEntries(
        Object.entries(data).filter(([, value]) => value !== "")
      );
      const response = await api.patch<TUpdateUserData>("/user/", filledData);
      setUser(response.data);
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(updateUser)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          {...register("name")}
        />

        <label htmlFor="surname">Sobrenome</label>
        <input
          type="text"
          id="surname"
          {...register("surname")}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          {...register("password")}
        />

        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          id="phone"
          {...register("phone")}
        />

        <Button
          variant="contained"
          type="submit"
        >
          Atualizar
        </Button>
      </form>
    </Modal>
  );
};
