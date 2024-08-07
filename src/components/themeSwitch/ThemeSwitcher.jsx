import { useContext } from "react";
import { RootContext } from "../../context/RootContextProvider";

export default function ThemeSwitcher() {
  const { toggleTheme, theme } = useContext(RootContext);
  return (
    <div className="flex justify-end gap-1 items-center">
      <img src="sun-black.svg" className="w-5" alt="moon" />
      <div className="w-16">
        <div
          className="bg-[#2f3640] max-w-[45px] min-h-[25px] mx-auto rounded-3xl flex items-center cursor-pointer"
          onClick={toggleTheme}
        >
          <div
            className={`bg-gray-200 w-5 h-5 -ml-6 rounded-full transition duration-300 ${
              theme === "dark" ? "-translate-x-6" : ""
            }`}
          ></div>
        </div>
      </div>
      <img src="moon-black.svg" className="w-4" alt="moon" />
    </div>
  );
}
