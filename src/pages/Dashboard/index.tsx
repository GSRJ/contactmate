import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { ModalAddContact } from "../../components/ModalAddContact";
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
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<IContact[]>();
  const [isContactsEmpty, setIsContactsEmpty] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contacts");
      setContacts(response.data);
      setIsContactsEmpty(response.data.length === 0);
    })();
  }, []);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <Container>
        <header>
          <Button
            variant="contained"
            type="button"
            onClick={toggleModal}
          >
            Cadatrar Contato
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/profile")}
          >
            Perfil
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={logout}
          >
            Sair
          </Button>
        </header>
        {isOpenModal && (
          <ModalAddContact
            setContacts={setContacts}
            toggleModal={toggleModal}
          />
        )}
        <main>
          <Board>
            <h2>Lista de contatos</h2>
            {isContactsEmpty ? (
              <p>Nenhum contato cadastrado</p>
            ) : (
              contacts?.map((contact) => (
                <Card
                  key={contact.id}
                  contact={contact}
                  setContacts={setContacts}
                />
              ))
            )}
          </Board>
        </main>
      </Container>
    </>
  );
};
