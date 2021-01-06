import './SignupPage.scss'

import React, { FC } from 'react'

import { validate } from '../utils/signUtils'
import useValidator from '../hooks/useValidator'

interface Props {}

const SignupPage: FC<Props> = () => {
  console.log('signup')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:4000/user/signup', {
        method: 'POST',
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log(res)
    } catch (err) {
      console.error(err)
    }
  }

  const { values, errors, handleChange } = useValidator(handleSubmit, validate)

  return (
    <form className="SignupPage" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="name">name: </label>
        <input type="name" id="name" name="name" onChange={handleChange} />
        <p>{errors.name}</p>
      </div>

      <div>
        <label htmlFor="email">email: </label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        <p>{errors.email}</p>
      </div>

      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <p>{errors.password}</p>
      </div>

      <input type="submit" value="회원가입"></input>
    </form>
  )
}

export default SignupPage
