import { useState, useEffect } from 'react'
import { UserInfo } from '../@types/model'

type Validator = (values: UserInfo) => UserInfo

const useValidator = (callback: () => void, validate: Validator) => {
  const [values, setValues] = useState<UserInfo>({
    email: '',
    password: '',
  })

  useEffect(() => {
    setValues({ email: 'test@test.com', password: 'test1234' })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'password') {
      setValues({
        email: values.email,
        password: e.target.value,
      })
    }

    if (e.target.name === 'email') {
      setValues({
        email: e.target.value,
        password: values.password,
      })
    }
  }

  return {
    values,
    handleChange,
  }
}

export default useValidator
