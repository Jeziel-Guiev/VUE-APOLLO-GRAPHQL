import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from './routes/dashboard'
import pages from './routes/pages'
import apps from './routes/apps'
//import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
//import store from '../store/index'

import { initialAbility } from '@/libs/acl/config'

Vue.use(VueRouter)

const routes = [
  
  { 
    path: '/', redirect: getHomeRouteForLoggedInUser(getUserData() ? getUserData().role : '/')//'/login' 
  },
  ...dashboard,
  ...apps,
  ...pages,
  {
    path: '*',
    redirect: 'error-404',
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }, // empezar desde las posiciones iniciales de cada pagina
  routes
})

router.beforeEach((to, _, next) => {
  //console.log(to);
  const isLoggedIn = isUserLoggedIn(); // verifica si el usuario existe
  //console.log("isLogin :"+" "+isLoggedIn);
  //const navigator=canNavigate(to);
  const userData = JSON.parse(localStorage.getItem('userData'))
  const existingAbility = userData ? userData.ability : null
  const ability=(existingAbility ? existingAbility :initialAbility);
  const canNavigate=to.matched.some(to => ability.find( data => data.resource === to.meta.resource ))//(to.meta.resource.find(element=>element==data.resource))))//to.meta.resource ))
  //console.log(canNavigate);
//   const example={
//     meta:[{action:'all',resource:['cajera']}]
//   }
  
//  const result =example.meta.some((to)=>{
//    //console.log(to.resource.find(element=>element=='cajera'))
//     return (to.resource.find(element=>element=='cajera'))=='cajera'
//   })
//   console.log(result);
  
  //console.log("navigator :",canNavigate);
  //console.log('storeAbility',store.state.ability);
  if (!canNavigate) {
 
    if (!isLoggedIn) return next({ name: 'auth-login' })
    return next({ name: 'misc-not-authorized' })
    
  }
//   console.log(getUserData())
//  // if (!isLoggedIn) return next({ name: 'auth-login' })
// console.log((getUserData()? getUserData().role : "Auth"))
 if (to.meta.redirectIfLoggedIn && isLoggedIn) {
  const userData = getUserData()
  //console.log("deberia ir a tu dashboard")
  next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
 }


  else next()
})

export default router
