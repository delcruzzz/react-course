import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  signInWithEmailAndPassword
} from 'firebase/auth'
import { firebaseAuth } from './config.firebase'

const googleAuthProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleAuthProvider)
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
    const { displayName, email, photoURL, uid } = result.user
    return {
      ok: true, 
      /* user info */
      displayName, 
      email, 
      photoURL, 
      uid, 
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return {
      ok: false, 
      /* error details */
      errorCode, 
      errorMessage, 
    }
  }
}

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
  try {
    const res = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    const { uid, photoURL } = res.user
    await updateProfile(firebaseAuth.currentUser, {displayName})
    return {
      ok: true, 
      uid, photoURL, email, displayName, 
    }
  } catch (error) {
    return {
      ok: false, 
      errorMessage: error.message
    }
  }
}

export const loginWithEmailAndPassword = async ({email, password}) => {
  // signInWithEmailAndPassword
  try {
    const res = await signInWithEmailAndPassword(firebaseAuth, email, password)
    return { 
      ok: true, 
      uid: res.user.uid, 
    }
  } catch (error) {
    return {
      ok: false, 
      errorMessage: error.message, 
    }
  }
}

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut()
}
