import customFetch from '../../utils/axios'

import { logout } from '../user/userSlice'
import { clearValues } from './jobSlice'

export const addJobThunk = async (thunkAPI) => {
  try {
    const { position, company, jobLocation, jobType, status } =
      thunkAPI.getState().job
    const NewJob = { position, company, jobLocation, jobType, status }

    const response = await customFetch.post('/jobs', NewJob, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    thunkAPI.dispatch(clearValues())
    return response.data

  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logout())
      return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
    }

    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}