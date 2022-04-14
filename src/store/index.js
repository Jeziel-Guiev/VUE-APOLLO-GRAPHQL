import Vue from 'vue'
import Vuex from 'vuex'

import { onLogout, apolloClient } from '@/vue-apollo'
import { LOGGED_IN_USER } from '@/gpl/querys/auth'
import { LOGIN_USER, REGISTER_USER } from '@/gpl/mutations/auth'


Vue.use(Vuex)
import axios from 'axios';
import CryptoJS from 'crypto-js'
import {getJWTaccess,getJWToken} from '@/auth/jwtService.js';
export default new Vuex.Store({
  state: {
    namePlaceData:'',
    listInquilinosAnioActivosAlquiler:[],
    listInquilinos:[],
    listEgresos:[],
    listActivos:[],

    token: null,

    ability:(localStorage.getItem('userData')?JSON.parse(localStorage.getItem('userData')).ability:[]), // nuestras habilidades de manera global
    role:'',
    resource:'',
    username: 'juabcirsd',
    auth: null,
    tareas:[],
    correos:[],
    user:{}
  },
  // getters:{
  //   tareas: state=> state.tareas
  // },

  mutations: {
    //async getListInquilinos
    login(state,user){

    },
    updateNameplaceData(state,name){
      state.namePlaceData=name
    },
    async getListInquilinosYearActivosAlquiler(state){
      var newJson={};
      var newArray=[];

      var Alquiler=[];
      var Wifi=[];
      var Garantia=[];
      const placeData=CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(CryptoJS.enc.Utf8);
      await axios.post('/getTodo',{'placeData':placeData},getJWTaccess()).then(({data})=>{   
        data.forEach(element => {
            // newJson.nombre=element.nombre;
            // newJson.diainicio=element.diainicio;
         
            element.data.forEach((data)=>{
              if(data.codificacion=="Alquiler"){
                //console.log(data);
                Alquiler.push(data);
              }
              if(data.codificacion=="Garantia"){
                Garantia.push(data);
              }
              if(data.codificacion=="Wifi"){
                Wifi.push(data);
              }
            })
            //console.log(Alquiler);
            var user={
              nombre:element.nombre,
              diainicio:element.diainicio,
              data:{
                Alquiler:Alquiler,
                Garantia:Garantia,
                Wifi:Wifi
              }
            }
            //newJson.pagos={Alquiler:[],Garantia:[],Wifi:[]}
            //console.log(newJson);
            newArray.push(user);
            Alquiler=[];
            Garantia=[];
            Wifi  =[];
            
        });
      //  console.log(data);
        //console.log(newArray);
        var enero=0;
        var febreo=0;
        var marzo=0;
        var abril=0;
        var mayo=0;
        var junio=0;
        var julio=0;
        var agosto=0;
        var septiembre=0;
        var octubre=0;
        var noviembre=0;
        var diciembre=0;

        newArray.forEach((element)=>{ // ve a tosos los inquilinos
          element.data.Alquiler.forEach((alquiler)=>{ // de cada iquilino su Alquiler []
           // console.log(alquiler);
             //console.log((new Date(alquiler.datecreate)).getMonth()+1)
            if(((new Date(alquiler.datecreate)).getMonth()+1)==3){
             // console.log(alquiler);
              marzo+=alquiler.monto;
            }
            
            
          })
          console.log(marzo)
          marzo=0;
          console.log('------------------')
        })
        state.listInquilinosAnioActivosAlquiler=newArray;
       
    }).catch(err=>alert('err'));
    },
    async getListInquilinos(state){
      //console.log("entro");
      const placeData=CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(CryptoJS.enc.Utf8);
      await axios.post('/find-inquilinos-activos',{'placeData':placeData},getJWTaccess()).then(({data})=>{   
        state.listInquilinos=data;
    }).catch(err=>alert('err'));
    },
    async getListPasivos(state){
      //console.log("entro");
      const placeData=CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(CryptoJS.enc.Utf8);
      await axios.post('/get-pasivos',{'placeData':placeData},getJWTaccess()).then(({data})=>{
        //console.log(data)
        state.listEgresos=data;
      }).catch(err=>console.log('err'))
    },
    async getListActivos(state){
      //console.log("entro");
      const placeData=CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(CryptoJS.enc.Utf8);
      await axios.post('/get-activos',{'placeData':placeData},getJWTaccess()).then(({data})=>{
        //console.log(data)
        state.listActivos=data;
      }).catch(err=>console.log('err'))
    },
    updateToken(state,token){
       //console.log("updae");
       state.token=token;
     },
     updateRole(state,role){
      //console.log("updae");
      state.role=role;
    },
    updateAbility(state,ability){
     // console.log(ability);
      state.ability=ability;
    },
    doRole(state,role){
      //console.log(role);
      state.rol=role;
    },
    doLogin(state, username) {
      state.auth = true;
      state.username = username;
    },
    saveResource(state, subject) {
      state.resource = subject;
      //state.username = username;
    },
    doLogout(state) {
      state.auth = false;
      state.username = null;
    },
    cargarTareas(state,tareas){
      state.tareas = tareas
    },
    cargarCorreos(state,correo){
      state.correos.push(correo);
    },
    cargarUser(state,user){
      //console.log(user);
      state.user = user
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    LOGIN_USER (state, user) {
      state.authStatus = true
      state.user = { ...user }
    },
  },
  actions: {
    async login({ commit, dispatch }, authDetails) {
     
      try {
        const { data } = await apolloClient.mutate({ mutation: LOGIN_USER, variables: { ...authDetails } })
        const token = JSON.stringify(data.authUser.token)
        console.log(token);
        //console.log(data)
        commit('SET_TOKEN', token)
        localStorage.setItem('apollo-token', token)
        //dispatch('setUser') // traemos informacion de nuestro usuario


        commit('updateAbility',[{resource:'admin',subject:'all'}]);
        commit('updateToken',token); 
         localStorage.setItem('Subject',[{resource:'admin',subject:'all'}])
         localStorage.setItem('userData', JSON.stringify({'name':'josue',role:'admin',ability: [{resource: "admin", subject: "all"}]}))

        return true;
      } catch (e) {
        console.log(e)
        return false;
      }
    },
    async setUser ({ commit }) {
      const { data } = await apolloClient.query({ query: LOGGED_IN_USER })
      commit('LOGIN_USER', data.me)
    },
    async logOut ({ commit, dispatch }) {
      commit('LOGOUT_USER')
      onLogout(apolloClient)
    }
  },
  modules: {
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.authStatus,
    user: state => state.user
  },
})
