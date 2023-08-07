import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import { TUpdateContact, schema } from "./validator";

interface ModalUpdateContactProps {
  toggleModal: () => void;
  setContacts: React.Dispatch<
    React.SetStateAction<TUpdateContact[] | undefined>
  >;
  contactId: string;
}

export const ModalUpdateContact = ({
  toggleModal,
  setContacts,
  contactId,
}: ModalUpdateContactProps) => {
  const { register, handleSubmit, getValues } = useForm<TUpdateContact>({
    resolver: zodResolver(schema),
  });

  const updateContact = async () => {
    try {
      const data = getValues();
      const filledData = Object.fromEntries(
        Object.entries(data).filter(([, value]) => value !== "")
      );
      const response = await api.patch<TUpdateContact>(
        `/contact/${Number(contactId)}`,
        filledData
      );
      setContacts((previousContacts) => [
        ...previousContacts!.filter(
          (contact) => contact.id !== Number(contactId)
        ),
        response.data,
      ]);
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(updateContact)}>
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
