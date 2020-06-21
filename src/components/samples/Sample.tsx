import React, { FC } from 'react'

import Red from './Red'
import { SampleProvider } from '../../hooks/sampleContext'

interface Props {}

const Sample: FC<Props> = () => {
  return (
    <SampleProvider>
      <Red />
    </SampleProvider>
  )
}

export default Sample
