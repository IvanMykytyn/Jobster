// axios setup
import customFetch from '../../utils/axios'
import { checkForUnauthorized } from '../../utils/unauthorizedRequest'

import { logout } from './userSlice'
import { clearValues, clearAllJobsState } from '../allJobs/allJobsSlice'

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
    const response = await customFetch.patch('/auth/updateUser', user)
    return response.data
  } catch (error) {
    return checkForUnauthorized(error, thunkAPI)
  }
}

export const clearStoreThunk = async (msg, thunkAPI) => {
  try {
    // logout user
    // clear jobs value
    // clear job input values
    thunkAPI.dispatch(logout(msg))
    thunkAPI.dispatch(clearAllJobsState())
    thunkAPI.dispatch(clearValues())
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
