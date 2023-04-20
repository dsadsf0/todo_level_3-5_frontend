import React from 'react'
import { Link } from 'react-router-dom'
import { LinkProps } from 'shared/types/BaseProps';
import classNameCheck from 'shared/libs/helpers/classNameCheck';
import cl from './linkPrimeBtn.module.scss'

const LinkPrimeBtn = ({to, children, className}: LinkProps) => {
  return (
    <Link to={to} className={classNameCheck(cl.link, className)}>{children}</Link>
  )
}

export default LinkPrimeBtn