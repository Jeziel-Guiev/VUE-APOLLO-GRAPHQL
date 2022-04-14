<template>

        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-row>

              <!-- <v-col cols="12" md="4">   
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
              </v-col> -->
              <v-col cols="12" md="4">
                <v-text-field
                v-model="pago_pasivo.detalles"
                :rules="[v => !!v || 'Detalles es requerido']"
                label="Detalles"
                required
                ></v-text-field>
              </v-col>
                <v-col cols="12" md="4">
                  <v-select
                    v-model="pago_pasivo.gestion"
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
                v-model="pago_pasivo.datecreate"
                type="date"
                :rules="[v => !!v || 'Fecha de creacion es requerido']"
                label="Fecha"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-text-field
                v-model="pago_pasivo.monto"
                type="number"
                :rules="[v => !!v || 'Monto es requerido']"
                label="Monto"
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
</template>
<script>
import axios from 'axios';
import {getJWTaccess,getJWToken} from '@/auth/jwtService.js';
import {getUserData} from '@/auth/utils.js';
  export default {
      props:{
      codificacion:{
        type:String,
        default:'Comteco'
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
       contrato_estado:true,
       states: ['2021','2022','2023','2023','2024','2025','2026','2027'],
       contrato:'',
       estadoMessage:false,
       pago_pasivo:{
            codificacion:'',
            detalles:'',
            datecreate:'',
            gestion:String((new Date()).getFullYear()),
            placeData:'',
            monto:'',
            estado:1,
            tipo:'pasivo',
            firma:''
          },
      valid: true,
      items: [],
      checkbox: false,
    }},
    //  watch:{
    //   inquilino: {
    //     handler(newValue, oldValue) {
    //       this.pago_activo.detalles=`Pago del wifi por ${this.inquilino.name}.`;
    //     },
    //     deep: true
    // },  
    // },
    // watch:{
    //     pago_pasivo: {
    //     handler(contrato) {
    //         if(this.pago_pasivo.contrato=="Anticretico"){this.contrato_estado=false}else{this.contrato_estado=true};
    //     },
    //     deep: true
    //     }
    // },
    methods: {
        
      async validate () {
        this.pago_pasivo.codificacion=this.codificacion;
        this.pago_pasivo.placeData=this.placeData;
        this.pago_pasivo.firma=this.firma;
       if(this.$refs.form.validate()==true){
         //console.log(this.codificacion);
        await axios.post('/insert-pasivo-transaccion',this.pago_pasivo,getJWTaccess()).then(({data})=>{
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
       //     this.pago_pasivo.codificacion=''
          //  this.pago_pasivo.detalles=''

      }
    },
    mounted(){
      this.pago_pasivo.detalles=`Pago por el servicio de ${this.codificacion}`;
      ///console.log(getUserData().cuenta)
        // this.$store.commit('getListPasivos');
        // this.$store.commit('getListInquilinos');
        // this.pago_pasivo.placeData=this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8);
        // this.pago_pasivo.firma=getUserData().cuenta;
        //this.items=this.$store.state.listEgresos;
       
    },
  
   
  }
</script>
