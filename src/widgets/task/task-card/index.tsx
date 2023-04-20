import React from 'react'
import cl from './taskCard.module.scss'
import LinkPrimeBtn from 'shared/UI/links/link-prime-btn'
import ParagraphPrime from 'shared/UI/paragraphs/paragraph-prime'
import TitlePrime from 'shared/UI/titles/title-prime'
import BaseProps from 'shared/types/BaseProps'
import ITodo from 'shared/types/ITodo'
import classNameCheck from 'shared/libs/helpers/classNameCheck'
import DeleteTask from 'features/todo-task/delete-task'
import ToggleTask from 'features/todo-task/toggle-task-complete'

interface Props extends BaseProps {
  task: ITodo
}

const TaskCard = ({ className, task }: Props) => {
  return (
    <div className={classNameCheck(cl.task, className)}>
      <TitlePrime className={cl.task__title}>{task.title}</TitlePrime>
      <ParagraphPrime className={cl.task__text}>{task.description}</ParagraphPrime>
      <div className={cl.task__footer}>
        <LinkPrimeBtn to={`/edit/${task.id}`}>Edit</LinkPrimeBtn>
        <ToggleTask className={cl.task__complete} task={task}>{task.completed ? "uncomplete" : "complete"}</ToggleTask>
        <DeleteTask task={task}>Delete</DeleteTask>
      </div>
    </div>
  )
}

export default TaskCard