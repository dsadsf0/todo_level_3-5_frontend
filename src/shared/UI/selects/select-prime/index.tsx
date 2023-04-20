import React, { useState } from 'react'
import cl from './selectPrime.module.scss'
import BaseProps from 'shared/types/BaseProps'
import classNameCheck from 'shared/libs/helpers/classNameCheck';

interface Props extends BaseProps {
  onChange: (e: number) => void,
  options: readonly {value: number, name: string}[],
  name: string,
  selected: string
}

const SelectPrime = ({ onChange, className, options, name, selected }: Props) => {
  const [isActive, setIsActive] = useState(false)
  
  const toggleHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActive(prev => !prev)
  }

  const closeHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActive(false)
  }
  
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onChange(+e.target.value)
  }


  return (
    <div
      className={classNameCheck(cl.select, className, isActive ? cl._active : '' )}
      onClick={toggleHandler}
    >
      <span>{selected}</span>
      <div className={cl.select__wrapper}>
        {
          options.map(filter =>
            <label 
              className={cl.select__option}
              key={filter.value}
              onClick={closeHandler}
            >
              {filter.name}
              <input
                type='radio'
                name={name}
                value={filter.value}
                onChange={onChangeHandler}
              />
            </label>
          )
        }
      </div>
    </div>
  )
}

export default SelectPrime