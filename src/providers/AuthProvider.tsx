import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../services/api";

interface IAuthProviderProps {
  children: React.ReactNode;
}

interface IAthContextValues {
  signIn: (data: TLoginData) => Promise<void>;
  loading: boolean;
}
export const AuthContext = createContext({} as IAthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      navigate("/login");
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  });

  const signIn = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setLoading(false);
      localStorage.setItem("token", token);

      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
