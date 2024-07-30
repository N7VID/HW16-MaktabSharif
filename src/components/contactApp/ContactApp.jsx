import { Slide, ToastContainer } from "react-toastify";
import Modal from "../modal/Modal";
import RegisterForm from "../form/form";
import ContactList from "../contactList/ContactList";
import { useContext } from "react";
import { RootContext } from "../../context/RootContextProvider";

export default function ContactsApp() {
  const { modal } = useContext(RootContext);
  return (
    <div className="font-yekan flex justify-around items-center flex-col py-10 desktop:flex-row desktop:h-screen  desktop:px-4 desktop:gap-[70px] bg-[#fafafa]">
      {modal.isOpen && <Modal />}
      <ToastContainer transition={Slide} rtl />
      <RegisterForm />
      <ContactList />
    </div>
  );
}
