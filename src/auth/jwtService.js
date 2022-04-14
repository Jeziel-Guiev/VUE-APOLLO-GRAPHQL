
export const getJWTaccess = () => {
    return {headers:{"Content-Type":"application/json",'auth-token':JSON.parse(localStorage.getItem('userData')).token}}
}
export const getJWToken = () => {
    return localStorage.getItem('userData')? (JSON.parse(localStorage.getItem('userData')).token).substr(0,7):"Jeziel_Guiev";
}
  