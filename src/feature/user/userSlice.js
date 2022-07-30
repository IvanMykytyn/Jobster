import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// local storage
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage'

// toastify
import { toast } from 'react-toastify'

// thunks
import { registerUserThunk, loginUserThunk, updateUserThunk } from './userThunk'

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  isSidebarOpen: true,
}

export const registerUser = createAsyncThunk('user/registerUser', registerUserThunk)
export const loginUser = createAsyncThunk('user/loginUser', loginUserThunk)
export const updateUser = createAsyncThunk('user/updateUser', updateUserThunk)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state, { payload }) => {
      state.user = null
      state.isSidebarOpen = false
      removeUserFromLocalStorage()
      if (payload) {
        toast.success(payload)
      }
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
  },
  extraReducers: {
    // register
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
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
      const { user } = payload
      state.user = user
      state.isLoading = false
      addUserToLocalStorage(user)

      toast.success(`Welcome Back ${user.name}`)
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },

    // Update User
    [updateUser.pending]: (state) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      state.user = user
      state.isLoading = false
      addUserToLocalStorage(user)
      toast.success('User Updated')
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})
export const { logout, toggleSidebar } = userSlice.actions

export default userSlice.reducer
