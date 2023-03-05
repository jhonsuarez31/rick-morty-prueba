import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/page/Login";
import { ApiRouter } from "../rick-morty/routes/ApiRouter";
import { Navbar } from "../UI/components/Navbar";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";

export const AppRoute = () => {
  return (
    <>

      <Routes>
        <Route
          path="/auth/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <ApiRouter/>   
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
