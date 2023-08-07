import { Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalUpdateUser } from "../../components/ModalUpdateUser";
import { api } from "../../services/api";
import { StyledMain } from "./styles";
import { TUpdateUserData, TUserData } from "./validator";

export const Profile = () => {
  const [user, setUser] = useState<TUpdateUserData | TUserData | undefined>();
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [deleteMsg, setDeleteMsg] = useState<string>("");
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<TUserData>("/user");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const deleteUser = async () => {
    try {
      await api.delete("/user");
      setDeleteMsg("Perfil Deletado!");
      setTimeout(() => {
        setDeleteMsg("");
        localStorage.removeItem("token");
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledMain>
      <Paper>
        {deleteMsg && <p>{deleteMsg}</p>}
        {isOpenModal && (
          <ModalUpdateUser
            setUser={setUser}
            toggleModal={toggleModal}
          />
        )}
        <h2>Perfil</h2>
        <Button
          variant="contained"
          onClick={toggleModal}
        >
          Editar
        </Button>
        <h6>Nome </h6>
        <p>
          {user?.name} {user?.surname}
        </p>
        <h6>Email</h6>
        <p>{user?.email}</p>
        <h6>Telefone</h6>
        <p>{user?.phone}</p>
        <Button
          variant="outlined"
          color="error"
          onClick={deleteUser}
        >
          Excluir Perfil
        </Button>
        <br></br>
        <Button onClick={() => navigate("/dashboard")}>
          Voltar aos contatos
        </Button>
      </Paper>
    </StyledMain>
  );
};
