const isOverdue = (due_date: string, completed_date: string | null) => {
  if (completed_date) {
    return (new Date(completed_date) > new Date(due_date))
  }
  return (new Date(Date.now()) > new Date(due_date))
}

export default isOverdue