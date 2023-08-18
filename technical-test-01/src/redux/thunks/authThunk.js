import { logoutFirebase, signInWithGoogle } from '../../firebase/providerFirebase'
import { checkingCredentials, login, logout } from '../slices/authSlice'

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    /* se llama a la función que provee los servicios de credenciales de google */
    const result = await signInWithGoogle()
    if (!result.ok) return dispatch(logout(result.errorMessage))
    
    /* si todo sale bien */
    dispatch(login(result))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase()
    dispatch(logout({}))
  }
}
