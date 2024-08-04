import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { RootContext } from "../../context/RootContextProvider";
import ContactList from "../contactList/ContactList";
import RegisterForm from "../form/form";
import Modal from "../modal/Modal";
import { toast } from "react-toastify";
import Pagination from "../pagination/Pagination";

export default function ContactsApp() {
  const [totalItems, setTotalItems] = useState(0);
  const { setContextState, params, setParams } = useContext(RootContext);

  async function queryFn() {
    const res = await axios.get(
      `http://localhost:5000/contacts?_page=${params.page}&_limit=${params.limit}`
    );
    setTotalItems(+res.headers["x-total-count"]);
    return res.data;
  }
  const { isError, error, data, isLoading } = useQuery({
    queryKey: ["contacts", params.page],
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
      {modal.isOpen && <Modal />}
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
          <ContactList />
          <Pagination
            params={params}
            totalItems={totalItems}
            itemsPerPage={params.limit}
            currentPage={params.page}
            onPageChange={setParams}
          />
        </div>
      )}
    </div>
  );
}
