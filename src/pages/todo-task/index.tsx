import React, { useEffect, useState } from 'react'
import cl from './todoTask.module.scss'
import { useParams } from 'react-router-dom'
import TaskCard from 'widgets/task/task-card'
import ITask from 'shared/types/ITask';
import useFetching from 'shared/hooks/fetching';
import TaskService from 'entities/todo-task/api';
import Loader from 'shared/UI/loader';

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