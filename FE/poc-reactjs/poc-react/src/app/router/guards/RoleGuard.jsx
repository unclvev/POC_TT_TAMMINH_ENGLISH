import { Navigate, Outlet } from 'react-router-dom'
import { useApp } from '../../providers/AppProvider'
import { PATHS } from '../paths'

export function RoleGuard({ roles = [] }) {
  const { user } = useApp()
  const allowed = roles.includes('*') || roles.includes(user?.role)

  if (!allowed) {
    return <Navigate to={PATHS.dashboard} replace />
  }

  return <Outlet />
}
