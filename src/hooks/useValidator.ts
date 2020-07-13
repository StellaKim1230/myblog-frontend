import { useState, useEffect } from 'react'
import { UserInfo } from '../@types/model'

import { debounce } from 'lodash'

type Validator = (values: UserInfo) => UserInfo

const initializeState = {
  email: '',
  password: '',
}

const useValidator = (
  callback: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
  validate: Validator,
) => {
  const [values, setValues] = useState<UserInfo>(initializeState)
  const [errors, setErros] = useState<UserInfo>(initializeState)

  const debouncedValue = debounce(
    (values: UserInfo, e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
    },
    300,
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist()
    debouncedValue(values, e)
  }

  useEffect(() => {
    setErros(validate(values))
    // eslint-disable-next-line
  }, [values])

  return {
    values,
    errors,
    handleChange,
  }
}

export default useValidator
