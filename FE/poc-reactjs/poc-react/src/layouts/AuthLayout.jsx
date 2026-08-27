import { Outlet } from 'react-router-dom'
import { env } from '../app/config/env'

export function AuthLayout() {
  return (
    <div className="auth-layout">
      <section className="auth-panel">
        <p className="brand">{env.appName}</p>
        <Outlet />
      </section>
    </div>
  )
}
