
export const isUserLoggedIn = () => {
  return localStorage.getItem('userData'); // && localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
}

export const getUserData = () => {
  return JSON.parse(localStorage.getItem('userData'))
}


export const getHomeRouteForLoggedInUser = userRole => {
  console.log(userRole)
  if (userRole === 'student') return '/dashboard/estudiante'
  if (userRole === 'admin') return '/dashboard/administrador'
  return { name: 'auth-login' }
}
