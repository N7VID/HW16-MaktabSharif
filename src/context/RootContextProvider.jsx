import { createContext, useState } from "react";

export const RootContext = createContext();

export default function RootContextProvider({ children }) {
  const [contextState, setContextState] = useState({
    contacts: [
      {
        id: crypto.randomUUID(),
        firstName: "نوید",
        lastName: "علی اکبری",
        relative: "دوست",
        phoneNumber: "09135948292",
        email: "navidaliakbari.206@gmail.com",
      },
      {
        id: crypto.randomUUID(),
        firstName: "یونس",
        lastName: "علی خاصی",
        relative: "دوست",
        phoneNumber: "09135948292",
        email: "younes.206@gmail.com",
      },
      {
        id: crypto.randomUUID(),
        firstName: "نیما",
        lastName: "عالمیان",
        relative: "همکار",
        phoneNumber: "09135948292",
        email: "nimalamian@yahoo.com",
      },
    ],
  });

  return (
    <RootContext.Provider value={{ contextState, setContextState }}>
      {children}
    </RootContext.Provider>
  );
}
