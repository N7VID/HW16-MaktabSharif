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
import ContactManagement from "../contactManagement/ContactManagement";

export default function ContactsApp() {
  const [totalItems, setTotalItems] = useState(0);
  const { setContextState, params, setParams, theme } = useContext(RootContext);

  async function queryFn() {
    const res = await axios.get(
      `http://localhost:5000/contacts?q=${params.search}&_page=${params.page}&_limit=${params.limit}`
    );
    setTotalItems(+res.headers["x-total-count"]);
    return res.data;
  }
  const { isError, error, data, isLoading } = useQuery({
    queryKey: ["contacts", params],
    queryFn,
    retry: 1,
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
    <div className="font-yekan flex justify-around items-center flex-col py-10 desktop:flex-row desktop:h-screen min-h-screen desktop:px-4 desktop:gap-[70px] bg-[#fafafa] dark:bg-[#2F3032] transition duration-300">
      {modal.isOpen && <Modal />}
      <RegisterForm />
      {isLoading ? (
        <div className="desktop:w-[900px] flex justify-center items-center">
          <DotLottieReact
            src={
              theme === "light"
                ? `https://lottie.host/92e5535f-fee0-4088-a340-eb75f238bcda/QyeG0q3Qpm.json`
                : `https://lottie.host/embed/fd96cd3e-ea11-457c-a02d-92256416417f/8BCWgeFMzs.json`
            }
            autoplay
            loop
            className="w-[300px] h-[300px] py-8"
          />
        </div>
      ) : !isError ? (
        <div className="flex flex-col justify-center items-center desktop:w-[900px]">
          <ContactManagement />
          <ContactList />
          <Pagination
            params={params}
            totalItems={totalItems}
            itemsPerPage={params.limit}
            currentPage={params.page}
            onPageChange={setParams}
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center desktop:py-0 py-10 cursor-default desktop:w-[900px]">
          <img
            src={theme === "light" ? `/error-black.svg` : `/error-white.svg`}
            alt="error"
            className="desktop:w-64 tablet:w-52 w-48"
          />
          <h1 className="desktop:text-xl tablet:text-lg font-semibold dark:text-white">
            {error.message}
          </h1>
        </div>
      )}
    </div>
  );
}
