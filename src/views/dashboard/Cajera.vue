<template>
  <div>
    <v-card rounded="10" elevation="3">
       <v-container fluid>
         <div>Role</div>
       <dir>{{ count }}</dir>
       <TablaSimple/>
       </v-container>
       
    </v-card>
  </div>
</template>


<script>
import {getJWToken} from '@/auth/jwtService'; // obtenemos el token o clave sercreto
import TablaSimple from '@/components/apps/Pagos/TablaPagos.vue'
  export default {
     components:{
        TablaSimple
    },
    name: 'admin',
    data(){
      return{
        role:this.$store.state.role
      }
    },
    mounted(){
      //  console.log(this._vm);
      //console.log(this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8));
      //console.log(this.role);
    },
    methods:{
      showtoken(){
        //console.log(this.$store.state.token);
      }
    },
    created(){
      //console.log(getAuth());
       //console.log(this.role); //user
      // console.log(this.$store.state.resource)
    },
    computed: {
    count () {
      return JSON.parse(localStorage.getItem('userData')).role
    }
  }
    
  }
</script>