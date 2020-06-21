import React, { FC } from 'react'

import Blue from './Blue'

interface Props {}

const Red: FC<Props> = () => {
  return (
    <div className="red">
      <Blue>Blue</Blue>
    </div>
  )
}

export default Red
