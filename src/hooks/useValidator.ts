import { useState } from 'react'
import { UserInfo } from '../@types/model'

type Validator = (values: UserInfo) => UserInfo

const useValidator = (callback: () => void, validate: Validator) => {
  const [values, setValues] = useState<UserInfo>({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: UserInfo) => ({
      ...values,
      [e.target.name]: e.target.value,
    }))
  }

  return {
    values,
    handleChange,
  }
}

export default useValidator
