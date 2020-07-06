import { SignInfo } from '../@types/model'

const emailPattern = /^[\w-.%]+@([\w-]{2,}\.)+[a-zA-Z]{2,4}$/
const passwordPattern = /^(?=.*[A-Z])(?=.*[\d])(?=.*[\W]).{8,}$/

export const validate = (values: SignInfo) => {
  let errors: SignInfo = {
    email: '',
    password: '',
  }

  if (!values.email) {
    errors.email = 'Email address is required'
  }

  if (!emailPattern.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  }

  if (!passwordPattern.test(values.password)) {
    errors.password = 'Password is invalid'
  }

  return errors
}
