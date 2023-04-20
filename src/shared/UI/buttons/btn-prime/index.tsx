import React from 'react'
import { BtnProps } from 'shared/types/BaseProps';
import cl from './btnPrime.module.scss'
import classNameCheck from 'shared/libs/helpers/classNameCheck';

const BtnPrime = ({ onClick, className, children }: BtnProps)  => {
  const click = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick && onClick(e);
  }
  return (
    <button
      onClick={click}
      className={classNameCheck(cl.btn, className)}
    >
      {children}
    </button>
  )
}

export default BtnPrime