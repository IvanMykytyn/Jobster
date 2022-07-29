import { configureStore } from '@reduxjs/toolkit'

// slices
import userSlice from './feature/user/userSlice'
import jobSlice from './feature/job/jobSlice'
import allJobsSlice from './feature/allJobs/allJobsSlice'


export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
})
