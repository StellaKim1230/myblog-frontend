import React, { FC } from 'react'

interface Props {}

const SignupPage: FC<Props> = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="email">email: </label>
      <input type="email" id="email"></input>
      <label htmlFor="password">password: </label>
      <input type="password" id="password"></input>
      <input type="submit" value="회원가입"></input>
    </form>
  )
}

export default SignupPage
