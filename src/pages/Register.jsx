import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'

// components
import { Logo, FormRow } from '../components'

// toastify 
import { toast } from 'react-toastify';

const initialValues = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
const Register = () => {
  const [values, setValues] = useState(initialValues)

  const onSubmit = (e) => {
    e.preventDefault()

    const {name, email, password, isMember} = values

    if(!email || !password || (!isMember && !name)){
        toast.error('Please Fill Out All Fields');
        return
    }
  
    console.log(e.target)
  }


  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
  }

  const toggleMember = () => {
    setValues(prevValues => ({...prevValues, isMember: !values.isMember}))
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* name field */}
        {values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
        )}

        {/* email field */}
        <FormRow
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
        />

        {/* password field */}
        <FormRow
          type="password"
          value={values.password}
          name="password"
          onChange={handleChange}
        />
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  )
}

export default Register
