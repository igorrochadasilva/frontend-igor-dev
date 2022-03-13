import React from "react";

import { UserContextProvider } from "./AppContext";



const GlobalContext: React.FC = ({ children }) => {
  return (
    <>
      <UserContextProvider>{children}</UserContextProvider>
    </>
  );
};

export default GlobalContext;