import React, { FC, useState } from 'react'

interface Props {}

const SignupPage: FC<Props> = () => {
  const [email, setEmail] = useState('')
  const [password, setPasswrod] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:4000/user/signup', {
        method: 'post',
        body: JSON.stringify({ email, password }),
      })

      console.log(res)
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'password') setPasswrod(e.target.value)
    if (e.target.name === 'email') setEmail(e.target.value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="email">email: </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
      ></input>
      <label htmlFor="password">password: </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
      ></input>
      <input type="submit" value="회원가입"></input>
    </form>
  )
}

export default SignupPage
