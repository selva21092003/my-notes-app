import { useEffect, useState } from "react";
import { useNotes, type NotesContextType } from "../../context/notes-context";
import type { NotesType } from "../home/home.types";
import Card from "../../components/card/card";

const Archived = () => {
  const {
    state,
    handleNotesPinned,
    handleNotesDelete,
    handleNotesArchived,
  }: NotesContextType = useNotes();
  const [archiveArray, setArchiveArray] = useState<NotesType[]>([]);
  useEffect(() => {
    setArchiveArray(state.filter((note) => note.isArchived && !note.isDeleted));
  }, [state]);

  return (
    <div className="p-3">
      <h1 className="text-xl font-bold">Archived Notes</h1>
      <div className="ps-3 pt-2 flex gap-5 flex-wrap">
        {archiveArray.length == 0 ? (
          <div className="flex justify-center w-full text-gray-500">
            <h1>No notes available please add archive</h1>
          </div>
        ) : (
          archiveArray.map((note) => (
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
  );
};

export default Archived;
