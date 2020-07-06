import { useState, useEffect } from 'react'
import { SignInfo } from '../@types/model'

type Validator = (values: SignInfo) => SignInfo

const useValidator = (callback: () => void, validate: Validator) => {
  const [values, setValues] = useState<SignInfo>({
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
