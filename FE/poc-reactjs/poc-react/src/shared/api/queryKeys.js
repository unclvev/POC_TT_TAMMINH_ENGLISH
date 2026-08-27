export const queryKeys = {
  auth: {
    me: () => ['auth', 'me'],
  },
  admissions: {
    all: () => ['admissions'],
    detail: (id) => ['admissions', id],
  },
  students: {
    all: () => ['students'],
    detail: (id) => ['students', id],
  },
  parents: {
    all: () => ['parents'],
    detail: (id) => ['parents', id],
  },
  teachers: {
    all: () => ['teachers'],
    detail: (id) => ['teachers', id],
  },
  programs: {
    all: () => ['programs'],
    detail: (id) => ['programs', id],
  },
  classes: {
    all: () => ['classes'],
    detail: (id) => ['classes', id],
  },
  classrooms: {
    all: () => ['classrooms'],
    detail: (id) => ['classrooms', id],
  },
  schedules: {
    all: () => ['schedules'],
    detail: (id) => ['schedules', id],
  },
  tuition: {
    all: () => ['tuition'],
    detail: (id) => ['tuition', id],
  },
  payments: {
    all: () => ['payments'],
    detail: (id) => ['payments', id],
  },
  attendance: {
    all: () => ['attendance'],
    detail: (id) => ['attendance', id],
  },
  examinations: {
    all: () => ['examinations'],
    detail: (id) => ['examinations', id],
  },
  notifications: {
    all: () => ['notifications'],
  },
  reports: {
    all: () => ['reports'],
  },
  users: {
    all: () => ['users'],
    detail: (id) => ['users', id],
  },
  roles: {
    all: () => ['roles'],
  },
  auditLogs: {
    all: () => ['audit-logs'],
  },
}
