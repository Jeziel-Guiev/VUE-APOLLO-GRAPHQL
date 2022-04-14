import ability from './ability'
import { initialAbility } from './config'
//console.log("ability",ability);
//console.log(ability.find( data => data.resource === 'admin'  ))
const userData = JSON.parse(localStorage.getItem('userData'))
const existingAbility = userData ? userData.ability : null  

const array=userData ? userData.ability : null ;
//console.log(array);


export const canNavigate = to => to.matched.some(to => ability.find( data => data.resource === to.meta.resource ))

export const _ = undefined
