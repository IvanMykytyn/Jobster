import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// axios setup
import customFetch from '../../utils/axios'

// local storage
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../../utils/localStorage'

// toastify
import { toast } from 'react-toastify'


const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/register', user)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/login', user)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      removeUserFromLocalStorage()
    }
  },
  extraReducers: {
    // register 
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const {user} = payload
      state.user = user
      state.isLoading = false
      addUserToLocalStorage(user)

      toast.success(`Hello There ${user.name}`)
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },

    // login
    [loginUser.pending]: (state) => {
      state.isLoading = true
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const {user} = payload
      state.user = user
      state.isLoading = false
      addUserToLocalStorage(user)

      toast.success(`Welcome Back ${user.name}`)
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})
export const { logout } = userSlice.actions

export default userSlice.reducer
