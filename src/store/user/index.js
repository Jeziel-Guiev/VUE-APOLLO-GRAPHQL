import jwt_decode from "jwt-decode";
import { onLogout, apolloClient } from '@/vue-apollo'
import { GetUserforId } from '@/gpl/querys/auth'
import { LOGIN_USER, REGISTER_USER } from '@/gpl/mutations/auth'
import CryptoJS from 'crypto-js'
import {getJWTaccess,getJWToken} from '@/auth/jwtService.js';
export default ({
  state: {
    authStatus:null,
    token: null,
    role:'',
    resource:'',
    auth: null,
    tareas:[],
    user:{}
  },
  mutations: {
    SET_USER (state, user) {
      console.log(user.role)
      state.user = user
      state.role = user.role
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    LOGIN_USER (state, user) {
      state.authStatus = true
      //state.user = user
    },
  },
  actions: {
    async login({ commit, dispatch }, authDetails) {
      try { 
        const { data } = await apolloClient.mutate({ mutation: LOGIN_USER, variables: { ...authDetails } })
        localStorage.setItem('apollo-token', data.authUser.token)
        const token = data.authUser.token
        var decoded = jwt_decode(token);
        
        const verifyUser=await apolloClient.query({ query: GetUserforId,variables: {id: decoded.uuid}, })
        if(verifyUser){
          //console.log(verifyUser.data);
          commit('SET_USER', verifyUser.data.GetUserforId)
          commit('SET_TOKEN', token)
          commit('LOGIN_USER', verifyUser.data.GetUserforId.name)
          
          localStorage.setItem('Subject',verifyUser.data.GetUserforId.ability)
          localStorage.setItem('userData', JSON.stringify(verifyUser.data.GetUserforId))
          return {role:verifyUser.data.GetUserforId.role,state:true};
        }else{
          return {state:true};
        }
      } catch (err) {
        return {state:true};
      }
    },
    async logOut ({ commit, dispatch }) {
      commit('LOGOUT_USER')
      onLogout(apolloClient)
    },
    
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.authStatus,
    user: state => state.user
  },
})
