import { RouterProvider } from 'react-router-dom'
import { AppProvider } from './app/providers/AppProvider'
import { QueryProvider } from './app/providers/QueryProvider'
import { router } from './app/router'

export default function App() {
  return (
    <QueryProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </QueryProvider>
  )
}
