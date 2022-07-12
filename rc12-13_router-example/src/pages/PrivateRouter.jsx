import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  //! actually this value will be read from global state
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
