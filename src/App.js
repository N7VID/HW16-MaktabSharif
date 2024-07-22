import ContactList from "./components/contactList/ContactList";
import RegisterForm from "./components/form/form";

export default function App() {
  return (
    <div className="font-yekan flex gap-32 items-center h-screen px-20">
      <RegisterForm />
      <ContactList />
    </div>
  );
}
