import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import ContactsApp from "./components/contactApp/ContactApp";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactsApp />
    </QueryClientProvider>
  );
}
