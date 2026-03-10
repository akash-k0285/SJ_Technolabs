import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Technologies } from "./pages/Technologies";
import { CloudAdobe } from "./pages/CloudAdobe";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "industries", Component: Industries },
      { path: "technologies", Component: Technologies },
      { path: "cloud-adobe-solutions", Component: CloudAdobe },
      { path: "contact", Component: Contact },
    ],
  },
]);