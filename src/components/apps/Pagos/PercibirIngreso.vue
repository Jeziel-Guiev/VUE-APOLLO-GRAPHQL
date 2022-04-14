<template>
  <div>
    <div>
       <!-- v-model="pago_activo.codificacion" -->
       <v-select           
                :items="$store.state.listActivos"
                item-text="nombre"
                v-model="codificacion" 
                item-value="nombre"
                :rules="[v => !!v || 'Codificacion es requerido']"
                label="Tipo de ingreso"
                required
       ></v-select>
    </div>
        <component :firma="firma" :placeData="placeData" :codificacion="codificacion" :is="layout"/>
  </div>
        
</template>
<script>
import axios from 'axios';
import Alquiler from './Contratos/Alquiler.vue';
import Garantia from './Contratos/Garantia.vue'
import index from './Contratos/index.vue'
import Multas from './Contratos/Multas.vue'
import Wifi from './Contratos/Wifi.vue'
import Otro from './Contratos/Otro.vue'
import Cajachica from './Contratos/CajaChicaActivo.vue'
import AnticreticoPagoLuz from './Contratos/AnticreticoLuzAgua.vue';



import {getJWTaccess,getJWToken} from '@/auth/jwtService.js';
import {getUserData} from '@/auth/utils.js';
  export default {
    components:{
      Cajachica,
      Alquiler,
      Garantia,
      index,
      Multas,
      Wifi,
      Otro,
      AnticreticoPagoLuz
    },
    data(){return{
       codificacion:'',
       firma:'',
       placeData:'',
      //  estadoMessage:false, 
      //  estadoAlquiler:false,
      //  estadoWifi:false,
      //  estadoGarantia:false,
      //  estadoMonto:true,
      //  inquilino:{},
      //  contrato_estado:true,
      //  states: ['2021','2022','2023','2023','2024','2025','2026','2027'],
      //  contrato:'',
      //  pago_activo:{
      //       garantia:null,
      //       wifi:null,
      //       inquilino_nombre:null,
      //       inquilino_id:null,
      //       placeData:'',
      //       codificacion:'',
      //       detalles:'',
      //       datecreate:'',
      //       gestion:String((new Date()).getFullYear()),
      //       monto:'', 
      //       estado:1,
      //       tipo:'activo',
      //       firma:''
      //     },
      // valid: true,
      // items: [],
      // checkbox: false,
    }},
    // methods: {
    //   async validateAlquiler(){
    //     this.pago_activo.inquilino_nombre=this.inquilino.name;
    //     this.pago_activo.inquilino_id=this.inquilino._id;
    //     this.pago_activo.diainicio=this.inquilino.diainicio;
    //    if(this.$refs.form.validate()==true){
    //      console.log(this.pago_activo);
    //     //  await axios.post('/insert-activo-transaccion',this.pago_activo,getJWTaccess()).then(({data})=>{
    //     //    this.estadoMessage=true;
    //     //  }).catch(err=>console.log('err'))
    //    } 
    //   },
    //   async validate () {
    //    if(this.$refs.form.validate()==true){
    //      console.log(this.pago_activo);
    //     //  await axios.post('/insert-activo-transaccion',this.pago_activo,getJWTaccess()).then(({data})=>{
    //     //    this.estadoMessage=true;
    //     //  }).catch(err=>console.log('err'))
    //    }
    //   },
    //   reset () {
    //     this.$refs.form.reset();
    //   },
    //   resetValidation () {
    //     this.$refs.form.resetValidation();
    //   },
    //   atras(){
    //         this.estadoMessage=false;
    //         this.pago_activo.garantia=null,
    //         this.pago_activo.wifi=null,
    //         this.pago_activo.inquilino_nombre=null,
    //         this.pago_activo.inquilino_id=null,
    //         //this.pago_activo.codificacion='',
    //         //this.pago_activo.detalles='',
    //         //this.pago_activo.datecreate='',
    //         this.pago_activo.gestion=String((new Date()).getFullYear()),
    //         this.pago_activo.monto='', 
    //         this.pago_activo.estado=1
    //         this.pago_activo.tipo='activo'
          
    //   }
    // },
    mounted(){
        this.$store.commit('getListActivos'); //getListInquilinos
        this.$store.commit('getListInquilinos');
        this.firma=getUserData().cuenta;
        this.placeData=this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8);
  
        //this.items=this.$store.state.listEgresos;
       
    },
    computed:{
      layout(){
        if(this.codificacion=="Alquiler") return 'Alquiler';
        if(this.codificacion=="Garantia") return 'Garantia';
        if(this.codificacion=="Multas") return 'Multas';
        if(this.codificacion=="Wifi") return 'Wifi';
        if(this.codificacion=="Otro") return 'Otro';
        if(this.codificacion=="Caja_chica") return 'Cajachica';
        if(this.codificacion=="Anticretico_pago_luz_agua") return 'AnticreticoPagoLuz';
        return 'index';
      },

    },
    watch:{
 
    }
  
   
  }
</script>
