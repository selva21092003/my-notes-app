import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { NotesProvider } from "./context/notes-context.tsx";
import { ToastProvider } from "./context/toast-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <NotesProvider>
          <App />
        </NotesProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>
);
