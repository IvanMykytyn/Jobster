import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
}

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value
    },
    clearValues: (state) => {
      state.position = initialState.position
      state.company = initialState.company
      state.jobLocation = initialState.jobLocation
      state.jobType = initialState.jobType
      state.status = initialState.status

      // or
      // return {
      //   ...initialState,
      // }

    },
  },
  extraReducers: {},
})

export const { handleChange, clearValues } = jobSlice.actions

export default jobSlice.reducer
