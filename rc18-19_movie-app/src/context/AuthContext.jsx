import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(false);

  return (
    <AuthContext.Provider value={currUser}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
