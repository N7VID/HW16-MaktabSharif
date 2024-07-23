import { useContext } from "react";
import Contact from "../contact/Contact";
import { RootContext } from "../../context/RootContextProvider";

export default function ContactList() {
  const contactsData = useContext(RootContext);

  if (contactsData.contextState.contacts.length !== 0) {
    return (
      <div className="px-10 py-20 desktop:py-10 flex-grow grid grid-cols-1 gap-y-8 gap-x-6 overflow-x-hidden overflow-y-hidden desktop:overflow-y-scroll custom-scrollbar desktop:grid-cols-3 tablet:grid-cols-2 desktop:h-[560px] max-w-[900px]">
        {contactsData.contextState.contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            relative={contact.relative}
            phoneNumber={contact.phoneNumber}
            email={contact.email}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="px-10 py-20 flex-grow overflow-x-hidden flex justify-center items-center desktop:h-[560px] max-w-[960px] cursor-default">
        <div className="flex flex-col justify-center items-center border border-black pb-12 rounded-lg bg-white h-[400px]">
          <img
            src="/Empty state icon..svg"
            alt="emptyList"
            className="w-[70%]"
          />
          <p className="text-center text-xl">لیست مخاطبین شما خالی است.</p>
        </div>
      </div>
    );
  }
}
