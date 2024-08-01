import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { RootContext } from "../../context/RootContextProvider";
import ContactList from "../contactList/ContactList";
import RegisterForm from "../form/form";
import Modal from "../modal/Modal";
import { toast } from "react-toastify";
import ContactManagement from "../contactManage/ContactManagement";

export default function ContactsApp() {
  const { setContextState } = useContext(RootContext);

  async function queryFn() {
    const res = await axios.get("http://localhost:5000/contacts");
    return res.data;
  }
  const { isError, error, data, isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn,
    retry: 2,
  });

  useEffect(() => {
    setContextState({
      contacts: data,
    });
  }, [data, setContextState]);

  const { modal } = useContext(RootContext);

  if (isError) {
    toast.error(error.message, { position: "top-left", rtl: false });
  }

  return (
    <div className="font-yekan flex justify-around items-center flex-col py-10 desktop:flex-row desktop:h-screen  desktop:px-4 desktop:gap-[70px] bg-[#fafafa]">
      {modal.isOpen && <Modal type={modal.type} />}
      <RegisterForm />
      {isLoading ? (
        <DotLottieReact
          src="https://lottie.host/92e5535f-fee0-4088-a340-eb75f238bcda/QyeG0q3Qpm.json"
          autoplay
          loop
          className="w-[200px] h-[200px] py-8"
        />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <ContactManagement />
          <ContactList />
        </div>
      )}
    </div>
  );
}
