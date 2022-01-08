import React from "react";

import { UserContextProvider } from "./AppContext";

const GlobalContext = ({ children }) => {
  return (
    <>
      <UserContextProvider>{children}</UserContextProvider>;
    </>
  );
};

export default GlobalContext;