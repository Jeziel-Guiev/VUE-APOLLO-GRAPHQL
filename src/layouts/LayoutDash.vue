<template>

    <v-app >
      <div>
    <v-app-bar
      :clipped-left="clipped"
      app
      color="white"
      dense
      elevation="4"
        
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" > </v-app-bar-nav-icon>
      <v-toolbar-title>{{$store.state.namePlaceData}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <Mensajes/>
      <v-tooltip bottom color="red">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" @click="logout" icon color="blue"  fab><v-icon >mdi-door</v-icon></v-btn>
        </template>
        <span>Cerrar sesion</span>
      </v-tooltip>
      
       </v-app-bar>
      <v-navigation-drawer
          fixed
          app
          v-model="drawer"
          style="background:#020562"
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://i.pinimg.com/564x/5d/99/cd/5d99cdb9fa7fbb243e857a0172c3c75e--jg-logo-internship.jpg"></v-img>
            </v-list-item-avatar>
           <v-list-item-title class="text-h6">
                <div class="font-weight-normal" style="font-size:30px; color:white">
                  SADOSA
                </div>
              </v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-subtitle class="dark" style="color:white">nodeserver.iot@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
            <div v-for="data in arrayList" :key="data.title" :class="color" >
                <selectSidebar :index="data" :role="role" />
            </div>
        </v-list>
         <template v-slot:append >
           <div >
             
             <v-btn block dark color="indigo lighten-2">
              <v-icon color="dark">mdi-account-circle-outline</v-icon>   <div class="mx-2">PERFIL</div>
             </v-btn>
           </div>
         </template>
      </v-navigation-drawer>
    
  </div>
    <v-main >
      <v-container style="background:#FCD145; height: 100%">
          <router-view/>
      </v-container >
    </v-main>

  </v-app>

</template>

<script>
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import { getJWTaccess,getJWToken } from '@/auth/jwtService'
import indexlist from '../navigation/vertical/apps-and-pages.js'
import selectSidebar from './layout-vertical/layout_select.vue'
import Mensajes from '@/components/navigation/horizontal/Mensajes.vue'
import axios from 'axios'
export default {
  components:{
    selectSidebar,
    Mensajes
  },
  data: () => ({
    color:'white',
    drawer: true,
    arrayList:[],
    role:'',
    clipped:false
    //isLogin:this.$store.state.user ? this.$store.state.user.role:null
  }),
  methods:{
    logout(){

        //console.log("saliendo de la aplicacion")
          
          this.$store.commit('updateAbility',[]);
          localStorage.clear();
          this.$router.push('/login');
   
    },
  },
  async mounted(){
      const isLoggedIn = isUserLoggedIn();
      //console.log("login"+ isLoggedIn);
      //console.log('valor');
       if (isLoggedIn){
        this.arrayList=indexlist;
        this.role=JSON.parse(localStorage.getItem('userData')).role;
      //  this.$store.commit('updateToken',JSON.parse(localStorage.getItem('userData')).token);
       // this.$store.commit('updateRole',JSON.parse(localStorage.getItem('userData')).role);
       }
      //  await axios.get('/findviviendas',getJWTaccess()).then(({data})=>{
      //     //console.log(data[0]._id);
      //     this.$store.commit('updateNameplaceData',data[0].name);
      //     localStorage.setItem('placeData',this.$CryptoJS.AES.encrypt(data[0]._id,getJWToken()).toString());
      //     // placeData cooresponde al id de la vivienda que se ah creado por defecto se va mostrar la primera casa posicion 0
      //   }).catch(err=>alert('error al buscar viviendas'));
    
  }

};
</script>
<style scope>
#container{
  background: rgb(98, 74, 165);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(208,255,228,0.8463760504201681) 11%, rgba(255,252,252,1) 100%, rgba(0,212,255,1) 100%); 
}
</style>
