import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

// thunk
import { addJobThunk } from './jobThunk'

export const addJob = createAsyncThunk('job/addJob', async (_, thunkAPI) => {
  return addJobThunk(thunkAPI)
})

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
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: localStorage.getItem("user")?.location || ''
      }
    },
  },
  extraReducers: {
    [addJob.pending]: (state) => {
      state.isLoading = true;
    },
    [addJob.fulfilled]: (state, action) => {
      toast.success("Job Created");
      state.isLoading = false;
    },
    [addJob.rejected]: (state, {payload}) => {
      toast.error(payload);
      state.isLoading = false;
    }
  },
})

export const { handleChange, clearValues } = jobSlice.actions

export default jobSlice.reducer
