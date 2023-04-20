import React from 'react'
import classNameCheck from 'shared/libs/helpers/classNameCheck';
import BaseProps from 'shared/types/BaseProps';
import cl from './textareaPrime.module.scss'

interface Props extends BaseProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  defaultValue?: string;
}

const TextareaPrime = ({ onChange, value, className, placeholder, defaultValue }: Props) => {
  return (
    <textarea
      className={classNameCheck(cl.textarea, className)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  )
}

export default TextareaPrime