
import {getUserData} from '@/auth/utils'
export default [
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/pages/Error404.vue'),
      meta: {
        layout: 'full',
        resource: 'Auth',
        action: 'read',
      },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/pages/About.vue'),
        meta: {
          layout: 'full',
          resource: 'Auth',
          action: 'read',
        },
      },
      {
        path: '/misc-not-authorized',
        name: 'misc-not-authorized',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/pages/misc-not-authorized.vue'),
        meta: {
          resource: (getUserData()? getUserData().role : "Auth"),
        },
      },
      {
        path: '/login',
        name: 'auth-login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/pages/Login.vue'),
        meta: {
            layout: 'full', 
            resource: 'Auth',
            redirectIfLoggedIn: true,
          },
      },
      {
        path: '/register',
        name: 'register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/pages/Register.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            redirectIfLoggedIn: true,
          },
      },
  ]
  