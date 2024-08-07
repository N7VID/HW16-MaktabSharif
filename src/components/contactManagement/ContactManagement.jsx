import { useContext } from "react";
import { RootContext } from "../../context/RootContextProvider";
import ThemeSwitcher from "../themeSwitch/ThemeSwitcher";

export default function ContactManagement() {
  const { handleSearchInput, searchInput, setSearchInput } =
    useContext(RootContext);
  return (
    <div className="desktop:grid desktop:grid-cols-3 w-full desktop:max-w-[800px] max-w-[500px] flex flex-col gap-6 justify-between items-center pt-14 desktop:py-0">
      <div className="relative">
        <img
          src="/search icon.svg"
          alt=""
          onClick={handleSearchInput}
          className="w-7 absolute right-1 top-[6px] cursor-pointer"
        />
        <input
          placeholder="جستجو"
          className="rounded-md py-2 px-10"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <h1 className="text-center text-2xl cursor-default hidden desktop:block">
        لیست مخاطبین
      </h1>

      <ThemeSwitcher />

      <h1 className="text-center text-2xl cursor-default desktop:hidden pt-4">
        لیست مخاطبین
      </h1>
    </div>
  );
}
