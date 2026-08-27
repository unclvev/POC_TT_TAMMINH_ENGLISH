import { env } from '../app/config/env'
import { useAuth } from '../shared/hooks/useAuth'

export function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="app-header">
      <strong>{env.appName}</strong>
      <div className="app-header-actions">
        <span>{user?.name}</span>
        <button type="button" onClick={logout}>
          Đăng xuất
        </button>
      </div>
    </header>
  )
}
