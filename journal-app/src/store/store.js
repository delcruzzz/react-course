import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/slices/auth.slice'
import { journalSlice } from './journal/slices/journal.slice'

/* la fuente central de mi aplicación */
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer, 
    journal: journalSlice.reducer, 
  }
})
