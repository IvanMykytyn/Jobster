import customFetch from '../../utils/axios'
import { checkForUnauthorized } from '../../utils/unauthorizedRequest'

import { clearValues } from './jobSlice'

export const addJobThunk = async (_, thunkAPI) => {
  try {
    const { position, company, jobLocation, jobType, status } =
      thunkAPI.getState().job
    const NewJob = { position, company, jobLocation, jobType, status }

    const response = await customFetch.post('/jobs', NewJob)
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    return checkForUnauthorized(error, thunkAPI)
  }
}

export const editJobThunk = async (_, thunkAPI) => {
  try {
    const { editJobId, position, company, jobLocation, jobType, status } =
      thunkAPI.getState().job
    const editedJob = { position, company, jobLocation, jobType, status }

    const response = await customFetch.patch(`/jobs/${editJobId}`, editedJob)
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    return checkForUnauthorized(error, thunkAPI)
  }
}
