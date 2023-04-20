import React, { useState } from 'react'
import BtnPrime from 'shared/UI/buttons/btn-prime'
import InputPrime from 'shared/UI/inputs/input-prime'
import TextareaPrime from 'shared/UI/text-areas/textarea-prime'
import classNameCheck from 'shared/libs/helpers/classNameCheck'
import BaseProps from 'shared/types/BaseProps'
import cl from './editTaskForm.module.scss'
import { useEditTask } from 'entities/todo-task/hooks'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'app/hooks/useStore'
import { selectTodos } from 'shared/store/todos'

interface Props extends BaseProps { }

const EditTaskForm = ({ className }: Props) => {

  const taskId = +(useParams().id || 1)
  const task = useAppSelector(selectTodos).find(todo => todo.id === taskId)

  const [title, setTitle] = useState(task?.title || '')
  const [description, setDesctiption] = useState(task?.description || '')

  const editTask = useEditTask()
  
  
  if (!task) return null
  

  return (
    <form className={classNameCheck(cl.form, className)}>
      <InputPrime
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <TextareaPrime
        value={description}
        onChange={(e) => setDesctiption(e.target.value)}
      />
      <BtnPrime
        className={cl.form__btn}
        onClick={() => editTask({ title, description, id: task.id, completed: task.completed })}
      >
        Save
      </BtnPrime>
    </form>
  )
}

export default EditTaskForm