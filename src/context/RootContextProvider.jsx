import { createContext, useState } from "react";

export const RootContext = createContext();

export default function RootContextProvider({ children }) {
  const [contextState, setContextState] = useState({
    contacts: [],
  });

  const [modal, setModal] = useState({
    isOpen: false,
    modalId: null,
  });

  const [editMode, setEditMode] = useState({
    status: false,
    editId: null,
  });

  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    relative: "",
  });

  const [params, setParams] = useState({
    page: 1,
    limit: 6,
  });

  const setDefaultInitialValues = () => {
    setInitialValues({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      relative: "",
    });
  };

  return (
    <RootContext.Provider
      value={{
        params,
        setParams,
        contextState,
        setContextState,
        modal,
        setModal,
        editMode,
        setEditMode,
        initialValues,
        setInitialValues,
        setDefaultInitialValues,
      }}
    >
      {children}
    </RootContext.Provider>
  );
}
