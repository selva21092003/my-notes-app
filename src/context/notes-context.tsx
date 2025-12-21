import { createContext, useContext, useReducer, type ReactNode } from "react";
import { notesReducers } from "../reducers/notesReducers";
import type { NotesType } from "../pages/home/home.types";

export type NotesContextType = {
  state: NotesType[];
  notesDispatch: React.Dispatch<{
    type: string;
    payload: any;
  }>;
};

export const NotesContext = createContext<NotesContextType | null>(null);

const NotesProvider = ({ children }: { children: ReactNode }) => {
  const initialState: NotesType[] = [];
  const [state, notesDispatch] = useReducer(notesReducers, initialState);
  return (
    <NotesContext.Provider value={{ state, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

export { NotesProvider, useNotes };
