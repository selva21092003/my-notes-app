export type CardProps = {
  id: string;
  title: String;
  description: String;
  handleNotesPinned: (id: string) => void;
  handleNotesDelete: (id: string) => void;
  handleNotesArchived: (id: string) => void;
  isPinned: boolean;
  isArchived: boolean;
  isDeleted: boolean;
};
