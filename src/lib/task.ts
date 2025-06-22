
export interface Task {
    id: string
    title: string
    description?: string
    dueDate: string
    isCompleted: boolean
    category?: "Tugas Kuliah" | "Ujian" | "Deadline Lain"
  }
  