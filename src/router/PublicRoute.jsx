import React, { useContext } from "react";
import { AuthProvaider } from "../auth/context/AuthProvaider";

export const PublicRoute = ({ children }) => {
  const auth = useContext(AuthProvaider);
  const logged = auth ? auth.logged : false;

  return !logged ? children : <Navigate to={"/episode"} />;
};
