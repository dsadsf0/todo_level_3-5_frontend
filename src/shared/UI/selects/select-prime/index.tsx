import React, { useState } from 'react'
import cl from './selectPrime.module.scss'
import BaseProps from 'shared/types/BaseProps'
import classNameCheck from 'shared/libs/helpers/classNameCheck';

interface Props extends BaseProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  options: readonly {value: number, name: string}[],
  name: string,
  selected: string
}

const SelectPrime = ({ onChange, className, options, name, selected }: Props) => {
  const [isActive, setIsActive] = useState(false)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    setIsActive(false)
  }

  return (
    <div
      className={classNameCheck(cl.select, className, isActive ? cl._active : '' )}
      onClick={() => setIsActive(prev => !prev)}
    >
      <span>{selected}</span>
      <div className={cl.select__wrapper}>
        {
          options.map(filter =>
            <label 
              className={cl.select__option}
              key={filter.value}
            >
              {filter.name}
              <input
                type='radio'
                name={name}
                value={filter.value}
                onChange={e => onChangeHandler(e)}
              />
            </label>
          )
        }
      </div>
    </div>
  )
}

export default SelectPrime