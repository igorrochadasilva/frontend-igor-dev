import React, { createContext, useState } from "react";
import messages_br from "../../messages/texts-pt-br.json"

const DEFAULT_VALUE = {
    state: {
        language: "pt-BR",
        messages: messages_br,
    },
    setState: () => {},
}

const UserContext = createContext(DEFAULT_VALUE);

const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;