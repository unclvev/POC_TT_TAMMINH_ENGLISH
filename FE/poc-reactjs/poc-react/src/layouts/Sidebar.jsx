import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../app/router/paths'
import { useAuth } from '../shared/hooks/useAuth'

export function Sidebar() {
  const { user } = useAuth()

  const items = NAV_ITEMS.filter(
    (item) => item.roles.includes('*') || item.roles.includes(user?.role),
  )

  return (
    <aside className="app-sidebar">
      <nav>
        {items.map((item) => (
          <NavLink key={item.path} to={item.path} end={item.path === '/'}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
