import React, { FC } from 'react'

import { validate } from '../utils/signUtils'
import useValidator from '../hooks/useValidator'

interface Props {}

const SignupPage: FC<Props> = () => {
  const signup = () => {
    console.log('signup')
  }

  const { values, handleChange } = useValidator(signup, validate)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:4000/user/signup', {
        method: 'post',
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      })

      console.log(res)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="email">email: </label>
      <input type="email" id="email" name="email" onChange={handleChange} />
      <label htmlFor="password">password: </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
      />
      <input type="submit" value="회원가입"></input>
    </form>
  )
}

export default SignupPage
