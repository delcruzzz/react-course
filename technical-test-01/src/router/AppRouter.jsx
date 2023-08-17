import { Route, Routes } from 'react-router-dom'
import { SocialRoutes } from '../social/routes/SocialRoutes'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/social/*' element={<SocialRoutes />} />
      <Route path='/*' element={<SocialRoutes />} />
    </Routes>
  )
}
