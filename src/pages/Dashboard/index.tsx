import { useEffect, useState } from "react";
import { Card } from "../../components";
import { api } from "../../services/api";
import { Board, Container } from "./styles";

export interface IContact {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
    admin: boolean;
    createdAt: string;
  };
}

export const Dashboard = () => {
  const [contacts, setContacts] = useState<IContact[]>();
  const [isContactsEmpty, setIsContactsEmpty] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contacts");
      setContacts(response.data);
      setIsContactsEmpty(response.data.length === 0);
    })();
  }, []);

  return (
    <>
      <Container>
        <header>
          <button type="button">Novo</button>
        </header>

        <main>
          <Board>
            <h3>Lista de contatos</h3>
            {isContactsEmpty ? (
              <p>Nenhum contato cadastrado</p>
            ) : (
              contacts?.map((contact) => (
                <Card
                  key={contact.id}
                  contact={contact}
                  setContact={setContacts}
                />
              ))
            )}
          </Board>
        </main>
      </Container>
    </>
  );
};
