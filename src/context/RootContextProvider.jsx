import { createContext, useState } from "react";

export const RootContext = createContext();

export default function RootContextProvider({ children }) {
  const [contextState, setContextState] = useState({
    contacts: [],
  });

  return (
    <RootContext.Provider value={{ contextState, setContextState }}>
      {children}
    </RootContext.Provider>
  );
}
