import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

// components
import { FormRow } from '../../components/'

// actions
import { updateUser } from '../../feature/user/userSlice'

const Profile = () => {
  // global state
  const dispatch = useDispatch()
  const { user, isLoading } = useSelector((state) => state.user)
  const initialValues = {
    name: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    location: user?.location || '',
  }

  // local state
  const [values, setValues] = useState(initialValues)

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, lastName, email, location } = values

    if (!name || !lastName || !email || !location) {
      toast.error('Please Fill Out All Fields')
      return
    }
    dispatch(updateUser({ name, lastName, email, location }))
  }

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={values?.name}
            onChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="Last Name"
            value={values?.lastName}
            onChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={values?.email}
            onChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={values?.location}
            onChange={handleChange}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
