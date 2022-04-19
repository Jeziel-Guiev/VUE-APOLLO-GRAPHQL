<template>
    <v-app >
      <component :is="layout">
          <router-view/>
      </component>
  </v-app>
</template>

<script>
import ComponentLayoutFull from './layouts/Layoutfull.vue';
import ComponentLayoutDash from './layouts/LayoutDash.vue'

import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
export default {
  name: 'App',
  components:{
    ComponentLayoutFull,
    ComponentLayoutDash
  },
  data: () => ({
    drawer: false,
  }),
    computed: {
    layout() {
      const isLoggedIn = isUserLoggedIn();
      if (this.$route.meta.layout === 'full'){
        return 'ComponentLayoutFull' // layout-LayoutFull
      }else{  
        if (isLoggedIn){
        return `ComponentLayoutDash`
        }
      }
      
    },
    contentLayoutType() {
      return this.$store.state.appConfig.layout.type
    },
  },
  created(){
        
  },
  watch:{
   
  },

};
</script>
<style>
#container{
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(208,255,228,0.8463760504201681) 11%, rgba(255,252,252,1) 100%, rgba(0,212,255,1) 100%); 
}
</style>
