import { useContext } from "react";
import { toast } from "react-toastify";
import { RootContext } from "../../context/RootContextProvider";
import useDeleteItem from "../../hooks/useDeleteItem";

export default function Modal() {
  const { setModal, modal } = useContext(RootContext);

  const { deleteItem } = useDeleteItem({
    url: `http://localhost:5000/contacts`,
    queryKey: "contacts",
    successMessage: "مخاطب با موفقیت حذف شد.",
  });
  function handleDeleteBtn(id) {
    deleteItem(id);
  }

  return (
    <div className="w-full h-full overflow-auto bg-[#00000054] z-10 fixed top-0 left-0 flex justify-center cursor-default">
      <div className="bg-[#fefefe] rounded-lg m-auto h-56 w-[310px] desktop:w-96 flex text-center flex-col dark:bg-[#2F3032]">
        <div className="py-6 flex flex-col justify-center">
          <h1 className="text-[30px] py-4 text-red-600">توجه!</h1>
          <div className="text-[18px] pb-7 dark:text-white">
            {" "}
            برای حذف این مخاطب اطمینان دارید؟
          </div>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setModal((prev) => !prev)}
              className=" rounded-md py-1 px-4 bg-[#A9A9A9] transition text-white dark:text-black hover:bg-[#808080]"
            >
              خیر
            </button>
            <button
              className="rounded-md py-1 px-4 bg-[#FF0000] transition text-white hover:bg-[#CC0000]"
              onClick={() => {
                handleDeleteBtn(modal.modalId);
                setModal((prev) => !prev);
                toast.success("مخاطب با موفقیت حذف شد.", {
                  position: "top-left",
                });
              }}
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
