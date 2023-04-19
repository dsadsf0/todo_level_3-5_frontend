import React from 'react'
import BaseProps from '../../../baseTypes/BaseProps';
import cl from './btnPrime.module.scss'
import classNameCheck from 'shared/libs/helpers/classNameCheck';

interface Props extends BaseProps {
  children?: React.ReactNode;
}

const BtnPrime = ({ onClick, className, children }: Props)  => {
  const click = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick && onClick(e);
  }
  return (
    <button
      onClick={click}
      className={`${cl.btn} ${classNameCheck(className)}`}
    >
      {children}
    </button>
  )
}

export default BtnPrime