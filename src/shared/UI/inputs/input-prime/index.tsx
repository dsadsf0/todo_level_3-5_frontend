import React from 'react'
import BaseProps from 'shared/types/BaseProps'
import cl from './inputPrime.module.scss'
import classNameCheck from 'shared/libs/helpers/classNameCheck'

interface Props extends BaseProps {
  type: 'text' | 'email' | 'password' | 'search' | 'tel' | 'datetime-local',
  placeholder?: string,
  value: string;
  defaultValue?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPrime = ({ className, type, placeholder, value, onChange, defaultValue }: Props) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      className={classNameCheck(className, cl.input)}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  )
}

export default InputPrime