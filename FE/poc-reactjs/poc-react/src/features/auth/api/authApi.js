import { httpClient } from '../../../shared/api/httpClient'

export function loginRequest(payload) {
  return httpClient('/auth/login', { method: 'POST', body: payload })
}

export function meRequest(token) {
  return httpClient('/auth/me', { token })
}
