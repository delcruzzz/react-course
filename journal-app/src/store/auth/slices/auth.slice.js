import { createSlice } from '@reduxjs/toolkit'
import { AuthStatus } from './../types/types.d'

const initialState = {
  status: AuthStatus.CHECKING, // checking, not-authenticated, authenticated
  uid: null, 
  email: null, 
  displayName: null, 
  photoURL: null, 
  errorMessage: null, 
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /* reducer para login */
    login: (state, action) => {
      state.status = AuthStatus.AUTHENTICATED
      state.uid = action.payload.uid
      state.email = action.payload.email
      state.displayName = action.payload.displayName
      state.photoURL = action.payload.photoURL
      state.errorMessage = null
    }, 
    /* reducer para cerrar sesión */
    logout: (state, action) => {
      state.status = AuthStatus.NOT_AUTHENTICATED
      state.uid = null
      state.email = null
      state.displayName = null
      state.photoURL = null
      state.errorMessage = action.payload?.errorMessage
    }, 
    /* reducer para estar verificando si está autenticado */
    checkingCredentials: (state) => {
      state.status = AuthStatus.CHECKING
    }, 
  }
})

export const { login, logout, checkingCredentials } = authSlice.actions
