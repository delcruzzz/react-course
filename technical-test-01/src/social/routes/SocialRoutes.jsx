import { Route, Routes } from 'react-router-dom';
import { SocialPage } from '../pages/SocialPage';

export const SocialRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<SocialPage />} />
    </Routes>
  )
}
