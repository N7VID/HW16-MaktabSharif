import { useContext } from "react";
import ContactList from "./components/contactList/ContactList";
import RegisterForm from "./components/form/form";
import Modal from "./components/modal/Modal";
import { RootContext } from "./context/RootContextProvider";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const contactsData = useContext(RootContext);
  return (
    <div className="font-yekan flex justify-around items-center flex-col py-10 desktop:flex-row desktop:h-screen  desktop:px-4 desktop:gap-[70px] bg-[#fafafa]">
      {contactsData.modal.isOpen && <Modal />}
      <ToastContainer transition={Slide} rtl />
      <RegisterForm />
      <ContactList />
    </div>
  );
}
