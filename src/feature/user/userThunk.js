// axios setup
import customFetch from '../../utils/axios'

import { logout } from './userSlice'

export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const response = await customFetch.post('/auth/register', user)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const response = await customFetch.post('/auth/login', user)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const updateUserThunk = async (user, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().user.user
    const response = await customFetch.patch('/auth/updateUser', user, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })

    return response.data
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logout())
      return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
    }

    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
