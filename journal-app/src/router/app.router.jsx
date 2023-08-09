import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/auth.routes'
import { JournalRoutes } from '../journal/routes/journal.routes'
import { AuthStatus } from '../store/auth/types/types.d'
import { CheckingAuth } from '../ui/components/checking_auth.component'
import { useAuthenticated } from '../auth/hooks/use_authenticated.hook'

export const AppRouter = () => {
  const { status } = useAuthenticated()

  /* se verifica el estado de autenticación */
  if (status === AuthStatus.CHECKING) {
    return <CheckingAuth />
  }

  /* protección de rutas */
  return (
    <Routes>
      {
        status === AuthStatus.AUTHENTICATED
        /* login y registro */
        ? <Route path='/*' element={<JournalRoutes />} />
        /* journal app */
        : <Route path='/auth/*' element={<AuthRoutes />} />
      }
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}