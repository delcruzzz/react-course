import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/auth.layout'
import { useForm } from '../../hooks/use_form.hook'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserEmailPassword } from '../../store/auth/thunks/auth.thunk'
import { AuthStatus } from '../../store/auth/types/types.d'

const formData = {
  displayName: '', 
  email: '', 
  password: '', 
}

const formValidations = {
  email: [(value) => value.includes('@'), 'el email debe tener un @'], 
  password: [(value) => value.length >= 8, 'la contraseña debe tener 8 o más caracteres'], 
  displayName: [(value) => value.length >= 2, 'el nombre es requerido'], 
}

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector((state) => state.auth)

  const isCheckingAuthentication = useMemo(() => status === AuthStatus.CHECKING, [status])

  const { 
    displayName, 
    email, 
    password, 
    onInputChange, 
    formState, 
    isFormValid, 
    displayNameValid, 
    emailValid, 
    passwordValid, 
  } = useForm(formData, formValidations)

  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return
    dispatch(startCreatingUserEmailPassword(formState))
  }

  return (
    <AuthLayout title='register'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='name'
              type='text'
              placeholder='john doe'
              fullWidth 
              name='displayName' 
              onChange={onInputChange} 
              value={displayName} 
              error={!!displayNameValid && formSubmitted} 
              helperText={displayNameValid} 
            />
          </Grid>
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
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button 
                disabled={isCheckingAuthentication} 
                type='submit' 
                variant='contained' 
                fullWidth
              >
                register
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography variant='span' sx={{ mr: 1 }}>¿ya tienes cuenta?</Typography>
            <Link href='login' color='inherit'>
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}