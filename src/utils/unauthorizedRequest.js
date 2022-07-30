import { logout } from '../feature/user/userSlice'

export const checkForUnauthorized = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(logout())
    return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
  }

  return thunkAPI.rejectWithValue(error.response.data.msg)
}
