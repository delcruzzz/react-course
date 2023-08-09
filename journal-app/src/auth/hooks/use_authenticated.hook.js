import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { firebaseAuth } from '../../firebase/config.firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../../store/auth/slices/auth.slice'

export const useAuthenticated = () => {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  /* mantener el estado de la autenticación al recargar */
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) return dispatch(logout())

      const { uid, email, displayName, photoURL } = user
      dispatch(login({uid, email, displayName, photoURL}))
    })
  }, [])

  return {
    status
  }
}