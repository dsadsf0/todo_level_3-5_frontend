import React, { useState } from 'react'
import { useAppSelector } from 'app/hooks/useStore'
import TitlePrime from 'shared/UI/titles/title-prime'
import { selectTasks } from 'shared/store/tasks'
import cl from './todoList.module.scss'
import LinkPrime from '../../shared/UI/links/link-prime';
import { useFilterSearchTasks } from 'entities/todo-task/hooks'
import { TaskFilter, filterOptions } from 'entities/todo-task/types/filter'
import SearchFilterTask from 'features/todo-task/search-filter-task'
import isOverdue from 'shared/libs/helpers/isOverdue'

const TodoTasks = () => {
  const tasks = useAppSelector(selectTasks)
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState<TaskFilter>(filterOptions[0])

  const searchedFiltredTasks = useFilterSearchTasks(tasks, filter, searchQuery)

  if (!tasks.length) return(
    <TitlePrime className={cl.list__title}>You haven't ToDo Tasks yet</TitlePrime>
  )

  return (
    <div className = {cl.list}>
      <TitlePrime className={cl.list__title}>ToDo Tasks</TitlePrime>
      <SearchFilterTask
        className={cl.list__options}
        setFilter={setFilter}
        filterOptions={filterOptions}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentFilter={filter}
      />
      <div className={cl.list__content}>
        {
          searchedFiltredTasks.map(task => 
            <LinkPrime
              to={`/task/${task.id}`} 
              className={`${cl.list__link} ${isOverdue(task.due_date) ? cl.list__link_overdue : ''}`}
              key={task.id}
            >
              {task.title}
            </LinkPrime>
          )
        }
      </div>
    </div>
  )
}

export default TodoTasks