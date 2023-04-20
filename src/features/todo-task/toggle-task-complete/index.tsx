import React from 'react'
import { useToggleTaskComplete } from 'entities/todo-task/hooks'
import BtnPrime from 'shared/UI/buttons/btn-prime'
import ITodo from 'shared/types/ITodo'
import { BtnProps } from 'shared/types/BaseProps';
import classNameCheck from 'shared/libs/helpers/classNameCheck';

interface Props extends BtnProps {
  task: ITodo,
}

function ToggleTask({ task, className, children }: Props) {
  const toggleTask = useToggleTaskComplete()
  return (
    <BtnPrime
      className={classNameCheck(className)}
      onClick={() => toggleTask(task)}
    >
      {children}
    </BtnPrime>
  )
}

export default ToggleTask