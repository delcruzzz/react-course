import { 
  loginWithEmailAndPassword, 
  logoutFirebase, 
  registerUserWithEmailPassword, 
  signInWithGoogle 
} from '../../../firebase/providers.firebase'
import { checkingCredentials, login, logout } from '../slices/auth.slice'

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

export const startCreatingUserEmailPassword = ({email, password, displayName}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName})
    if (!ok) return dispatch(logout({errorMessage}))
    dispatch(login({uid, displayName, email, photoURL}))
  }
}

export const startLoginWithEmailPassword = ({email, password}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const { ok, uid, errorMessage } = await loginWithEmailAndPassword({email, password})
    if (!ok) return dispatch(logout({errorMessage}))
    dispatch(login({uid, email}))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase()
    dispatch(logout({}))
  }
}
