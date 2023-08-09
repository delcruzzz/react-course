import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/login.page'
import { RegisterPage } from '../pages/register.page'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />

      {/* 
        esta ruta es si no se encuentra la ruta registrada, lo 
        redirecciona a login 
      */}
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}