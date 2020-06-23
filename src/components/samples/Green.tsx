import React, { FC, useContext } from 'react'

import { SampleContext } from '../../contexts/sampleContext'

interface Props {}

const Green: FC<Props> = () => {
  const { number } = useContext(SampleContext)
  return (
    <div>
      <span>{number}</span>
    </div>
  )
}

export default Green
