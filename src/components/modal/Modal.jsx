import { useContext } from "react";
import { RootContext } from "../../context/RootContextProvider";

export default function Modal() {
  const contactsData = useContext(RootContext);
  function deleteContact(id) {
    let temp = contactsData.contextState.contacts;
    temp = temp.filter((contact) => contact.id !== id);
    contactsData.setContextState({ contacts: temp });
  }
  return (
    <div className="w-full h-full overflow-auto bg-[#00000030] z-10 fixed top-0 left-0 flex justify-center">
      <div className="bg-[#fefefe] rounded-lg m-auto h-64 w-72 flex text-center flex-col">
        <div className="py-6 flex flex-col justify-center">
          <h1 className="text-[30px] py-4">توجه</h1>
          <div className="text-[18px] pb-8">
            {" "}
            برای حذف این مخاطب مطمئن هستید؟
          </div>
          <div className="flex gap-2 justify-center">
            <button
              className="rounded-md py-1 px-4 bg-red-500 transition text-white hover:bg-red-700"
              onClick={() => {
                deleteContact(contactsData.modal.modalId);
                contactsData.setModal((prev) => !prev);
              }}
            >
              حذف
            </button>
            <button
              onClick={() => contactsData.setModal((prev) => !prev)}
              className=" rounded-md py-1 px-4 bg-slate-400 transition text-white hover:bg-slate-500"
            >
              خیر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
