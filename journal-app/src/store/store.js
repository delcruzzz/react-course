import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/slices/auth.slice'

/* la fuente central de mi aplicación */
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})
