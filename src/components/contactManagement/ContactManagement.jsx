export default function ContactManagement() {
  return (
    <div className="grid grid-cols-3 w-full max-w-[800px] justify-between items-center">
      <div className="relative">
        <img
          src="/search icon.svg"
          alt=""
          className="w-7 absolute right-1 top-[6px] cursor-pointer"
        />
        <input placeholder="جستجو" className="rounded-md py-2 px-10" />
      </div>

      <h1 className="text-center text-2xl cursor-default">لیست مخاطبین</h1>

      <div className="flex justify-end gap-1 items-center">
        <img src="sun-black.svg" className="w-5" alt="moon" />
        <div class="w-16">
          <div
            class={`${
              true ? "translate-x-11" : ""
            }container bg-[#2f3640] max-w-[45px] min-h-[25px] mx-auto rounded-3xl flex items-center cursor-pointer`}
            id="Switch"
          >
            <div
              class="bg-gray-200 w-5 h-5 rounded-full transition ml-[4px] duration-300"
              id="circle"
            ></div>
          </div>
        </div>
        <img src="moon-black.svg" className="w-4" alt="moon" />
      </div>
    </div>
  );
}
