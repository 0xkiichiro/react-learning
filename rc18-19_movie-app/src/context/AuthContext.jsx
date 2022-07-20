import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(true);

  return (
    <AuthContext.Provider value={currUser}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
