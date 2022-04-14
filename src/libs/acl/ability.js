// import { Ability } from '@casl/ability'
 import { initialAbility } from './config'

//  Read ability from localStorage
// * Handles auto fetching previous abilities if already logged in user
// ? You can update this if you store user abilities to more secure place
// ! Anyone can update localStorage so be careful and please update this
const userData = JSON.parse(localStorage.getItem('userData'))
const existingAbility = userData ? userData.ability : null
//console.log(existingAbility);
//console.log(initialAbility);
const ability=(existingAbility ? existingAbility :initialAbility);
export default  ability;
//si no encuentra usertData.ability devuelve null pero como esta dentro 
//de || pasa al siguiente que por defecto se le da la abilidad de 
// {
//    action: 'read',
//    subject: 'Auth',
//  },
// ]