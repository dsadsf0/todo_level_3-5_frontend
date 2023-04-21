import React from 'react'
import { useDeleteTask } from 'entities/todo-task/hooks'
import BtnPrime from 'shared/UI/buttons/btn-prime'
import ITask from 'shared/types/ITask'
import BaseProps from 'shared/types/BaseProps';
import classNameCheck from 'shared/libs/helpers/classNameCheck';
import useFetching from 'shared/hooks/fetching';
import TaskService from 'entities/todo-task/api';
import { useNavigate } from 'react-router-dom';
import Loader from 'shared/UI/loader';

interface Props extends BaseProps {
  task: ITask,
  children?: React.ReactNode,
}


function DeleteTask({ task, className, children }: Props) {

  const navigate = useNavigate()

  const [fetchDeleteTask, isTaskDeleting, fetchTaskDeleteError] = useFetching(async () => {
    await TaskService.deleteTaskById(task.id);
  })
  const deleteTask = useDeleteTask()

  const deleteTaskHandler = async () => {
    await fetchDeleteTask()
    deleteTask(task.id)
    navigate('/')
  }

  if (isTaskDeleting) return (<Loader />)

  return (
    <BtnPrime
      className={classNameCheck(className)}
      onClick={deleteTaskHandler}
    >
      {children}
    </BtnPrime>
  )
}

export default DeleteTask