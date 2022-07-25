import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  isLoading: false,
  user: null,
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register : (state) => {
        state.user = {
            lol: "fs"
        }
    }
  },
})
export const {register} = userSlice.actions

export default userSlice.reducer