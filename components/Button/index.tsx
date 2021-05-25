import React from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

const sizeStyle = {
  small: "w-126 h-50"
}

const Button = ({btnName, type, size}) => {
  let className = ''
  if (type === 'transparent') {
    className = 'text-secondary border border-secondary'
  }

  return (
    <button className={clsx('rounded-md focus:outline-none',styles.btn, className,sizeStyle[size])}>
      {btnName}
    </button>
  )
}

export default Button