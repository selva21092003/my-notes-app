import { LuPin } from "react-icons/lu";
import type { CardProps } from "./card.types";
import IconButton from "../icon-button/icon-button";
import { IoArchiveOutline, IoTrashBinOutline } from "react-icons/io5";
import { MdPushPin } from "react-icons/md";
import { HiArchiveBoxArrowDown, HiArchiveBoxXMark } from "react-icons/hi2";

const Card = ({
  id,
  title,
  description,
  handleNotesPinned,
  handleNotesArchived,
  handleNotesDelete,
  isPinned,
  isArchived,
  isDeleted,
}: CardProps) => {
  return (
    <div className="bg-sky-100 px-4 py-2 flex flex-col w-72 rounded">
      <div className="flex justify-between items-start mb-2 gap-2">
        {/* Title */}
        <span className="text-xl font-semibold wrap-break-word whitespace-normal">
          {title}
        </span>
        <IconButton onClick={() => handleNotesPinned(id)}>
          {isPinned ? (
            <MdPushPin className="h-5 w-5" />
          ) : (
            <LuPin className="h-5 w-5" />
          )}
        </IconButton>
      </div>

      <hr />

      <div className="mt-2 flex justify-between items-start gap-2">
        <span className="wrap-break-word whitespace-normal">{description}</span>
      </div>

      <div className="flex justify-end">
        <IconButton onClick={() => handleNotesArchived(id)}>
          {isArchived ? (
            <HiArchiveBoxArrowDown className="h-5 w-5" />
          ) : (
            <IoArchiveOutline className="h-5 w-5" />
          )}
        </IconButton>
        <IconButton onClick={() => handleNotesDelete(id)}>
          {isDeleted ? (
            <HiArchiveBoxXMark className="h-5 w-5" />
          ) : (
            <IoTrashBinOutline className="h-5 w-5" />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Card;
