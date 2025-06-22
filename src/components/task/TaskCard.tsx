import { Task } from "@/lib/task";
import { Trash, CheckCircle, Circle, Pencil } from "lucide-react";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
}

export function TaskCard({ task, onDelete, onToggle, onEdit }: Props) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm space-y-2 relative group">
      <div className="flex items-center justify-between">
        <h3
          className={`font-semibold ${
            task.isCompleted ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h3>

        <div className="flex items-center gap-2">
          {/* Toggle Done */}
          <button onClick={() => onToggle(task.id)}>
            {task.isCompleted ? (
              <CheckCircle className="text-green-500 w-5 h-5" />
            ) : (
              <Circle className="text-yellow-500 w-5 h-5" />
            )}
          </button>

          {/* Delete button for mobile: always visible */}
          <button onClick={() => onDelete(task.id)} className="block lg:hidden">
            <Trash className="text-red-500 w-5 h-5" />
          </button>
          {/* Tombol edit */}
          <button onClick={() => onEdit(task)} className="block">
            <Pencil className="text-blue-500 w-5 h-5" />
          </button>

          {/* Delete button for desktop: only on hover */}
          <button onClick={() => onDelete(task.id)} className="hidden lg:block">
            <Trash className="text-red-500 w-5 h-5 opacity-0 group-hover:opacity-100 transition" />
          </button>
        </div>
      </div>
      {task.description && (
        <p className="text-sm text-gray-600">{task.description}</p>
      )}
      <p className="text-xs text-gray-400">Deadline: {task.dueDate}</p>
    </div>
  );
}
