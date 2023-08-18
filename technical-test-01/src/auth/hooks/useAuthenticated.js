import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { firebaseAuth } from '../../firebase/configFirebase'
import { login, logout } from '../../redux/slices/authSlice'

export const useAuthenticated = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) dispatch(logout())

      const { uid, email, displayName, photoURL } = user
      dispatch(login({uid, email, displayName, photoURL}))
    })
  }, [])

  return {status}
}
