import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalPage } from '../pages/journal.page'

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<JournalPage />} />

      {/* si no encuentra la ruta registrada lo redirecciona a journal */}
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}