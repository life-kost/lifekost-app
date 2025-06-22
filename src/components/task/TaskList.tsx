// /components/task/TaskList.tsx

import { Task } from "@/lib/task"
import { TaskCard } from "./TaskCard"
import { EditTaskDialog } from "./EditTaskDialog"
import { useState } from "react"

interface Props {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
}

export function TaskList({ tasks, setTasks }: Props) {
    const [editingTask, setEditingTask] = useState<Task | null>(null)
  
    const handleDelete = (id: string) => {
      setTasks(tasks.filter((t) => t.id !== id))
    }
  
    const handleToggle = (id: string) => {
      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
      )
    }
  
    const handleUpdate = (updated: Task) => {
      setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)))
    }
  
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onToggle={handleToggle}
              onEdit={setEditingTask}
            />
          ))}
        </div>
  
        <EditTaskDialog
          task={editingTask}
          onUpdate={handleUpdate}
          onClose={() => setEditingTask(null)}
        />
      </>
    )
  }
