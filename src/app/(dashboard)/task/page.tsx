"use client"

import { useState } from "react"
import { Task } from "@/lib/task"
import { TaskList } from "@/components/task/TaskList"
import { AddTaskDialog } from "@/components/task/AddTaskDialog"

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Submit Tugas Pancasila",
      description: "Kumpulkan sebelum jam 23.59",
      dueDate: "2025-06-21",
      isCompleted: false,
    },
    {
      id: "2",
      title: "Ujian Matematika",
      description: "Bab 1-5, jangan lupa kalkulator",
      dueDate: "2025-06-24",
      isCompleted: true,
    },
    {
      id: "3",
      title: "Revisi Makalah",
      description: "Perbaiki catatan dari dosen",
      dueDate: "2025-06-28",
      isCompleted: false,
    },
  ])

  const [filter, setFilter] = useState<"all" | "done" | "undone">("all")

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isCompleted
    if (filter === "undone") return !task.isCompleted
    return true
  })

  const deadlineTerdekat = [...tasks]
    .filter((t) => !t.isCompleted)
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())[0]?.dueDate

  return (
    <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">Tugasin 🎓</h2>
      <AddTaskDialog addTask={(task) => setTasks([...tasks, task])} />
    </div>
      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-md bg-orange-50 border text-sm">
          <p className="text-gray-600">Total Tugas</p>
          <p className="text-2xl font-bold">{tasks.length}</p>
        </div>
        <div className="p-4 rounded-md bg-green-50 border text-sm">
          <p className="text-gray-600">Selesai</p>
          <p className="text-2xl font-bold">{tasks.filter((t) => t.isCompleted).length}</p>
        </div>
        <div className="p-4 rounded-md bg-yellow-50 border text-sm col-span-2 md:col-span-1">
          <p className="text-gray-600">Deadline Terdekat</p>
          <p className="text-md">{deadlineTerdekat ?? "-"}</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mt-2">
        {["all", "undone", "done"].map((f) => (
          <button
            key={f}
            className={`px-4 py-1 rounded-full text-sm ${
              filter === f ? "bg-black text-white" : "bg-gray-100"
            }`}
            onClick={() => setFilter(f as typeof filter)}
          >
            {f === "all" ? "Semua" : f === "undone" ? "Belum Selesai" : "Selesai"}
          </button>
        ))}
      </div>

      {/* Task List */}
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  )
}
