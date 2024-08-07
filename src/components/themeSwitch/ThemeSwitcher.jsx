export default function ThemeSwitcher() {
  return (
    <div className="flex justify-end gap-1 items-center">
      <img src="sun-black.svg" className="w-5" alt="moon" />
      <div className="w-16">
        <div
          className={`${
            true ? "translate-x-11" : ""
          }container bg-[#2f3640] max-w-[45px] min-h-[25px] mx-auto rounded-3xl flex items-center cursor-pointer`}
          id="Switch"
        >
          <div
            className="bg-gray-200 w-5 h-5 rounded-full transition ml-[4px] duration-300"
            id="circle"
          ></div>
        </div>
      </div>
      <img src="moon-black.svg" className="w-4" alt="moon" />
    </div>
  );
}
