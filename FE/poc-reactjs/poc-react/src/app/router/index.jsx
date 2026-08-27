import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AuthLayout } from '../../layouts/AuthLayout'
import { MainLayout } from '../../layouts/MainLayout'
import { LoginPage } from '../../features/auth'
import { DashboardPage } from '../../features/dashboard'
import { AdmissionsPage } from '../../features/admissions'
import { StudentsPage } from '../../features/students'
import { ParentsPage } from '../../features/parents'
import { TeachersPage } from '../../features/teachers'
import { ProgramsPage } from '../../features/programs'
import { ClassesPage } from '../../features/classes'
import { ClassroomsPage } from '../../features/classrooms'
import { SchedulesPage } from '../../features/schedules'
import { TuitionPage } from '../../features/tuition'
import { PaymentsPage } from '../../features/payments'
import { AttendancePage } from '../../features/attendance'
import { ExaminationsPage } from '../../features/examinations'
import { NotificationsPage } from '../../features/notifications'
import { ReportsPage } from '../../features/reports'
import { UsersPage } from '../../features/users'
import { RolesPage } from '../../features/roles'
import { AuditLogsPage } from '../../features/audit-logs'
import { ROLES } from '../../shared/constants/roles'
import { PermissionGuard } from './guards/PermissionGuard'
import { ProtectedRoute } from './guards/ProtectedRoute'
import { RoleGuard } from './guards/RoleGuard'
import { PATHS } from './paths'
import { PERMISSIONS } from '../../shared/constants/permissions'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ path: PATHS.login, element: <LoginPage /> }],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: PATHS.dashboard, element: <DashboardPage /> },
          { path: PATHS.admissions, element: <AdmissionsPage /> },
          { path: PATHS.students, element: <StudentsPage /> },
          { path: PATHS.parents, element: <ParentsPage /> },
          { path: PATHS.teachers, element: <TeachersPage /> },
          { path: PATHS.programs, element: <ProgramsPage /> },
          { path: PATHS.classes, element: <ClassesPage /> },
          { path: PATHS.classrooms, element: <ClassroomsPage /> },
          { path: PATHS.schedules, element: <SchedulesPage /> },
          { path: PATHS.tuition, element: <TuitionPage /> },
          { path: PATHS.payments, element: <PaymentsPage /> },
          { path: PATHS.attendance, element: <AttendancePage /> },
          { path: PATHS.examinations, element: <ExaminationsPage /> },
          { path: PATHS.notifications, element: <NotificationsPage /> },
          { path: PATHS.reports, element: <ReportsPage /> },
          {
            element: <RoleGuard roles={[ROLES.ADMIN]} />,
            children: [
              { path: PATHS.roles, element: <RolesPage /> },
              { path: PATHS.auditLogs, element: <AuditLogsPage /> },
            ],
          },
          {
            element: <PermissionGuard permission={PERMISSIONS.USERS_VIEW} />,
            children: [{ path: PATHS.users, element: <UsersPage /> }],
          },
        ],
      },
    ],
  },
  { path: '*', element: <Navigate to={PATHS.dashboard} replace /> },
])
