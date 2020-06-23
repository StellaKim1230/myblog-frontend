import React, { createContext } from 'react'

const UserContext = createContext({
  name: '김지은',
  email: 'stellakim1230@gmail.com',
  job: 'Frontend Developer',
  age: 34,
  gender: 'female',
})
