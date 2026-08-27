import { useApp } from '../../app/providers/AppProvider'

export function useAuth() {
  return useApp()
}
