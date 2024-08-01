import { useContext } from "react";
import { RootContext } from "../../context/RootContextProvider";

export default function ContactManagement() {
  const { setModal } = useContext(RootContext);
  return (
    <div className="w-[250px] rounded-md pt-12 desktop:pt-0 flex items-center gap-4 desktop:w-[800px] tablet:w-[500px]">
      <button
        onClick={() =>
          setModal((prev) => ({
            ...prev,
            isOpen: true,
            type: "all items",
          }))
        }
      >
        <img
          src="/deleteAll.svg"
          alt="delete-all"
          title="حذف همه"
          className="w-6"
        />
      </button>
      <button onClick={window.print}>
        <img
          src="/print.svg"
          alt="print-icon"
          title="پرینت مخاطبین"
          className="w-6"
        />
      </button>
      <h1 className="text-xl">لیست مخاطبین</h1>
    </div>
  );
}
