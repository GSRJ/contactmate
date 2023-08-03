import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";

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
  const { loading } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contacts");
      setContacts(response.data);
    })();
  }, []);
  return (
    <>
      {" "}
      <h1>Dashboard</h1>;
      <ul>
        {contacts?.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </>
  );
};
