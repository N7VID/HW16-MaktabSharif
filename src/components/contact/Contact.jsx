export default function Contact({
  id,
  firstName,
  lastName,
  relative,
  phoneNumber,
  email,
}) {
  return (
    <div className="shadow-contactShadow rounded-lg flex flex-col justify-center items-center py-4 cursor-default h-[250px] w-[250px] ">
      <div className="text-center py-2">
        <p className="text-base font-semibold desktop:text-lg">
          {`
          ${firstName}
          ${lastName}
          `}
        </p>
        <span className="text-[#b4b4b4] text-sm">{relative}</span>
      </div>
      <div className="text-center py-2 flex flex-col gap-1">
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
          src="/edit.svg"
          alt="edit"
          className="w-5 cursor-pointer desktop:w-5"
        />
        <img
          src="/bin.svg"
          alt="bin"
          className="w-5 cursor-pointer desktop:w-5"
        />
      </div>
    </div>
  );
}
