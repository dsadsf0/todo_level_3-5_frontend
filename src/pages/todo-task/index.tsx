import React from 'react'
import cl from './todoTask.module.scss'
import { useAppSelector} from 'app/hooks/useStore'
import { selectTodos } from '../../shared/store/todos';
import { useParams } from 'react-router-dom'
import TaskCard from 'widgets/task/task-card'

const TodoTask = () => {
  const taskId = +(useParams().id || 1)
  const task = useAppSelector(selectTodos).find(todo => todo.id === taskId)

  if (!task) return null

  return (
    <TaskCard
      className={cl['task-card']}
      task={task}
    />
  )
}

export default TodoTask