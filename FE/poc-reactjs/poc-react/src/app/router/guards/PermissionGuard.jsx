import { Navigate, Outlet } from 'react-router-dom'
import { useApp } from '../../providers/AppProvider'
import { hasPermission } from '../../../shared/constants/permissions'
import { PATHS } from '../paths'

export function PermissionGuard({ permission }) {
  const { user } = useApp()

  if (!hasPermission(user?.permissions, permission)) {
    return <Navigate to={PATHS.dashboard} replace />
  }

  return <Outlet />
}
