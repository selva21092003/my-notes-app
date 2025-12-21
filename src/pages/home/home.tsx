import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Card from "../../components/card/card";
import { useNotes, type NotesContextType } from "../../context/notes-context";
import { useToast } from "../../context/toast-context";

export type Notes = {
  title: string;
  description: string;
};

const Home = () => {
  const [notes, setNotes] = useState<Notes>({
    title: "",
    description: "",
  });
  const { state, notesDispatch }: NotesContextType = useNotes();
  const { showToast } = useToast();

  const handleNotes = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };

  const handleNotesAdd = () => {
    showToast("notes added successfully", "success");
    notesDispatch({ type: "ADD_NOTE", payload: notes });
    setNotes({
      title: "",
      description: "",
    });
  };

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
    <div>
      <div className="flex justify-center items-center min-h-56">
        <div className="relative flex flex-col rounded bg-sky-100 px-3 py-2 border-collapse min-w-xl">
          <input
            onChange={(e) => handleNotes(e)}
            value={notes.title}
            name="title"
            type="text"
            placeholder="Enter Title"
            className="border-2 p-2 border-b-0 border-gray-800 outline-none rounded"
          />
          <textarea
            onChange={(e) => handleNotes(e)}
            value={notes.description}
            name="description"
            placeholder="Enter Description"
            className="border-2 p-2 border-t-0 outline-none border-gray-800 rounded"
            rows={5}
          />
          <button
            disabled={notes.title === "" || notes.description === ""}
            onClick={() => handleNotesAdd()}
            className="absolute right-3.5 bottom-2.5 cursor-pointer bg-emerald-600 text-amber-100 rounded px-4 py-2 disabled:cursor-not-allowed disabled:bg-zinc-200"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="">
        <div className="p-5 flex gap-5 flex-wrap">
          {state.length == 0 ? (
            <div className="flex justify-center w-full text-gray-500">
              <h1>No notes available please add</h1>
            </div>
          ) : (
            state.map((note) => (
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
    </div>
  );
};

export default Home;
