
export const isUserLoggedIn = () => {
  return localStorage.getItem('userData'); // && localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
}

export const getUserData = () => {
  return JSON.parse(localStorage.getItem('userData'))
}


export const getHomeRouteForLoggedInUser = userRole => {
  if (userRole === 'estudent') return '/dashboard/estudiante'
  if (userRole === 'cajera') return '/dashboard/cajera'
  if (userRole === 'teacher') return '/dashboard/profesor'
  if (userRole === 'admin') return '/dashboard/administrador'
  if (userRole === 'User') return '/dashboard/estudiante'
  if (userRole === 'client') return { name: 'access-control' }
  return { name: 'auth-login' }
}
