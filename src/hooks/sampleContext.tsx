import React, { createContext, FC, useState } from 'react'

const SampleContext = createContext({
  number: 0,
  increase: () => {},
  decrease: () => {},
})

const SampleProvider: FC = ({ children }) => {
  const increase = () => {
    setNumber((prevState) => {
      return {
        ...prevState,
        number: prevState.number + 1,
      }
    })
  }

  const decrease = () => {
    setNumber((prevState) => {
      return {
        ...prevState,
        number: prevState.number - 1,
      }
    })
  }

  const initialState = {
    number: 0,
    increase,
    decrease,
  }

  const [number, setNumber] = useState(initialState)

  return (
    <SampleContext.Provider value={number}>{children}</SampleContext.Provider>
  )
}

export { SampleContext, SampleProvider }
