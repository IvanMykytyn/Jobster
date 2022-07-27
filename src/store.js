import { configureStore } from '@reduxjs/toolkit'

// slices
import userSlice from './feature/user/userSlice'
import jobSlice from './feature/job/jobSlice'


export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
})
