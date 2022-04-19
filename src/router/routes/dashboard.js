export default [
    {
      path: '/dashboard/administrador',
      name: 'dashboard-admin',
      component: () => import('@/views/dashboard/Admin.vue'),
      meta: {
        resource: 'admin',
        action: 'read',
      },
    },
    {
        path: '/dashboard/estudiante',
        name: 'dashboard-cajera',
        component: () => import('@/views/dashboard/Student.vue'),
        meta: {
          resource: 'student',
          action: 'read',
        },
    }
  ]
  