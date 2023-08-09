import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Link } from '@mui/material'
import { AuthLayout } from '../layout/auth.layout'
import { useForm } from '../../hooks/use_form.hook'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks/auth.thunk'
import { useMemo, useState } from 'react'
import { AuthStatus } from '../../store/auth/types/types.d'

const formData = {
  email: '', 
  password: '', 
}

const formValidations = {
  email: [(value) => value.includes('@'), 'el email debe tener un @'], 
  password: [(value) => value.length >= 8, 'la contraseña debe tener 8 o más caracteres'], 
}

export const LoginPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)
  const { 
    email, 
    password, 
    onInputChange, 
    formState, 
    isFormValid, 
    emailValid, 
    passwordValid, 
  } = useForm(formData, formValidations)

  /* submit del formulario con log in común */
  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return
    dispatch(startLoginWithEmailPassword(formState))
  }

  const isAuthenticating = useMemo(() => status === AuthStatus.CHECKING, [status])

  /* submit del formulario con log in google */
  const onGoogleSubmit = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='email'
              type='email'
              placeholder='email@example.com'
              fullWidth 
              name='email' 
              onChange={onInputChange} 
              value={email} 
              error={!!emailValid && formSubmitted} 
              helperText={emailValid} 
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='password'
              type='password'
              placeholder='********'
              fullWidth 
              name='password' 
              onChange={onInputChange}
              value={password} 
              error={!!passwordValid && formSubmitted} 
              helperText={passwordValid} 
            />
          </Grid>

          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={6}>
              <Button 
                disabled={isAuthenticating} 
                type='submit' 
                variant='contained' 
                fullWidth
              >
                login
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button 
                disabled={isAuthenticating} 
                variant='contained' 
                fullWidth 
                onClick={onGoogleSubmit}
              >
                <Google />
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link href='register' color='inherit'>
              crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}