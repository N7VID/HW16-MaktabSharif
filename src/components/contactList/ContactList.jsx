import Contact from "../contact/Contact";

export default function ContactList() {
  return (
    <div className="px-10 py-10 flex-grow grid grid-cols-1 gap-y-8 gap-x-5 overflow-x-hidden overflow-y-hidden desktop:overflow-y-scroll custom-scrollbar desktop:grid-cols-3 tablet:grid-cols-3 desktop:h-[560px]">
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}
