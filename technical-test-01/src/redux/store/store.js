import { configureStore } from '@reduxjs/toolkit'
import { socialSlice } from '../slices/socialSlice'
import { authSlice } from '../slices/authSlice'

export const store = configureStore({
  reducer: {
    social: socialSlice.reducer,
    auth: authSlice.reducer,
  }
})
