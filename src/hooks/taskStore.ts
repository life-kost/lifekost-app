import { create } from "zustand"
import { Task } from "@/lib/task"
import { v4 as uuidv4 } from "uuid"

interface TaskState {
  tasks: Task[]
  addTask: (task: Task) => void
  removeTask: (id: string) => void
  toggleTask: (id: string) => void
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [
    {
      id: uuidv4(),
      title: "Contoh tugas awal",
      description: "Ini adalah tugas dummy",
      dueDate: "2025-06-22",
      isCompleted: false,
    },
  ],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (id) => set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      ),
    })),
}))
