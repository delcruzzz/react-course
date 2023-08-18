import { Navigate, Route, Routes } from 'react-router-dom'
import { SocialRoutes } from '../social/routes/SocialRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/social/*' element={<SocialRoutes />} />
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route path='/*' element={<Navigate to={<SocialRoutes />} />} />
    </Routes>
  )
}
