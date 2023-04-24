import React, { useState } from 'react'
import BtnPrime from 'shared/UI/buttons/btn-prime'
import InputPrime from 'shared/UI/inputs/input-prime'
import TextareaPrime from 'shared/UI/text-areas/textarea-prime'
import classNameCheck from 'shared/libs/helpers/classNameCheck'
import BaseProps from 'shared/types/BaseProps'
import cl from './createTaskForm.module.scss'
import { useCreateTask } from 'entities/todo-task/hooks'
import useFetching from 'shared/hooks/fetching'
import TaskService from 'entities/todo-task/api'
import { useNavigate } from 'react-router-dom'
import Loader from 'shared/UI/loader'

interface Props extends BaseProps {}

const CreateTaskForm = ({className}: Props) => {

  const navigate = useNavigate()

  const [fetchTaskCreating, isTaskCreating, fetchTaskCreatigError] = useFetching(async () => {
    const createdTask = await TaskService.createTask({ due_date, description, title });
    createTask(createdTask)
  })

  const createTask = useCreateTask()

  const [title, setTitle] = useState('')
  const [description, setDesctiption] = useState('')
  const [due_date, setDueDate] = useState('')
  const [titleErr, setTitleErr] = useState(false)
  const [descriptionErr, setDescriptionErr] = useState(false)
  const [dueDateErr, setDueDateErr] = useState(false)
  
  const createTaskHandler = async () => {
    if (!title) setTitleErr(true)
    else setTitleErr(false)

    if (!description) setDescriptionErr(true) 
    else setDescriptionErr(false)

    if (!due_date) setDueDateErr(true)
    else setDueDateErr(false)

    if (!title || !description || !due_date) return

    await fetchTaskCreating()
    navigate(`/`)
  }

  if (isTaskCreating) return (<Loader/>)  

  return (
    <form className={classNameCheck(cl.form, className)}>
      <InputPrime
        type="text"
        placeholder='Task title'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={titleErr ? cl._err : ''}
      />
      <TextareaPrime
        value={description}
        onChange={(e) => setDesctiption(e.target.value)}
        placeholder='Task description'
        className={descriptionErr ? cl._err : ''}
      />
      <InputPrime
        type='datetime-local'
        value={due_date}
        onChange={(e) => setDueDate(e.target.value)}
        className={dueDateErr ? cl._err : ''}
      />
      <BtnPrime 
        className={cl.form__btn}
        onClick={createTaskHandler}
      >
        Create
      </BtnPrime>
    </form>
  )
}

export default CreateTaskForm