import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {},
  extraReducers: {},
})


export default allJobsSlice.reducer
