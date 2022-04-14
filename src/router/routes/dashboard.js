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
        path: '/dashboard/cajera',
        name: 'dashboard-cajera',
        component: () => import('@/views/dashboard/Cajera.vue'),
        meta: {
          resource: 'cajera',//['cajera'],
          action: 'read',
        },
    },
    {
        path: '/dashboard/profesor',
        name: 'dashboard-profesor',
        component: () => import('@/views/dashboard/Profesor.vue'),
        meta: {
          resource: 'Pro',
          action: 'read',
        },
    },
    {
      path: '/dashboard/secretaria',
      name: 'dashboard-secretaria',
      component: () => import('@/views/dashboard/Secretaria.vue'),
      meta: {
        resource: 'Secr',
        action: 'read',
      },
   }
  ]
  