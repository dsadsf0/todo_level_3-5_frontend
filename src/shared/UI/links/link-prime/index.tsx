import React from 'react'
import { Link } from 'react-router-dom'
import classNameCheck from 'shared/libs/helpers/classNameCheck';
import cl from './linkPrime.module.scss'
import { LinkProps } from 'shared/types/BaseProps';


const LinkPrime = ({to, children, className}: LinkProps) => {
  return (
    <Link to={to} className={classNameCheck(cl.link, className)}>{children}</Link>
  )
}

export default LinkPrime