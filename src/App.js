import { QueryClientProvider } from "@tanstack/react-query";
import { useContext } from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactsApp from "./components/contactApp/ContactApp";
import { RootContext } from "./context/RootContextProvider";
import { queryClient } from "./lib/react-query";

export default function App() {
  const { theme } = useContext(RootContext);
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        transition={Slide}
        limit={1}
        position="top-left"
        rtl
        theme={theme === "light" ? "light" : "dark"}
      />
      <ContactsApp />
    </QueryClientProvider>
  );
}
