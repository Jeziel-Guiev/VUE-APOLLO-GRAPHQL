<template>
    <v-card elevation="3">
        <v-container>
                <v-alert
                prominent
                type="error"
                color="blue-grey darken-1"
                >
                <v-row align="center">
                    <v-col >
                    Al momento de deshabilitar un inquilino no se borrara de la base de datos solo ya no sera visible por lo tanto los filtros no tomaran en cuenta estos datos, como usuario admin puede volverlos habilitar.
                    </v-col>
                    <v-col class="shrink">
                    <v-btn @click="deshabilitar()">DESHABILITAR</v-btn>
                    </v-col>
                </v-row>
                </v-alert>
        </v-container>
    </v-card>
</template>
<script>
import axios from 'axios';
import {getJWTaccess,getJWToken} from '@/auth/jwtService.js';
  export default {
    data(){return{
       contrato_estado:true,
       contrato:'',
       usuario:{
            name:'',
            carnet:'',
            cuarto:'',
            celular:'',
            contrato:'',
            diapago:'',
            pago:'',  
            datecreated:new Date(),
            placeData:'',
            
          },
      valid: true,
      items: ["Alquiler","Anticretico"],
      checkbox: false,
    }},
    methods: {
      async deshabilitar() {
             this.usuario.estado=0;
             await axios.put('/update-inquilino/'+this.$route.query.inquilino._id,this.usuario,getJWTaccess()).then(({data})=>{
                 this.$router.go(-1)
            }).catch(err=>alert('err no update user'));
      },
    },
    mounted(){
        //console.log(this.$route.query.inquilino);
        this.usuario=this.$route.query?this.$route.query.inquilino:{};
        this.usuario.placeData=localStorage.getItem('placeData')?this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8):"111111111111";
    }
  }
</script>
