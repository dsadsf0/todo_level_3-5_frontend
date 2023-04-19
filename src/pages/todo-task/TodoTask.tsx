import React from 'react'
import cl from './todoTask.module.scss'
import TitlePrime from 'shared/UI/titles/title-prime'
import ParagraphPrime from 'shared/UI/paragraphs/paragraph-prime'

const TodoTask = () => {
  return (
    <div>
      <TitlePrime className={cl.title}>Voluptate quod iste est.</TitlePrime>
      <ParagraphPrime className={cl.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi necessitatibus neque similique saepe harum cum, dolorum doloremque atque adipisci! Iure, earum. Quis quod temporibus, neque recusandae laborum officiis rerum!</ParagraphPrime>
    </div>
  )
}

export default TodoTask