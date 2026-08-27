export const PERMISSIONS = {
  USERS_VIEW: 'users.view',
  USERS_MANAGE: 'users.manage',
  STUDENTS_VIEW: 'students.view',
  STUDENTS_MANAGE: 'students.manage',
  TUITION_VIEW: 'tuition.view',
  TUITION_MANAGE: 'tuition.manage',
  REPORTS_VIEW: 'reports.view',
}

export function hasPermission(permissions = [], permission) {
  if (!permission) return true
  return permissions.includes('*') || permissions.includes(permission)
}
