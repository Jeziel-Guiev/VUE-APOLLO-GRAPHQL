<template>
  <div>
    
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-row>         
              <v-col cols="12" md="4">   
                <v-select
                 v-model="inquilino"
                :items="$store.state.listInquilinos"
                item-text="name"
                item-value="_id"
                label="Selecione inquilino"
                persistent-hint
                return-object
                single-line
                required
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                v-model="pago_activo.detalles"
                :rules="[v => !!v || 'Detalles es requerido']"
                label="Detalles"
                required
                ></v-text-field>
              </v-col>
                <v-col cols="12" md="4">
                  <v-select
                    v-model="pago_activo.gestion"
                    :items="states"
                    menu-props="auto"
                    label="Select"
                    hide-details
                    prepend-icon="mdi-application-edit"
                    single-line
                  ></v-select>
              </v-col>  
              <v-col cols="12" md="4">   
                <v-text-field
                v-model="pago_activo.datecreate"
                type="date"
                :rules="[v => !!v || 'Fecha de creacion es requerido']"
                label="Fecha"
                required
                ></v-text-field>
              </v-col>
              <v-col  cols="12" md="4">   
                <v-text-field
                v-model="pago_activo.monto"
                type="number"
                :rules="[v => !!v || 'Luz, Agua es requerido']"
                label="Pago luz, agua monto"
                required
                ></v-text-field>
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
                @click="validateAlquiler"
                >
                Guardar
                </v-btn>

                 <v-btn
                color="teal darken-3"
                dark
                class="mr-4"
                @click="atras()"
                >
                Reset
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
                 <v-alert
                 v-if="estadoMessage"
                 class="mt-5"
                   dense
                  text
                  type="success"
                >
                  Se guardo de manera<strong>"</strong> exitosa <strong>"</strong> 
                </v-alert>
               </v-col>
             </v-row>
        </v-form>
  </div>
        
</template>
<script>
import axios from 'axios';

import {getJWTaccess,getJWToken} from '@/auth/jwtService.js';
import {getUserData} from '@/auth/utils.js';
  export default {
    props:{
      codificacion:{
        type:String,
        default:'Garantia'
      },
      firma:{
        type:String,
        default:'err@gmail.com'
      },
      placeData:{
        type:String,
        default:'1212432324343223433422'
      }
    },
    data(){return{
       estadoMessage:false, 
       inquilino:{},

       states: ['2021','2022','2023','2023','2024','2025','2026','2027'],
       contrato:'',
       pago_activo:{
            //garantia:null,
            //wifi:null,
            inquilino_nombre:null,
            inquilino_id:null,
            placeData:'',
            codificacion:'',
            detalles:'',
            datecreate:'',
            gestion:String((new Date()).getFullYear()),
            monto:'', 
            estado:1,
            tipo:'activo',
            firma:''
          },
      valid: true,
      items: [],
      checkbox: false,
    }},
    methods: {
      async validateAlquiler(){
         // console.log(this.inquilino)
        this.pago_activo.inquilino_nombre=this.inquilino.name;
        this.pago_activo.inquilino_id=this.inquilino._id;
        this.pago_activo.diainicio=this.inquilino.diainicio;
        this.pago_activo.codificacion=this.codificacion;
        this.pago_activo.placeData=this.placeData;
        this.pago_activo.firma=this.firma;
       if(this.$refs.form.validate()==true){
         //console.log(this.pago_activo);
         await axios.post('/insert-activo-transaccion',this.pago_activo,getJWTaccess()).then(({data})=>{
           this.estadoMessage=true;
         }).catch(err=>console.log('err'))
       } 
      },
      reset () {
        this.$refs.form.reset();
      },
      resetValidation () {
        this.$refs.form.resetValidation();
      },
      atras(){
            this.estadoMessage=false;

          
      }
    },
         watch:{
      inquilino: {
        handler(newValue, oldValue) {
          this.pago_activo.detalles=`Pago de agua y luz por ${this.inquilino.name}.`;
        },
        deep: true
    },  
    },
    mounted(){
        //this.pago_activo.firma=getUserData().cuenta;
        //this.pago_activo.placeData=this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8);
        // console.log(this.codificacion);
        // console.log(this.firma);
        // console.log(this.placeData);
        //this.items=this.$store.state.listEgresos;     
    },
  }
</script>
