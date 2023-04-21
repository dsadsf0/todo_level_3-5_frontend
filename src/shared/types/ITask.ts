export default interface ITask {
  id: number,
  title: string,
  description: string,
  due_date: string,
  created_at: string | null,
  completed_at: string | null,
  updated_at: string | null,
  deleted_at: string | null,
}