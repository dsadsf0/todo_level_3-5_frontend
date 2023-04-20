import React, { useState } from 'react'
import BtnPrime from 'shared/UI/buttons/btn-prime'
import InputPrime from 'shared/UI/inputs/input-prime'
import TextareaPrime from 'shared/UI/text-areas/textarea-prime'
import classNameCheck from 'shared/libs/helpers/classNameCheck'
import BaseProps from 'shared/types/BaseProps'
import cl from './createTaskForm.module.scss'
import { useCreateTask } from 'entities/todo-task/hooks'

interface Props extends BaseProps {}

const CreateTaskForm = ({className}: Props) => {

  const [title, setTitle] = useState('')
  const [description, setDesctiption] = useState('')

  const createTask = useCreateTask()

  return (
    <form className={classNameCheck(cl.form, className)}>
      <InputPrime
        type="text"
        placeholder='Task title'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <TextareaPrime
        value={description}
        onChange={(e) => setDesctiption(e.target.value)}
        placeholder='Task description'
      />
      <BtnPrime 
        className={cl.form__btn}
        onClick={() => createTask({ title, description })}
      >
        Create
      </BtnPrime>
    </form>
  )
}

export default CreateTaskForm