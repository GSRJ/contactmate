import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../services/api";

interface IAuthProviderProps {
  children: React.ReactNode;
}

interface IAthContextValues {
  signIn: (data: TLoginData) => Promise<void>;
}
export const AuthContext = createContext({} as IAthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  });

  const signIn = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      localStorage.setItem("token", token);

      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};
