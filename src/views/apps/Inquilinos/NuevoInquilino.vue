<template>
    <v-card elevation="3">
        <v-container>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                v-model="usuario.name"
                :rules="[v => !!v || 'nombre es requerido']"
                label="nombre usuario"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                 <v-text-field
                v-model="usuario.cuarto"
                :rules="[v => !!v || 'Num. cuarto es requerido']"
                label="Num. cuarto"
                required
                ></v-text-field>
              </v-col>  
              <v-col cols="12" md="4">   
                <v-text-field
                v-model="usuario.datecreate"
                type="date"
                :rules="[v => !!v || 'Fecha de creacion es requerido']"
                label="Fecha"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-text-field
                v-model="usuario.garantia"
                type="number"
                :rules="[v => !!v || 'Garantia es requerido']"
                label="Garantia"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-text-field
                v-model="usuario.carnet"
                :rules="[v => !!v || 'Carnet es requerido']"
                label="Carnet"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-text-field
                v-model="usuario.celular"
                :rules="[v => !!v || 'Celular es requerido']"
                label="Celular"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-text-field
                
                v-model="usuario.diainicio"
                type="number"
                :rules="[v => !!v || 'Dia de inicio es requerido']"
                label="Dia inicio"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-text-field
                v-if="contrato_estado"
                v-model="usuario.pago"
                :rules="[v => !!v || 'Pago es requerido']"
                label="Pago"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-select
                v-model="usuario.contrato"
                :items="items"
                :rules="[v => !!v || 'Tipo de contrato es requerido']"
                label="Contrato"
                required
                ></v-select>
              </v-col>
              <!-- <v-col md="4">
                  
                <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
                ></v-checkbox>
              </v-col> -->

               <v-col cols="12">
                    <v-btn
                :disabled="!valid"
                color="indigo lighten-3"
                dark
                class="mr-4"
                @click="validate"
                >
                Guardar
                </v-btn>
                 <v-btn
                color="teal darken-3"
                dark
                class="mr-4"
                @click="atras()"
                >
                Atras
                </v-btn>

                <!-- <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Reset Form
                </v-btn> -->

                <v-btn
                color="blue-grey darken-3"
                dark
                @click="resetValidation"
                >
                reset validacion
                </v-btn>
               </v-col>
             </v-row>
        </v-form>
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
            garantia:'',
            cuarto:'',
            celular:'',
            contrato:'',
            diapago:'',
            pago:'',  
            datecreate  :new Date(),
            placeData:'',
            estado:1,
            
          },
      valid: true,
      items: ["Alquiler","Anticretico"],
      checkbox: false,
    }},
    watch:{
        usuario: {
        handler(contrato) {
            if(this.usuario.contrato=="Anticretico"){this.contrato_estado=false}else{this.contrato_estado=true}
        },
        deep: true
        }
    },
    methods: {
      async validate () {
       if(this.$refs.form.validate()==true){
           this.usuario.datecreated=new Date(this.usuario.datecreated);
            await axios.post('/insert-new-user',this.usuario,getJWTaccess()).then(({data})=>{
                this.$router.go(-1)
            }).catch(err=>alert('token invalido'));
        //  this.usuario.ability=[{'resource':this.usuario.role,'subject':'all'}];
        //  await axios.post('/insertnewinvitado',this.usuario,getJWTaccess()).then(({data})=>{
        //               this.$router.go(-1)
        //  }).catch(err=>alert('error al agregar administrador'));

        // console.log(this.usuario);
        // console.log(this.usuario);
       }
      },
      reset () {
        this.$refs.form.reset();
      },
      resetValidation () {
        this.$refs.form.resetValidation();
      },
      atras(){
          this.$router.go(-1)
      }
    },
    mounted(){
        //this.items.push(JSON.parse(isUserLoggedIn()).cuenta)
        //console.log(isUserLoggedIn());
        this.usuario.placeData=this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8);
    }
  }
</script>
