import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { ProtectedRoutes } from "./protectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Route>
    </Routes>
  );
};
