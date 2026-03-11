import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import WhatsAppChat from "./components/WhatsAppChat";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <WhatsAppChat />
    </>
  );
}
