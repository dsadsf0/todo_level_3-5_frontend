import React, { useState } from 'react'
import { useAppSelector } from 'app/hooks/useStore'
import TitlePrime from 'shared/UI/titles/title-prime'
import { selectTodos } from 'shared/store/todos'
import cl from './todoList.module.scss'
import LinkPrime from '../../shared/UI/links/link-prime';
import { useFilterSearchTasks } from 'entities/todo-task/hooks'
import { TaskFilter, filterOptions } from 'entities/todo-task/types/filter'
import SearchFilterTask from 'features/todo-task/search-filter-task'

const TodoTasks = () => {
  const todos = useAppSelector(selectTodos)
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState<TaskFilter>(filterOptions[0])

  const searchedFiltredTasks = useFilterSearchTasks(todos, filter, searchQuery)

  if (!todos.length) return(
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
          searchedFiltredTasks.map(todo => 
            <LinkPrime
              to={`/task/${todo.id}`} 
              className={cl.list__link}
              key={todo.id}
            >
              {todo.title}
            </LinkPrime>
          )
        }
      </div>
    </div>
  )
}

export default TodoTasks