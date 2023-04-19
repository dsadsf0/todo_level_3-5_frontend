import React from 'react'
import { useAppSelector } from 'app/hooks/useStore'
import TitlePrime from 'shared/UI/titles/title-prime'
import { selectTodos } from 'shared/store/todos/todoSlice'
import cl from './todoList.module.scss'
import LinkPrime from './../../shared/UI/links/link-prime/LinkPrime';

const TodoList = () => {
  const todos = useAppSelector(selectTodos)
  return (
    <div className = {cl.list}>
      <TitlePrime className={cl.list__title}>Todo List</TitlePrime>
      <div className={cl.list__content}>
        {
          todos.map(todo => 
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

export default TodoList