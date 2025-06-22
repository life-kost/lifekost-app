"use client"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Task } from "@/lib/task"
import { v4 as uuidv4 } from "uuid"

interface Props {
  addTask: (task: Task) => void
}

export function AddTaskDialog({ addTask }: Props) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [dueDate, setDueDate] = useState("")

  const handleSubmit = () => {
    if (!title || !dueDate) return

    addTask({
      id: uuidv4(),
      title,
      description,
      dueDate,
      isCompleted: false,
    })

    setOpen(false)
    setTitle("")
    setDescription("")
    setDueDate("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Tambah Tugas</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Tugas Baru</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Input placeholder="Judul tugas" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Textarea placeholder="Deskripsi (opsional)" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Simpan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
