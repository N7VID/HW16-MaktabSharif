import { useContext } from "react";
import ContactList from "./components/contactList/ContactList";
import RegisterForm from "./components/form/form";
import Modal from "./components/modal/Modal";
import { RootContext } from "./context/RootContextProvider";

export default function App() {
  const contactsData = useContext(RootContext);
  return (
    <div className="font-yekan flex gap-10 items-center flex-col py-10 desktop:flex-row desktop:h-screen desktop:pr-20 desktop:pl-4 desktop:gap-28">
      {contactsData.modal.isOpen && <Modal />}
      <RegisterForm />
      <ContactList />
    </div>
  );
}
