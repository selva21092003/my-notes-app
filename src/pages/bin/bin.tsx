import { useEffect, useState } from "react";
import { useNotes, type NotesContextType } from "../../context/notes-context";
import type { NotesType } from "../home/home.types";
import Card from "../../components/card/card";

const Bin = () => {
  const {
    state,
    handleNotesPinned,
    handleNotesDelete,
    handleNotesArchived,
  }: NotesContextType = useNotes();
  const [deletedNotes, setdeletedNotes] = useState<NotesType[]>([]);
  useEffect(() => {
    setdeletedNotes(state.filter((note) => note.isDeleted));
  }, [state]);
  return (
    <div className="p-3">
      <h1 className="text-xl font-bold">Binned Notes</h1>
      <div className="ps-3 pt-2 flex gap-5 flex-wrap">
        {deletedNotes.length == 0 ? (
          <div className="flex justify-center w-full text-gray-500">
            <h1>No notes available please add to bin</h1>
          </div>
        ) : (
          deletedNotes.map((note) => (
            <Card
              id={note.id}
              key={note.id}
              title={note.title}
              description={note.description}
              handleNotesPinned={handleNotesPinned}
              handleNotesDelete={handleNotesDelete}
              handleNotesArchived={handleNotesArchived}
              isPinned={note.isPinned}
              isArchived={note.isArchived}
              isDeleted={note.isDeleted}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Bin