import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

// thunk
import { getJobsThunk, deleteJobThunk, getStatsThunk} from './allJobsThunk'

// async thunk functions
export const getJobs = createAsyncThunk('allJobs/getJobs', getJobsThunk)
export const deleteJob = createAsyncThunk('allJobs/deleteJob', deleteJobThunk)
export const getStats = createAsyncThunk('allJobs/getStats', getStatsThunk)

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
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
}

// Slice
const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1
      state[name] = value
    },
    clearValues: (state) => {
      return {
        ...state,
        ...initialFiltersState,
      }
    },
    setPage: (state, { payload }) => {
      state.page = payload
    },
    clearAllJobsState: () => {
      return initialState
    },
  },
  // extraReducers
  extraReducers: {
    // getJobs
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
    [getJobs.rejected]: (state, payload) => {
      toast.error(payload)
      state.isLoading = true
    },

    // deleteJob
    [deleteJob.pending]: (state) => {
      state.isLoading = true
    },
    [deleteJob.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      toast.success(payload.msg)
    },
    [deleteJob.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },

    // getStats
    [getStats.pending]: (state) => {
      state.isLoading = true
    },
    [getStats.fulfilled]: (state, { payload }) => {
      const { defaultStats, monthlyApplications } = payload
      state.stats = defaultStats
      state.monthlyApplications = monthlyApplications

      state.isLoading = false
    },
    [getStats.rejected]: (state, { payload }) => {
      toast.error(payload)
      state.isLoading = false
    },
  },
})

export const { handleChange, clearValues, setPage, clearAllJobsState } = allJobsSlice.actions

export default allJobsSlice.reducer
