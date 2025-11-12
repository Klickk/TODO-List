import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

interface ToDoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export const ToDoItem = (props: ToDoItemProps) => {
  const [id] = useState(props.id);
  const [text, setText] = useState(props.text);
  const [completed, setCompleted] = useState(props.completed);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(props.text);

  // keep local state in sync if parent updates props
  useEffect(() => setText(props.text), [props.text]);
  useEffect(() => setCompleted(props.completed), [props.completed]);

  const startEdit = () => {
    setDraft(text);
    setEditing(true);
  };

  const saveEdit = () => {
    const next = draft.trim();
    if (next.length === 0) {
      setDraft(text);
      setEditing(false);
      return;
    }
    setText(next);
    props.onEdit(id, next);
    setEditing(false);
  };

  const cancelEdit = () => {
    setDraft(text);
    setEditing(false);
  };

  return (
    <div
      className="group flex items-center gap-3 rounded-xl bg-white/70 p-3
                 ring-1 ring-black/5 hover:bg-white hover:shadow-sm transition"
    >
      <Checkbox
        color="primary"
        checked={completed}
        onChange={() => {
          props.onToggle(id);
          setCompleted((c) => !c);
        }}
      />

      <div className="min-w-0 flex-1">
        {editing ? (
          <input
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={saveEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveEdit();
              if (e.key === "Escape") cancelEdit();
            }}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2
                       outline-none placeholder:text-gray-400
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            placeholder="Edit todo…"
          />
        ) : (
          <span
            className={`block truncate ${
              completed ? "text-gray-400 line-through" : "text-gray-900"
            }`}
          >
            {text}
          </span>
        )}
      </div>

      <div className="ml-2 flex items-center gap-2">
        {editing ? (
          <>
            <button
              type="button"
              onClick={saveEdit}
              className="inline-flex items-center gap-1 rounded-lg px-2 py-1
                         text-green-700 hover:bg-green-50 focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-green-500"
              aria-label="Save"
              title="Save"
            >
              <SaveIcon fontSize="small" />
            </button>
            <button
              type="button"
              onClick={cancelEdit}
              className="inline-flex items-center gap-1 rounded-lg px-2 py-1
                         text-gray-600 hover:bg-gray-50 focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-gray-400"
              aria-label="Cancel"
              title="Cancel"
            >
              <CloseIcon fontSize="small" />
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={startEdit}
              className="hidden rounded-lg px-2 py-1 text-gray-500 hover:bg-gray-50
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                         group-hover:inline-flex"
              aria-label="Edit"
              title="Edit"
            >
              <EditIcon fontSize="small" />
            </button>
            <button
              type="button"
              onClick={() => props.onDelete(id)}
              className="hidden rounded-lg px-2 py-1 text-gray-400 hover:bg-red-50 hover:text-red-600
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500
                         group-hover:inline-flex"
              aria-label="Delete"
              title="Delete"
            >
              <DeleteIcon fontSize="small" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
