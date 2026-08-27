import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useApp } from '../../providers/AppProvider'
import { PATHS } from '../paths'

export function ProtectedRoute() {
  const { isAuthenticated } = useApp()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={PATHS.login} replace state={{ from: location }} />
  }

  return <Outlet />
}
