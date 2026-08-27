import { env } from '../../app/config/env'
import { ApiError } from './apiError'

export async function httpClient(path, options = {}) {
  const { method = 'GET', body, token, headers = {}, signal } = options

  const response = await fetch(`${env.apiBaseUrl}${path}`, {
    method,
    signal,
    headers: {
      Accept: 'application/json',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  const payload = await parseBody(response)

  if (!response.ok) {
    throw new ApiError({
      status: response.status,
      message: payload?.message ?? response.statusText,
      details: payload,
    })
  }

  return payload
}

async function parseBody(response) {
  const text = await response.text()
  if (!text) return null
  try {
    return JSON.parse(text)
  } catch {
    return { message: text }
  }
}
