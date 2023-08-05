import { Dispatch } from "react";
import { IContact } from "../../pages/Dashboard";
import { Container } from "./styles";

interface CardProps {
  contact: IContact;
  setContact: Dispatch<React.SetStateAction<IContact[] | undefined>>;
}
export const Card = ({ contact, setContact }: CardProps) => {
  return (
    <Container>
      <h6>Nome </h6>
      {contact.name}
      <> </>
      {contact.surname}
      <h6>Email</h6>
      {contact.email}
      <h6>Telefone</h6>
      {contact.phone}
      <h6>Data de Criação</h6>
      {contact.createdAt}
    </Container>
  );
};
