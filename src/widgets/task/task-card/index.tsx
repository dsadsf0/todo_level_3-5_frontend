import React, { useEffect, useState } from 'react'
import cl from './taskCard.module.scss'
import LinkPrimeBtn from 'shared/UI/links/link-prime-btn'
import ParagraphPrime from 'shared/UI/paragraphs/paragraph-prime'
import TitlePrime from 'shared/UI/titles/title-prime'
import BaseProps from 'shared/types/BaseProps'
import ITask from 'shared/types/ITask'
import classNameCheck from 'shared/libs/helpers/classNameCheck'
import DeleteTask from 'features/todo-task/delete-task'
import ToggleTask from 'features/todo-task/toggle-task-complete'
import TaskService from 'entities/todo-task/api'
import useFetching from 'shared/hooks/fetching'
import Loader from 'shared/UI/loader'
import isOverdue from 'shared/libs/helpers/isOverdue'
import { getTextDate } from 'shared/libs/helpers/datesHelp'

interface Props extends BaseProps {
  task_id: string
}

const TaskCard = ({ className, task_id }: Props) => {

  const [task, setTask] = useState<ITask>({} as ITask)

  const [fetchTask, isTaskLoading, fetchTaskError] = useFetching(async () => {
    const fetchedTask = await TaskService.getTaskById(task_id);
    setTask(fetchedTask)
  })

  useEffect(() => {
    fetchTask();
  }, []);

  if (isTaskLoading) return (<Loader />)

  if (!task) return null
  

  return (
    <div className={classNameCheck(cl.task, className)}>
      <TitlePrime className={cl.task__title}>{task.title}</TitlePrime>
      <div className={cl.task__content}>
        {
          task.description?.split('\n').map( (line, index) => 
            <ParagraphPrime
              key={line + index}
            >
              {line}
            </ParagraphPrime>
          )
        }
      </div>
      <ParagraphPrime className={`${cl.task__due} ${isOverdue(task.due_date, task.completed_at) ? cl.task__due_overdue : ''}`}>
        Due to: {getTextDate(task.due_date)}
      </ParagraphPrime>
      
      <div className={cl.task__footer}>
        <LinkPrimeBtn to={`/edit/${task.id}`}>Edit</LinkPrimeBtn>
        <ToggleTask 
          className={cl.task__complete} 
          task={task}
          setTask={setTask}
        >
          {task.completed_at ? "uncomplete" : "complete"}
        </ToggleTask>
        <DeleteTask task={task}>Delete</DeleteTask>
      </div>
    </div>
  )
}

export default TaskCard