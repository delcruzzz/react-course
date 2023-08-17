import { Route, Routes } from 'react-router-dom'
import { SocialPage } from '../pages/SocialPage'
import { PostsPage } from './../pages/PostsPage';

export const SocialRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<SocialPage />} />
      <Route path='/posts' element={<PostsPage />} />
    </Routes>
  )
}
