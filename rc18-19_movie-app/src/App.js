import React from "react";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify/dist/components";

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
      <ToastContainer />
    </AuthContextProvider>
  );
};

export default App;
