import React, { FC } from 'react'

interface Props {
  theme: string
}

const Button: FC<Props> = ({ theme }) => {
  return <button className={theme}></button>
}

export default Button
