import { useContext } from "react";
import { RootContext } from "../../context/RootContextProvider";

export default function ThemeSwitcher() {
  const { toggleTheme, theme } = useContext(RootContext);
  return (
    <div className="flex justify-end items-center">
      <img
        src={theme === "light" ? `sun-black.svg` : `sun-white.svg`}
        className="w-5"
        alt="sun icon"
      />
      <div className="w-16">
        <div
          className="relative bg-black dark:bg-slate-200 max-w-[45px] min-h-[25px] mx-auto rounded-3xl flex items-center cursor-pointer"
          onClick={toggleTheme}
        >
          <div
            className={`bg-gray-200 dark:bg-gray-800 w-5 h-5 absolute top-[2.5px] right-[2.5px] rounded-full transition duration-300 ${
              theme === "dark" ? "-translate-x-[21.5px]" : ""
            }`}
          ></div>
        </div>
      </div>
      <img
        src={theme === "light" ? `moon-black.svg` : `moon-white.svg`}
        className="w-4"
        alt="moon icon"
      />
    </div>
  );
}
