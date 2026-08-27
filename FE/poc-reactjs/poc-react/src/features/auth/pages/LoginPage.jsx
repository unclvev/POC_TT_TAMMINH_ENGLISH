import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { PATHS } from '../../../app/router/paths'
import { useAuth } from '../../../shared/hooks/useAuth'
import { required } from '../../../shared/validators/required'

export function LoginPage() {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [username, setUsername] = useState('admin')
  const [error, setError] = useState(null)

  if (isAuthenticated) {
    return <Navigate to={PATHS.dashboard} replace />
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const message = required(username)
    if (message) {
      setError(message)
      return
    }

    await login({ username })
    const from = location.state?.from?.pathname ?? PATHS.dashboard
    navigate(from, { replace: true })
  }

  return (
    <>
      <h1>Đăng nhập</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Tài khoản
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            autoComplete="username"
          />
        </label>
        {error ? <p className="empty-state">{error}</p> : null}
        <button type="submit">Vào hệ thống</button>
      </form>
    </>
  )
}
