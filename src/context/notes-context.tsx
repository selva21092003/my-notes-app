import { createContext, useContext, useReducer, type ReactNode } from "react";
import { notesReducers } from "../reducers/notesReducers";
import type { NotesType } from "../pages/home/home.types";

export type NotesContextType = {
  state: NotesType[];
  notesDispatch: React.Dispatch<{
    type: string;
    payload: any;
  }>;
  handleNotesPinned: (id: string) => void;
  handleNotesDelete: (id: string) => void;
  handleNotesArchived: (id: string) => void;
};

export const NotesContext = createContext<NotesContextType | null>(null);

const NotesProvider = ({ children }: { children: ReactNode }) => {
  const initialState: NotesType[] = [];
  const [state, notesDispatch] = useReducer(notesReducers, initialState);
  const handleNotesPinned = (id: string) => {
    notesDispatch({ type: "PIN_NOTE", payload: id });
  };
  const handleNotesDelete = (id: string) => {
    notesDispatch({ type: "DELETE_NOTE", payload: id });
  };
  const handleNotesArchived = (id: string) => {
    notesDispatch({ type: "ARCHIVE_NOTE", payload: id });
  };
  return (
    <NotesContext.Provider
      value={{
        state,
        notesDispatch,
        handleNotesPinned,
        handleNotesDelete,
        handleNotesArchived,
      }}
    >
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
