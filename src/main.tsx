import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./components/GlobalContext/GlobalProvider.tsx";

import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </GlobalProvider>
  </StrictMode>
);
