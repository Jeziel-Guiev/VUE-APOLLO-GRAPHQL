<template>

     <div style="margin-top:30px" >
       <v-row>
         <v-col cols="12" md="6">
           <div>
             <v-img src="https://cdn131.picsart.com/328254786060211.png" ></v-img>
           </div>
         </v-col>
         <v-col cols="12" md="6">
           <div style="font-size:100px;color:rgb(74, 24, 255)">
             ERROR PAGINA NO ECONTRADA
           </div>
         </v-col>
       </v-row>
     </div>

</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  export default {
    name: 'login',
    
  }
</script>
<style scoped>
.asda{
color: rgb(74, 24, 255);
}
</style>