import ContactList from "./components/contactList/ContactList";
import RegisterForm from "./components/form/form";

export default function App() {
  return (
    <div className="font-yekan flex gap-10 items-center flex-col py-10 desktop:flex-row desktop:h-screen desktop:pr-20 desktop:pl-4 desktop:gap-28">
      <RegisterForm />
      <ContactList />
    </div>
  );
}
