import authHeader from '../../utils/authHeader'
import customFetch from '../../utils/axios'
import { getJobs } from './allJobsSlice'

// get all Jobs
export const getJobsThunk = async (_, thunkAPI) => {
  try {
    const jobs = await customFetch.get('/jobs')
    return jobs.data
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

// delete Job
export const deleteJobThunk = async (jobId, thunkAPI) => {
  try {
    const response = await customFetch.delete(
      `/jobs/${jobId}`
    )

    thunkAPI.dispatch(getJobs())
    return response.data
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

// get Stats
export const getStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await customFetch.get('/jobs/stats')
    return response.data
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg)
  }
}