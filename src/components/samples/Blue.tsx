import React, { FC, useContext } from 'react'

import Green from './Green'

import { SampleContext } from '../../contexts/sampleContext'

interface Props {}

const Blue: FC<Props> = () => {
  const { increase, decrease } = useContext(SampleContext)
  return (
    <div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <Green>green</Green>
    </div>
  )
}

export default Blue
