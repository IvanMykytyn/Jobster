import authHeader from '../../utils/authHeader'
import customFetch from '../../utils/axios'
import { getJobs } from './allJobsSlice'

export const getJobsThunk = async (thunkAPI) => {
  try {
    const jobs = await customFetch.get('/jobs', authHeader(thunkAPI))
    return jobs.data
    
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const deleteJobThunk = async (jobId, thunkAPI) => {
  try {
    const response = await customFetch.delete(
      `/jobs/${jobId}`,
      authHeader(thunkAPI)
    )

    thunkAPI.dispatch(getJobs())
    return response.data

  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
