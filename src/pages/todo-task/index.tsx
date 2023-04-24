import React from 'react'
import cl from './todoTask.module.scss'
import { useParams } from 'react-router-dom'
import TaskCard from 'widgets/task/task-card'
const TodoTask = () => {
  const taskId = useParams().id || '1'

  return (
    <TaskCard
      className={cl['task-card']}
      task_id={taskId}
    />
  )
}

export default TodoTask