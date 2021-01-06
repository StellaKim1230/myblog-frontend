import React, { FC } from 'react'

interface Props {
  title: string
  onClick?: () => void
}

const Button: FC<Props> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>
}

export default Button
