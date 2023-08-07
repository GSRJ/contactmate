import { Button, Paper } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { IContact } from "../../pages/Dashboard";
import { api } from "../../services/api";
import { ModalUpdateContact } from "../ModalUpdateContact";
import { Container } from "./style";

interface CardProps {
  contact: IContact;
  setContacts: React.Dispatch<React.SetStateAction<IContact[] | undefined>>;
}

export const Card = ({ contact, setContacts }: CardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contacts");
      setContacts(response.data);
    })();
  });

  const deleteContact = async () => {
    try {
      await api.delete("/contact/" + contact.id);
      setContacts((previousContacts) => [
        ...previousContacts!.filter((contact) => contact.id !== contact.id),
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Paper>
        <Button
          variant="contained"
          onClick={toggleModal}
        >
          Editar
        </Button>
        {isOpenModal && (
          <ModalUpdateContact
            setContacts={setContacts}
            contactId={String(contact.id)}
            toggleModal={toggleModal}
          />
        )}
        <h6>Nome</h6>
        <p>{contact.name}</p>
        {contact.surname}
        <h6>Email</h6>
        <p>{contact.email}</p>
        <h6>Telefone</h6>
        <p>{contact.phone}</p>
        <Button
          variant="outlined"
          color="error"
          onClick={deleteContact}
        >
          Excluir
        </Button>
      </Paper>
    </Container>
  );
};
