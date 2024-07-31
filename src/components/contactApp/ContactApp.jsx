import { Slide, ToastContainer } from "react-toastify";
import Modal from "../modal/Modal";
import RegisterForm from "../form/form";
import ContactList from "../contactList/ContactList";
import { useContext, useEffect } from "react";
import { RootContext } from "../../context/RootContextProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function ContactsApp() {
  const { setContextState } = useContext(RootContext);

  async function queryFn() {
    const res = await axios.get("http://localhost:5000/contacts");
    return res.data;
  }
  const { isError, error, data, isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn,
  });

  useEffect(() => {
    setContextState({
      contacts: data,
    });
  }, [data, setContextState]);

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
