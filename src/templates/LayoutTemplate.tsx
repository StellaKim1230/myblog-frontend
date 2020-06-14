import React, { FC } from 'react'

import NavBar from '../components/NavBar'

interface Props {}

const LayoutTemplate: FC<Props> = ({ children }) => {
  return (
    <>
      <header className="App__header">
        <NavBar />
      </header>
      <main>{children}</main>
    </>
  )
}

export default LayoutTemplate
