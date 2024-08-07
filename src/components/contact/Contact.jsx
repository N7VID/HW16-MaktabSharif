import { useContext } from "react";
import { RootContext } from "../../context/RootContextProvider";

export default function Contact({
  id,
  firstName,
  lastName,
  relative,
  phoneNumber,
  email,
}) {
  const { setModal, editMode, setEditMode, setInitialValues, theme } =
    useContext(RootContext);

  return (
    <div className="bg-white shadow-lg border border-black rounded-lg flex flex-col justify-center items-center py-4 cursor-default h-[220px] w-[250px] dark:bg-[#383A56] dark:border-white transition duration-300">
      <div className="text-center py-2">
        <p className="text-base font-semibold desktop:text-lg whitespace-nowrap overflow-hidden text-ellipsis w-52 dark:text-white">
          {`
          ${firstName}
          ${lastName}
          `}
        </p>
        <span className="text-[#b4b4b4] text-sm">{relative}</span>
      </div>
      <div className="text-center py-2 flex flex-col gap-2">
        <div className="bg-[#eee] rounded-xl p-1 relative w-[200px]">
          <img src="/mobile.svg" alt="" className="w-4 absolute top-2 left-2" />
          <p>{phoneNumber}</p>
        </div>
        <div className="bg-[#eee] rounded-xl p-1 relative flex justify-center w-[200px]">
          <img src="/at.svg" alt="" className="w-4 absolute top-[6px] left-2" />
          <p
            className="text-[12px] whitespace-nowrap overflow-hidden text-ellipsis w-[150px]"
            dir="ltr"
          >
            {email}
          </p>
        </div>
      </div>
      <div className="flex gap-4 py-2">
        <img
          src={theme === "light" ? `/edit.svg` : `edit-white.svg`}
          alt="edit"
          className="w-5 cursor-pointer desktop:w-5"
          onClick={() => {
            setEditMode(() => ({ editId: id, status: true }));
            setInitialValues({
              firstName: firstName,
              lastName: lastName,
              phoneNumber: phoneNumber,
              email: email,
              relative: relative,
            });
          }}
        />
        {editMode.status ? (
          <img
            src="/bin-disabled.svg"
            alt="bin"
            disabled
            className="w-5 desktop:w-5"
          />
        ) : (
          <img
            src={theme === "light" ? `/bin.svg` : `bin-white.svg`}
            alt="bin"
            onClick={() =>
              setModal((prev) => ({
                ...prev,
                isOpen: true,
                modalId: id,
              }))
            }
            className="w-5 cursor-pointer desktop:w-5"
          />
        )}
      </div>
    </div>
  );
}
