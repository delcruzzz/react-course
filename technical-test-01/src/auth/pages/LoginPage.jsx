import { useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import style from '../styles/LoginPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { AuthStatus } from '../constants'
import { startGoogleSignIn } from '../../redux/thunks/authThunk'

const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)
  const { 
    email, 
    password, 
    onInputChange, 
  } = useForm(formData)

  const isAuthenticating = useMemo(() => status === AuthStatus.CHECKING, [status])
  console.log(isAuthenticating)

  const onGoogleSubmit = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout>
      <div className={style.containerLogin}>
        <h4>Iniciar Sesión</h4>
        <form className={style.formContent}>
          <p>email</p>
          <input 
            type='email'
            placeholder='email@example.com'
            name='email'
            value={email}
            onChange={onInputChange}
          />
          <p>password</p>
          <input 
            type='password'
            placeholder='********'
            name='password'
            value={password}
            onChange={onInputChange}
          />
          <div className={style.boxButtons}>
            <button disabled>Ingresar</button>
            <button
              onClick={onGoogleSubmit}
            >
              Google
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}
