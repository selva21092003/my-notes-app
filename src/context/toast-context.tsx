import { createContext, useContext, useState, type ReactNode } from "react";
import { v4 as uuid } from "uuid";

type Toast = {
  id: string;
  message: string;
  type: "success" | "error" | "info";
};

type ToastContextType = {
  toast: Toast[] | [];
  showToast: (message: string, type: "success" | "error" | "info") => void;
};

const ToastContex = createContext<ToastContextType | null>(null);

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<Toast[] | []>([]);
  const showToast = (message: string, type: "success" | "error" | "info") => {
    setToast((prev) => [...prev, { id: uuid(), message, type }]);
    setTimeout(() => {
      setToast((prev) => prev.slice(1));
    }, 3000);
  };
  return (
    <ToastContex.Provider value={{ toast, showToast }}>
      {children}
      <div>
        {toast.map((t) => (
          <div
            key={t.id}
            className={`fixed top-4 right-4 px-4 py-2 rounded-md text-white ${
              t.type === "success"
                ? "bg-green-500"
                : t.type === "error"
                ? "bg-red-500"
                : "bg-blue-500"
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContex.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContex);
  if (context == null) {
    throw new Error("useToast must be used within a ToastContextProvider");
  }
  return context;
};

export { ToastProvider, useToast };
