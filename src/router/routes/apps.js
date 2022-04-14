export default [
  {
    path: '/movimientos-cajera',
    name: 'movimientos-cajera',
    component: () => import('@/views/apps/Movimiento/Movimientos.vue'),
    meta: {
      resource: 'cajera ',
      action: 'all',
    },
  },
  {
    path: '/movimientos-admin',
    name: 'movimientos',
    component: () => import('@/views/apps/Movimiento/Movimientos.vue'),
    meta: {
      resource: 'admin',
      action: 'all',
    },
  },
  {
    path: '/control-duchas-rfid',
    name: 'config-rfid',
    component: () => import('@/views/apps/Automatizacion/Duchas/DuchasRfid.vue'),
    meta: {
      resource: 'admin',
      action: 'all',
    },
  },
  {
    path: '/inquilinos-cajera',
    name: 'inquilinos-cajera',
    component: () => import('@/views/apps/Inquilinos/Inquilino.vue'),
    meta: {
      resource: 'cajera',
      action: 'all',
    },
  },
  {
    path: '/pagos-cajera',
    name: 'pagos-cajera',
    component: () => import('@/views/apps/Pagos/Pagos.vue'),
    meta: {
      resource: 'cajera',
      action: 'all',
    },
  },
  {
    path: '/pagos',
    name: 'pagos',
    component: () => import('@/views/apps/Pagos/Pagos.vue'),
    meta: {
      resource: 'admin',
      action: 'all',
    },
  },
  {
    path: '/deshabilitar-inquilino-cajera',
    name: 'deshabilitar-inquilino-cajera',
    component: () => import('@/views/apps/Inquilinos/DeshabilitarInquilino.vue'),
    meta: {
      resource: 'cajera',
      action: 'all',
    },
  },
  {
    path: '/deshabilitar-inquilino-admin',
    name: 'deshabilitar-inquilino-admin',
    component: () => import('@/views/apps/Inquilinos/DeshabilitarInquilino.vue'),
    meta: {
      resource: 'admin',
      action: 'all',
    },
  },
  {
    path: '/nuevo-inquilino-cajera',
    name: 'nuevo-inquilino-cajera',
    component: () => import('@/views/apps/Inquilinos/NuevoInquilino.vue'),
    meta: {
      resource: 'cajera',
      action: 'all',
    },
  },
  {
    path: '/nuevo-inquilino-admin',
    name: 'nuevo-inquilino-admin',
    component: () => import('@/views/apps/Inquilinos/NuevoInquilino.vue'),
    meta: {
      resource: 'admin',
      action: 'all',
    },
  },
  {
    path: '/editar-inquilino-cajera',
    name: 'editar-inquilino-cajera',
    component: () => import('@/views/apps/Inquilinos/EditarInquilino.vue'),
    meta: {
      resource: 'cajera',
      action: 'all',
    },
  },
  {
    path: '/editar-inquilino-admin',
    name: 'editar-inquilino-admin',
    component: () => import('@/views/apps/Inquilinos/EditarInquilino.vue'),
    meta: {
      resource: 'admin',
      action: 'all',
    },
  },
  {
    path: '/inquilinos',
    name: 'inquilinos',
    component: () => import('@/views/apps/Inquilinos/Inquilino.vue'),
    meta: {
      resource: 'admin',
      action: 'all',
    },
   },
    {
      path: '/configuracion',
      name: 'configuracion',
      component: () => import('@/views/apps/Configuracion/Configuracion.vue'),
      meta: {
        resource: 'admin',
        action: 'all',
      },
    },
    {
      path: '/configurar-casa',
      name: 'config-casa',
      component: () => import('@/views/apps/Configuracion/ConfigCasa.vue'),
      meta: {
        resource: 'admin',
        action: 'all',
      },
    },
    {
      path: '/configurar-casa-nueva',
      name: 'config-casa-nueva',
      component: () => import('@/views/apps/Configuracion/NuevaCasa.vue'),
      meta: {
        resource: 'admin',
        action: 'all',
      },
    },
    {
      path: '/configurar-acceso-nuevo',
      name: 'config-acceso-nuevo',
      component: () => import('@/views/apps/Configuracion/NuevoAcceso.vue'),
      meta: {
        resource: 'admin',
        action: 'all',
      },
    },
    {
      path: '/configurar-acceso',
      name: 'config-acceso',
      component: () => import('@/views/apps/Configuracion/ConfigAcceso.vue'),
      meta: {
        resource: 'admin',
        action: 'all',
      },
    },
    {
      path: '/configurar-notitificacion',
      name: 'config-notificacion',
      component: () => import('@/views/apps/Configuracion/ConfigNotificacion.vue'),
      meta: {
        resource: 'admin',
        action: 'all',
      },
    },
    {
      path: '/configurar-pagos',
      name: 'config-pagos',
      component: () => import('@/views/apps/Configuracion/ConfigPagos.vue'),
      meta: {
        resource: 'admin',
        action: 'all',
      },
    },
  ]
  