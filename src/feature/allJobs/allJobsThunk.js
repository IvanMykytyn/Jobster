import customFetch from '../../utils/axios'
import {checkForUnauthorized} from '../../utils/unauthorizedRequest'

import { getJobs } from './allJobsSlice'

// get all Jobs
export const getJobsThunk = async (_, thunkAPI) => {
  try {
    const { search, searchStatus, searchType, sort, page } =
      thunkAPI.getState().allJobs

    let url = `/jobs?status=${searchStatus}&sort=${sort}&jobType=${searchType}&page=${page}`
    if (search) {
      url += '&search=' + search
    }
    const jobs = await customFetch.get(url)
    return jobs.data
  } catch (error) {
    return checkForUnauthorized(error, thunkAPI)
  }
}

// delete Job
export const deleteJobThunk = async (jobId, thunkAPI) => {
  try {
    const response = await customFetch.delete(`/jobs/${jobId}`)

    thunkAPI.dispatch(getJobs())
    return response.data
  } catch (error) {
    return checkForUnauthorized(error, thunkAPI)
  }
}

// get Stats
export const getStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await customFetch.get('/jobs/stats')
    return response.data
  } catch (error) {
    return checkForUnauthorized(error, thunkAPI)
  }
}
