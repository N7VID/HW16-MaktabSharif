import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactsApp from "./components/contactApp/ContactApp";
import { useContext } from "react";
import { RootContext } from "./context/RootContextProvider";

const queryClient = new QueryClient();

export default function App() {
  const { theme } = useContext(RootContext);
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        transition={Slide}
        rtl
        theme={theme === "light" ? `light` : "dark"}
      />
      <ContactsApp />
    </QueryClientProvider>
  );
}
