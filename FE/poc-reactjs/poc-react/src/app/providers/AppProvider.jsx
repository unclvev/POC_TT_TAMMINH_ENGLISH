import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { env } from '../config/env'
import { ROLES } from '../../shared/constants/roles'
import { getStoredAuth, setStoredAuth } from '../../shared/utils/storage'

const AppContext = createContext(null)

const DEMO_USERS = {
  admin: {
    id: 'u-admin',
    name: 'Quản trị viên',
    email: 'admin@tamminh.edu',
    role: ROLES.ADMIN,
    permissions: ['*'],
  },
}

export function AppProvider({ children }) {
  const [auth, setAuth] = useState(() => getStoredAuth(env.authStorageKey))

  const login = useCallback(async ({ username }) => {
    const user = DEMO_USERS[username] ?? DEMO_USERS.admin
    const next = { user, token: `demo-${user.id}` }
    setStoredAuth(env.authStorageKey, next)
    setAuth(next)
    return next
  }, [])

  const logout = useCallback(() => {
    setStoredAuth(env.authStorageKey, null)
    setAuth(null)
  }, [])

  const value = useMemo(
    () => ({
      user: auth?.user ?? null,
      token: auth?.token ?? null,
      isAuthenticated: Boolean(auth?.token),
      login,
      logout,
    }),
    [auth, login, logout],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
