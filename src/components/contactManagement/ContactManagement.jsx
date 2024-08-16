import { useContext, useState } from "react";
import { RootContext } from "../../context/RootContextProvider";
import ThemeSwitcher from "../themeSwitch/ThemeSwitcher";

export default function ContactManagement() {
  const { theme, setParams, params } = useContext(RootContext);

  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = () => {
    setParams({ ...params, search: searchInput });
  };

  return (
    <div className="desktop:grid desktop:grid-cols-3 w-full desktop:max-w-[800px] max-w-[500px] flex flex-col gap-6 justify-between items-center pt-14 desktop:py-0">
      <div className="relative">
        <img
          src={theme === "light" ? `/search icon.svg` : `search icon white.svg`}
          alt=""
          onClick={() => {
            if (searchInput !== "") {
              setSearchInput("");
              handleSearchInput();
            }
          }}
          className="w-7 absolute right-1 top-[6px] cursor-pointer"
        />
        <input
          placeholder="جستجو"
          className="rounded-md py-2 px-9 dark:bg-[#383A56] dark:text-white transition duration-300"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <h1
        className="text-center text-2xl cursor-pointer hidden desktop:block dark:text-white transition"
        onClick={() => {
          setParams({ ...params, search: "" });
          setSearchInput("");
        }}
      >
        لیست مخاطبین
      </h1>

      <ThemeSwitcher />

      <h1 className="text-center text-2xl cursor-default desktop:hidden pt-4  dark:text-white transition">
        لیست مخاطبین
      </h1>
    </div>
  );
}
