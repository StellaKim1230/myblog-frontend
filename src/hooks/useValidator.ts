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

  return {
    values,
  }
}

export default useValidator
