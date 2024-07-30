import { createContext, useState } from "react";
import { toast } from "react-toastify";

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

  const setDefaultInitialValues = () => {
    setInitialValues({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      relative: "",
    });
  };

  function addNewContact(values) {
    const existingContacts = contextState.contacts || [];
    const updatedContacts = [...existingContacts, values];
    setContextState({
      ...contextState,
      contacts: updatedContacts,
    });
    toast.success("مخاطب با موفقیت اضافه شد.", {
      position: "top-left",
    });
  }

  function updatedContacts(id, values) {
    let existingContacts = contextState.contacts || [];
    let updatedContact = existingContacts.map((user) =>
      user.id === id ? (user = values) : user
    );
    setContextState({
      ...contextState,
      contacts: updatedContact,
    });
    toast.success("مخاطب با موفقیت به روزرسانی شد.", {
      position: "top-left",
    });
  }

  return (
    <RootContext.Provider
      value={{
        contextState,
        setContextState,
        modal,
        setModal,
        editMode,
        setEditMode,
        initialValues,
        setInitialValues,
        setDefaultInitialValues,
        updatedContacts,
        addNewContact,
      }}
    >
      {children}
    </RootContext.Provider>
  );
}
