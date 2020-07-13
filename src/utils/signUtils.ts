import { UserInfo } from '../@types/model'

const emailPattern = /^[\w-.%]+@([\w-]{2,}\.)+[a-zA-Z]{2,4}$/
const passwordPattern = /^(?=.*[A-Z])(?=.*[\d])(?=.*[\W]).{8,}$/

export const validate = (values: UserInfo) => {
  let errors: UserInfo = {
    email: '',
    password: '',
  }

  if (values.email.length === 0) {
    errors.email = 'Email address is required'
  }

  if (values.email.length !== 0 && !emailPattern.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  if (values.password.length === 0) {
    errors.password = 'Password is required'
  }

  if (values.password.length !== 0 && !passwordPattern.test(values.password)) {
    errors.password = 'Password is invalid'
  }

  return errors
}
