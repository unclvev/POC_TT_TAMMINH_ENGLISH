import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-shell">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
