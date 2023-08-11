import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalPage } from '../pages/journal.page'
import { TestPage } from '../pages/test.page'

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<JournalPage />} />
      
      {/* ruta para mostrar pruebas de componentes */}
      <Route path='/test' element={<TestPage />} />

      {/* si no encuentra la ruta registrada lo redirecciona a journal */}
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}