import React from 'react'
import { useDeleteTask } from 'entities/todo-task/hooks'
import BtnPrime from 'shared/UI/buttons/btn-prime'
import ITodo from 'shared/types/ITodo'
import BaseProps from 'shared/types/BaseProps';
import classNameCheck from 'shared/libs/helpers/classNameCheck';

interface Props extends BaseProps {
  task: ITodo,
  children?: React.ReactNode,
}


function DeleteTask({ task, className, children }: Props) {
  const deleteTask = useDeleteTask()
  return (
    <BtnPrime
      className={classNameCheck(className)}
      onClick={() => deleteTask(task)}
    >
      {children}
    </BtnPrime>
  )
}

export default DeleteTask