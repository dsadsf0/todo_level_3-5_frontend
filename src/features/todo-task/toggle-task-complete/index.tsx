import React from 'react'
import { useEditTask } from 'entities/todo-task/hooks'
import BtnPrime from 'shared/UI/buttons/btn-prime'
import ITask from 'shared/types/ITask'
import { BtnProps } from 'shared/types/BaseProps';
import classNameCheck from 'shared/libs/helpers/classNameCheck';
import Loader from 'shared/UI/loader';
import TaskService from 'entities/todo-task/api';
import useFetching from 'shared/hooks/fetching';
import getNowDate from 'shared/libs/helpers/datesHelp';

interface Props extends BtnProps {
  task: ITask,
  setTask: (task: ITask) => void,
}

function ToggleTask({ task, className, children, setTask }: Props) {
  const [fetchTaskEditing, isTaskEditing, fetchTaskEditingError] = useFetching(async () => {
    const completed_at = task.completed_at ? null : getNowDate()
    const editedTask = await TaskService.editTaskById(task.id, { ...task, completed_at });
    setTask(editedTask)
    editTask(editedTask)
  })

  const editTask = useEditTask()

  const toggleTaskHandler = async () => {
    await fetchTaskEditing()
  }

  if (isTaskEditing) return (<Loader />)

  return (
    <BtnPrime
      className={classNameCheck(className)}
      onClick={toggleTaskHandler}
    >
      {children}
    </BtnPrime>
  )
}

export default ToggleTask