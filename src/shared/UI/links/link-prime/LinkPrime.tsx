import React from 'react'
import { Link } from 'react-router-dom'
import BaseProps from './../../../baseTypes/BaseProps';
import classNameCheck from 'shared/libs/helpers/classNameCheck';
import cl from './linkPrime.module.scss'

interface Props extends BaseProps {
  to: string,
  children?: React.ReactNode;
}


const LinkPrime = ({to, children, className}: Props) => {
  return (
    <Link to={to} className={`${cl.link} ${classNameCheck(className)}`}>{children}</Link>
  )
}

export default LinkPrime