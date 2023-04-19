import React from 'react'
import cl from './titlePrime.module.scss'
import BaseProps from 'shared/baseTypes/BaseProps';
import classNameCheck from 'shared/libs/helpers/classNameCheck';

interface Props extends BaseProps {
  children?: React.ReactNode;
}

const TitlePrime = ({ children, className }: Props) => {
  return (
    <h3 className={`${cl.title} ${classNameCheck(className)}`}>
      {children}
    </h3>
  )
}

export default TitlePrime