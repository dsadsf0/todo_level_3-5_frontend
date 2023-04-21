import React, { useEffect, useState } from 'react'
import BtnPrime from 'shared/UI/buttons/btn-prime'
import InputPrime from 'shared/UI/inputs/input-prime'
import TextareaPrime from 'shared/UI/text-areas/textarea-prime'
import classNameCheck from 'shared/libs/helpers/classNameCheck'
import BaseProps from 'shared/types/BaseProps'
import cl from './editTaskForm.module.scss'
import { useEditTask } from 'entities/todo-task/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from 'shared/UI/loader'
import ITask from 'shared/types/ITask'
import useFetching from 'shared/hooks/fetching'
import TaskService from 'entities/todo-task/api'
import { getInputDate } from 'shared/libs/helpers/datesHelp'

interface Props extends BaseProps { }

const EditTaskForm = ({ className }: Props) => {
  const taskId = useParams().id || '1'
  const navigate = useNavigate();

  const [task, setTask] = useState<ITask>({} as ITask)

  const [fetchTask, isTaskLoading, fetchTaskError] = useFetching(async () => {
    const fetchedTask = await TaskService.getTaskById(taskId);
    setTask(fetchedTask)
    setTitle(fetchedTask.title)
    setDesctiption(fetchedTask.description)
    setDueDate(getInputDate(fetchedTask.due_date))
  })

  const [fetchTaskEditing, isTaskEditing, fetchTaskEditingError] = useFetching(async () => {
    const fetchedTask = await TaskService.editTaskById(taskId, {...task, description, title, due_date: due_date});
    setTask(fetchedTask)
    editTask(fetchedTask)
  })

  const [title, setTitle] = useState('')
  const [description, setDesctiption] = useState('')
  const [due_date, setDueDate] = useState('')


  const editTask = useEditTask()
  
  const editTaskHandler = async () => {
    await fetchTaskEditing()
    navigate(`/task/${task.id}`)
  }

  useEffect(() => {
    fetchTask();
  }, []);
  
  if (isTaskLoading || isTaskEditing) return (<Loader />)

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
      <InputPrime
        type='datetime-local'
        value={due_date}
        onChange={(e) => {
          setDueDate(e.target.value)
          console.log(e.target.value);
        }}
      />
      <BtnPrime
        className={cl.form__btn}
        onClick={editTaskHandler}
      >
        Save
      </BtnPrime>
    </form>
  )
}

export default EditTaskForm