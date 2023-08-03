import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "./protectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
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
