import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { IContact } from "../../pages/Dashboard";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import { TContact, schema } from "./validator";

interface ModalAddContactProps {
  toggleModal: () => void;
  setContacts: React.Dispatch<React.SetStateAction<IContact[] | undefined>>;
}

export const ModalAddContact = ({
  setContacts,
  toggleModal,
}: ModalAddContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContact>({
    resolver: zodResolver(schema),
  });

  const createContact = async (data: TContact) => {
    try {
      const response = await api.post<IContact>("/contact/", data);
      setContacts((previousContacts) => [...previousContacts!, response.data]);
      window.location.reload();
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(createContact)}>
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
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          id="phone"
          {...register("phone")}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
        <Button
          variant="contained"
          type="submit"
        >
          Cadastrar
        </Button>
      </form>
    </Modal>
  );
};
