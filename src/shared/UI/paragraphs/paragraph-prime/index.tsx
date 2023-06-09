import React from 'react'
import BaseProps from 'shared/types/BaseProps';
import cl from './paragraphPrime.module.scss'
import classNameCheck from 'shared/libs/helpers/classNameCheck';

interface Props extends BaseProps {
  children?: React.ReactNode;
}

const ParagraphPrime = ({children, className}: Props) => {
  return (
    <p className={classNameCheck(cl.text, className)}>
      {children}
    </p>
  )
}

export default ParagraphPrime