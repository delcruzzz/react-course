import { configureStore } from '@reduxjs/toolkit'
import { socialSlice } from '../slices/socialSlice'

export const store = configureStore({
  reducer: {
    social: socialSlice.reducer,
  }
})
