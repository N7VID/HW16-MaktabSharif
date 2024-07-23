import { useContext } from "react";
import Contact from "../contact/Contact";
import { RootContext } from "../../context/RootContextProvider";

export default function ContactList() {
  const contactsData = useContext(RootContext);

  return (
    <div className="px-10 py-20 flex-grow grid grid-cols-1 gap-y-8 gap-x-6 overflow-x-hidden overflow-y-hidden desktop:overflow-y-scroll custom-scrollbar desktop:grid-cols-3 tablet:grid-cols-2 desktop:h-[560px] max-w-[960px]">
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
}
