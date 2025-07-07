import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </AuthProvider>
);
