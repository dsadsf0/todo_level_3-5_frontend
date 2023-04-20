import React from 'react'
import InputPrime from 'shared/UI/inputs/input-prime'
import SelectPrime from 'shared/UI/selects/select-prime'
import BaseProps from 'shared/types/BaseProps'
import cl from './searchFilterTask.module.scss'
import classNameCheck from 'shared/libs/helpers/classNameCheck'
import { TaskFilter } from 'entities/todo-task/types/filter'

interface Props extends BaseProps {
  searchQuery: string,
  filterOptions: readonly { value:number, name:string }[],
  setSearchQuery: (value: string) => void,
  setFilter: (value: TaskFilter) => void,
  currentFilter: TaskFilter,
}

const SearchFilterTask = ({ setFilter, filterOptions, searchQuery, setSearchQuery, className, currentFilter}: Props) => {

  const changeFilter = (value: number) => {
    const newFilter = filterOptions.find(filter => filter.value === value) as TaskFilter
    setFilter(newFilter)
  }

  return (
    <div className={classNameCheck(cl.options, className)}>
      <InputPrime
        className={cl.options__search}
        type='text'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Search task'
      />
      <SelectPrime
        onChange={e => changeFilter(+e.target.value)}
        options={filterOptions}
        name='task-filter'
        selected={currentFilter.name}
      />
    </div>
  )
}

export default SearchFilterTask