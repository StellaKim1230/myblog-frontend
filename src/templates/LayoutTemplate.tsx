import React, { FC } from 'react'

import NavBar from '../components/NavBar'

interface Props {}

const LayoutTemplate: FC<Props> = ({ children }) => {
  return (
    <>
      <header className="App__header">
        <NavBar />
        <a
          href={`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/oauth2/google&client_id=${process.env.REACT_APP_GOOGLE_GLIENT_ID}`}
        >Login</a>
      </header>
      <main>{children}</main>
    </>
  )
}

export default LayoutTemplate
