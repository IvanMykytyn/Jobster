import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

// thunk
import { getJobsThunk, deleteJobThunk } from './allJobsThunk'

// async thunk functions
export const getJobs = createAsyncThunk(
  'allJobs/getJobs',
  async (_, thunkAPI) => {
    return getJobsThunk(thunkAPI)
  }
)

export const deleteJob = createAsyncThunk(
  'allJobs/deleteJob',
  async (jobId, thunkAPI) => {
    return deleteJobThunk(jobId, thunkAPI)
  }
)

// initial states
const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  page: 1,
  numOfPages: 1,
  ...initialFiltersState,
}

// Slice
const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {},
  // extraReducers
  extraReducers: {
    [getJobs.pending]: (state) => {
      state.isLoading = true
    },
    [getJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      const { jobs, numOfPages, totalJobs } = payload
      state.jobs = jobs
      state.numOfPages = numOfPages
      state.totalJobs = totalJobs
    },
    [getJobs.pending]: (state, payload) => {
      toast.error(payload)
      state.isLoading = true
    },
    [deleteJob.pending]: (state) => {
      state.isLoading = true
    },
    [deleteJob.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      toast.success(payload.msg)
    },
    [deleteJob.pending]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export const {} = allJobsSlice.actions

export default allJobsSlice.reducer
