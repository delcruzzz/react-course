import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { firebaseAuth } from './configFirebase'

const googleAuthProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const authGoogle = await signInWithPopup(firebaseAuth, googleAuthProvider)
    const { uid, displayName, email, photoURL } = authGoogle.user
    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut()
}
