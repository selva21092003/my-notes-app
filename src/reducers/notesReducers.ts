import type { Notes } from "../pages/home/home";
import type { NotesType } from "../pages/home/home.types";
import { v4 as uuid } from "uuid";

export const notesReducers = (
  state: NotesType[],
  { type, payload }: { type: string; payload: Notes | string }
): NotesType[] => {
  switch (type) {
    case "ADD_NOTE":
      if (typeof payload === "string") return state;
      return [
        ...state,
        {
          id: uuid(),
          isPinned: false,
          isArchived: false,
          isDeleted: false,
          ...payload,
        },
      ];
    case "PIN_NOTE":
      if (typeof payload === "string") {
        return state.map((note) =>
          note.id == payload ? { ...note, isPinned: !note.isPinned } : note
        );
      }
      return state;
    
    case "ARCHIVE_NOTE":
      if(typeof payload=== 'string'){
        return state.map((note)=>note.id==payload?{...note,isArchived:!note.isArchived}:note);
      }
      return state;

    case "DELETE_NOTE":
      if(typeof payload=== 'string'){
        return state.map((note)=>note.id==payload?{...note,isDeleted:!note.isDeleted}:note);
      }
      return state;
    default:
      return state;
  }
};
