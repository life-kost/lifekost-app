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
import { Task } from "@/lib/task"
import { useState } from "react"

interface Props {
  task: Task | null
  onUpdate: (updated: Task) => void
  onClose: () => void
}

export function EditTaskDialog({ task, onUpdate, onClose }: Props) {
  const [title, setTitle] = useState(task?.title ?? "")
  const [description, setDescription] = useState(task?.description ?? "")
  const [dueDate, setDueDate] = useState(task?.dueDate ?? "")

  if (!task) return null

  const handleSubmit = () => {
    if (!title || !dueDate) return

    onUpdate({
      ...task,
      title,
      description,
      dueDate,
    })

    onClose()
  }

  return (
    <Dialog open={!!task} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Tugas</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Simpan Perubahan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
