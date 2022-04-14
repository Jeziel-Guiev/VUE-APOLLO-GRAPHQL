<template>
  <div>
    <div>
       <!-- v-model="pago_activo.codificacion" -->
       <v-select           
                :items="$store.state.listEgresos"
                item-text="nombre"
                v-model="codificacion" 
                item-value="nombre"
                :rules="[v => !!v || 'Codificacion es requerido']"
                label="Tipo de Egreso"
                required
       ></v-select>
        <component :firma="firma" :placeData="placeData" :codificacion="codificacion" :is="layout"/>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import {getJWTaccess,getJWToken} from '@/auth/jwtService.js';
import {getUserData} from '@/auth/utils.js';
import Comteco from './Contratos/Comteco.vue'
import Elfec from './Contratos/Elfec.vue'
import Garantia from './Contratos/Devolucion_garantia.vue'
import Cajachica from './Contratos/CajaChicaPasivo.vue'
import index from './Contratos/index.vue'
  export default {
    components:{
      Comteco,
      Elfec,
      Garantia,
      index,
      Cajachica
    },
    data(){return{
      //  inquilino:{},
      //  contrato_estado:true,
      //  states: ['2021','2022','2023','2023','2024','2025','2026','2027'],
      //  contrato:'',
      //  estadoMessage:false,
      //  pago_pasivo:{
      //       codificacion:'',
      //       detalles:'',
      //       datecreate:'',
      //       gestion:String((new Date()).getFullYear()),
      //       placeData:'',
      //       monto:'',
      //       estado:1,
      //       tipo:'pasivo',
      //       firma:''
      //     },
      // valid: true,
      // items: [],
      // checkbox: false,
       codificacion:'',
       firma:'',
       placeData:'',
    }},
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
       if(this.$refs.form.validate()==true){
         //console.log(this.pago_pasivo);
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
          
            this.pago_pasivo.codificacion=''
            this.pago_pasivo.detalles=''
            this.pago_pasivo.datecreate=''
            this.pago_pasivo.gestion=String((new Date()).getFullYear())
            this.pago_pasivo.monto=''
            this.pago_pasivo.estado=1
            this.pago_pasivo.tipo='pasivo'
      }
    },
    computed:{
      layout(){
        if(this.codificacion=="Comteco") return 'Comteco';
        if(this.codificacion=="Elfec") return 'Elfec';
        if(this.codificacion=="Devolucion_garantia") return 'Garantia';
        if(this.codificacion=="Caja_chica") return 'Cajachica';
        // if(this.codificacion=="Garantia") return 'Garantia';
        // if(this.codificacion=="Multas") return 'Multas';
        // if(this.codificacion=="Wifi") return 'Wifi';
        // if(this.codificacion=="Otro") return 'Otro';
        // if(this.codificacion=="Anticretico_pago_luz_agua") return 'AnticreticoPagoLuz';
        return 'index';
      },

    },
    mounted(){
      ///console.log(getUserData().cuenta)
        this.$store.commit('getListPasivos');
        this.$store.commit('getListInquilinos');
        this.firma=getUserData().cuenta;
        this.placeData=this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8);
  
        //this.items=this.$store.state.listEgresos;
       
    },
  
   
  }
</script>
