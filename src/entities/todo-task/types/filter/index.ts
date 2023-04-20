export const filterOptions = [
  {
    value: 0,
    name: 'All'
  },
  {
    value: 1,
    name: 'Uncompleted'
  },
  {
    value: 2,
    name: 'Completed'
  },
] as const

export type TasksFilterOptions = typeof filterOptions
export type TaskFilter = TasksFilterOptions[number] 